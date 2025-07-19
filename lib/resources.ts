import clientPromise from "@/lib/mongo";
import { ResourceWrapper } from "@/types/resource";

export async function fetchResources(): Promise<ResourceWrapper[]> {
  try {
    const client = await clientPromise;
    const db = client.db("medical-equipment");
    const collection = db.collection<ResourceWrapper>("equipment");
    
    const resources = await collection.find({}).toArray();
    return JSON.parse(JSON.stringify(resources));
  } catch (error) {
    console.error("Error fetching resources:", error);
    return [];
  }
}