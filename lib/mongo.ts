import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("❌ MONGODB_URI not defined in .env.local");
}

const client = new MongoClient(uri);

const clientPromise = client.connect()
  .then((client) => {
    console.log("✅ Connected to MongoDB");
    return client;
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  });

export default clientPromise;