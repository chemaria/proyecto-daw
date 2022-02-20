import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export default async function middleware(req, res) {
  if (!req.cookies.jwt) {
    return new NextResponse('Auth Required', {
      status: 401,
    })
  }

  const tokenVerify = await jwt.verify(
    req.cookies.jwt,
    process.env.JWT_SECRET_KEY
  )

  if (!tokenVerify) {
    return new NextResponse('Auth Required', {
      status: 401,
    })
  }
}
