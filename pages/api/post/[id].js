import mySqlDbConnect from "../../../lib/mySqlDbConnect";

//end-point que nos devuelve un post por slug
export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    const { id } = req.query;
    try {
      const db = await mySqlDbConnect({
        query: `SELECT * FROM posts WHERE id=${id}`,
      });

      res.status(200).json(db);
      res.end();
    } catch (error) {
      res.status(400);
    }
  }
}
