import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { User } from "@/types/User";

const uri = "mongodb+srv://harshil:harshil@cluster0.xqra17r.mongodb.net/";
const client = new MongoClient(uri);

const dbName = "test";
const collectionName = "users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.connect();
  const db = client.db(dbName);
  const users = db.collection(collectionName);

  if (req.method === "POST") {
    const { username, password, action } = req.body;

    if (action === "register") {
      const existingUser = await users.findOne({ username });
      if (existingUser) {
        client.close();
        return res.status(400).json({ message: "Username already exists" });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser: User = {
        username,
        passwordHash,
      };

      await users.insertOne(newUser);

      const authToken = "dummy-token";

      client.close();
      res.status(200).json({ authToken });
    } else if (action === "login") {
      const user = await users.findOne({ username });

      if (!user) {
        client.close();
        return res.status(404).json({ message: "User not found" });
      }

      const passwordMatch = await bcrypt.compare(password, user.passwordHash);

      if (!passwordMatch) {
        client.close();
        return res.status(401).json({ message: "Invalid password" });
      }

      const authToken = "dummy-token";
      client.close();
      res.status(200).json({ authToken });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
