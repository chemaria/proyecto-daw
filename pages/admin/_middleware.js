import Jwt from 'jsonwebtoken'
export default function middleware(req, res) {
  if (!req.cookies.jwt) {
    return res.status(401).send('adios')
  }
  const verifyToken = Jwt.verify(req.cookies.jwt, process.env.JWT_SECRET_KEY)
  if (!verifyToken) {
    return res.status(401).send('adios')
  }
}
