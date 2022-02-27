import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export default async function middleware(req, res) {
  if (!req.cookies.jwt) {
    return new NextResponse('Auth Required', {
      status: 401,
    })
  }
  try {
    await jwt.verify(req.cookies.jwt, process.env.JWT_SECRET_KEY)
  } catch (error) {
    // borrar cookies jwt
    return new NextResponse('Auth Required', {
      status: 401,
    })
  }
}
