import bcrypt from 'bcrypt'
import mySqlDbConnect from '../../../lib/mySqlDbConnect'
import Jwt from 'jsonwebtoken'

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
    const token = Jwt.sign(generateToken, process.env.JWT)
    console.log(token)
    res.status(201).send({ username: dataLogin.user, token: token })
  } else {
    res.status(401).send({ error: 'error de autenticación 2' })
  }
}
