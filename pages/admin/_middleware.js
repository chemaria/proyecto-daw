import { NextResponse } from 'next/server'
import Jwt from 'jsonwebtoken'
export default function middleware(req, res) {
  if (!req.cookies.jwt) {
    return new NextResponse('Auth Required', {
      status: 401,
    })
  }
  const verifyToken = Jwt.verify(req.cookies.jwt, process.env.JWT_SECRET_KEY)
  if (!verifyToken) {
    return res.status(401).send('adios')
  }
}
