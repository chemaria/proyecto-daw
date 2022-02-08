import { dbConnect } from "../../lib/dbConnect";
import Post from "../../models/Post";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find({}).sort({ date_publish: -1 });
        res.status(200).json(posts);
      } catch (error) {
        res.status(400);
      }
      break;
    case "POST":
      try {
        const post = await Post.create(req.body);
        res.status(201).json({ data: post });
      } catch (error) {
        res.status(400);
      }
      break;
    default:
      res.status(400);
      break;
  }
}
