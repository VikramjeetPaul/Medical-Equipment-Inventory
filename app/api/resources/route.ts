import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongo";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("equipment");

    if (!data.serialNumber || !data.productName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const result = await collection.insertOne(data);

    return NextResponse.json({ message: "Equipment added", id: result.insertedId });
  } catch (error) {
    console.error("Error adding equipment:", error);
    return NextResponse.json({ error: "Failed to add equipment" }, { status: 500 });
  }
}