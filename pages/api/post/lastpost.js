import mySqlDbConnect from '../../../lib/mySqlDbConnect'

// end-point que nos devuelve el ultimo post creado
export default async function handler (req, res) {
  const { method } = req
  if (method === 'GET') {
    try {
      const db = await mySqlDbConnect({
        query: 'SELECT * FROM posts ORDER BY datePublish LIMIT 1'
      })
      res.status(200).json(db[0])
      res.end()
    } catch (error) {
      res.status(400)
    }
  }
}
