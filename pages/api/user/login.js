import bcrypt from 'bcrypt'
import mySqlDbConnect from '../../../lib/mySqlDbConnect'
import { Jwt } from 'jsonwebtoken'

// end-point login user
export default async function handler(req, res) {
  const dataLogin = req.body

  // comprobamos si user esta bd
  const userDb = await mySqlDbConnect({
    query: 'SELECT id FROM users WHERE `username` = ?',
    params: [dataLogin.user],
  })
  // verificamos si user o password estan vacios y si user existe en bbdd
  if (!(dataLogin.user || dataLogin.password) || userDb.length === 0) {
    return res.status(401).json({ error: 'error de autenticación' })
  }

  const reqData = await mySqlDbConnect({
    query: 'SELECT password FROM users WHERE `username` = ?',
    params: [dataLogin.user],
  })
  // const pass = await bcrypt.hash(dataLogin.password, 10)
  const match = await bcrypt.compare(dataLogin.password, reqData[0].password)

  if (match) {
    res.status(201).send('perfe!')
  } else {
    res.status(401).json({ error: 'error de autenticación' })
  }
}
