// MySQL
import mySqlDbConnect from '../../../lib/mySqlDbConnect'
export default async function handler (req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const db = await mySqlDbConnect({ query: 'select * from posts' })
        res.status(200).json(db)
        res.end()
      } catch (error) {
        res.status(400)
      }
      break
    case 'POST':
      try {
        // const post = await Post.create(req.body)
        // res.status(201).json({ data: post })
      } catch (error) {
        res.status(400)
      }
      break
    default:
      res.status(400)
      break
  }
}
