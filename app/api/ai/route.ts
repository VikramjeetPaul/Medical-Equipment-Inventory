import { NextResponse } from "next/server";
import OpenAI from "openai";
import clientPromise from "@/lib/mongo";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || prompt.length > 500) {
      return NextResponse.json(
        { error: "Prompt too long or missing" },
        { status: 400 }
      );
    }
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("equipment");
    const equipmentList = await collection.find({}).toArray();
    const inventorySummary = equipmentList
      .map(
        (item) =>
          `- ${item.productName} (Serial: ${item.serialNumber}): Price $${item.itemValue}, Quantity ${item.quantity}`
      )
      .join("\n");
    const combinedPrompt = `
You are an inventory assistant. Here is the current inventory data:
${inventorySummary}

Please answer the following question based on this data:

${prompt}
    `;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: combinedPrompt }],
      max_tokens: 200,
    });

    return NextResponse.json({
      text: completion.choices?.[0]?.message?.content?.trim() ?? "No response from AI",
    });
  } catch (err: any) {
    console.error("❌ OpenAI error:", err);

    if (
      err.status === 429 ||
      (err.code && err.code === "insufficient_quota") ||
      err.message?.includes("quota")
    ) {
      return NextResponse.json(
        {
          error:
            "OpenAI quota exceeded or rate limit hit. Please try again later.",
        },
        { status: 429 }
      );
    }

    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}