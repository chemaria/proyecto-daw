import { NextResponse } from 'next/server'
export async function middleware(req, res) {
  const token = `Bearer ${req.cookies.jwt}`
  const { pathname, origin } = req.nextUrl

  const resFetch = await fetch(`${process.env.URLAPI}/user/userauth`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
  })

  if (resFetch.status !== 201) {
    return NextResponse.redirect(origin).cookie('jwt', '')
  }
}
