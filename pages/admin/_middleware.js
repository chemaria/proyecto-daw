import { NextResponse } from 'next/server'
import Jwt from 'jsonwebtoken'

export default async function middleware(req, res) {
  if (!req.cookies.jwt) {
    return new NextResponse('Auth Required', {
      status: 401,
    })
  }

  await Jwt.verify(req.cookies.jwt, process.env.JWT_SECRET_KEY, (err) => {
    if (err)
      return new NextResponse('Auth Required', {
        status: 401,
      })
  })
}
