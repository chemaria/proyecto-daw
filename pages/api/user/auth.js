import Jwt from 'jsonwebtoken'
export default async function handler(req, res) {
  const token = req.cookies.jwt

  await Jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    err
      ? res.status(401).json({ err: 'token invalido' })
      : res.status(201).send({ username: decoded.username })
  })
}
