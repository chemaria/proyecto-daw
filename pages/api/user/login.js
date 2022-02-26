import bcrypt from 'bcrypt'
import mySqlDbConnect from '../../../lib/mySqlDbConnect'
import Jwt from 'jsonwebtoken'
import cookie from 'cookie'

// end-point login user
export default async function handler(req, res) {
  const dataLogin = req.body

  // comprobamos si user esta bd
  const userDb = await mySqlDbConnect({
    query: 'SELECT id, password FROM users WHERE `username` = ?',
    params: [dataLogin.user],
  })

  // verificamos si user o password estan vacios y si user existe en bbdd
  if (!(dataLogin.user && dataLogin.password) || userDb.length === 0) {
    return res.status(401).send({ error: 'error de autenticación' })
  }
  // const pass = await bcrypt.hash(dataLogin.password, 10)
  const match = await bcrypt.compare(dataLogin.password, userDb[0].password)

  if (match) {
    const generateToken = {
      id: userDb[0].id,
      username: dataLogin.user,
    }

    const token = await Jwt.sign(generateToken, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_TIME_TO_LIVE,
    })
    // set jwt cookie
    const cookiesOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      httpOnly: false,
      path: '/',
      domain: 'localhost',
    }
    res.setHeader('Set-Cookie', cookie.serialize('jwt', token, cookiesOptions))

    res.status(201).send({ username: dataLogin.user, token: token })
  } else {
    res.status(401).send({ error: 'error de autenticación' })
  }
}
