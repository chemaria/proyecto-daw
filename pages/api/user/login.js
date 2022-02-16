import bcrypt from 'bcrypt'
import mySqlDbConnect from '../../../lib/mySqlDbConnect'
import { Jwt } from 'jsonwebtoken'

// end-point login user
export default async function handler(req, res) {
  const dataLogin = req.body

  // comprobamos si user esta bd
  const userDb = await mySqlDbConnect({
    query: 'SELECT id, password FROM users WHERE `username` = ?',
    params: [dataLogin.user],
  })
  console.log(userDb)
  // verificamos si user o password estan vacios y si user existe en bbdd
  if (!(dataLogin.user && dataLogin.password) && userDb.length === 0) {
    return res.status(401).json({ error: 'error de autenticación' })
  }
  // const pass = await bcrypt.hash(dataLogin.password, 10)
  const match = await bcrypt.compare(dataLogin.password, userDb[0].password)

  if (match) {
    res.status(201).send('perfe!')
    const generateToken = {
      id: userDb[0],
      username: dataLogin.user,
    }
  } else {
    res.status(401).json({ error: 'error de autenticación 2' })
  }
}
