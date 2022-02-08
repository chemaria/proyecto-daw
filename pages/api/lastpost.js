import { dbConnect } from "../../lib/dbConnect";
import Post from "../../models/Post";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  if (method === "GET") {
    try {
      const lastpost = await Post.findOne({}).sort({ date_publish: -1 });
      res.status(201).json(lastpost);
    } catch (error) {
      res.status(400);
    }
  }
}
