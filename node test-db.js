import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

async function test() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("resources");
    const docs = await collection.find({}).toArray();
    console.log("Documents:", docs);
  } catch (e) {
    console.error("DB connection error:", e);
  } finally {
    await client.close();
  }
}

test();