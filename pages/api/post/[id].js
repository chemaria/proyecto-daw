import { dbConnect } from "../../../lib/dbConnect";
import Post from "../../../models/Post";
//end-point que nos devuelve un post por slug
export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    const { id } = req.query;
    try {
      const post = await Post.findById(id);
      res.status(201).json(post);
    } catch (error) {
      res.status(400);
    }
  }
}
