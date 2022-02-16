import bcrypt from 'bcrypt'
import mySqlDbConnect from '../../../lib/mySqlDbConnect'

// end-point login user
export default async function handler(req, res) {
  const dataLogin = req.body
  if (!dataLogin.user || !dataLogin.password) {
    return res.json({ res: 'invalid username or password' }).status(401)
  }
  const reqData = await mySqlDbConnect({
    query: 'SELECT password FROM users WHERE `username` = ?',
    params: [dataLogin.user],
  })
  // const pass = await bcrypt.hash(dataLogin.password, 10)
  const match = await bcrypt.compare(dataLogin.password, reqData[0].password)

  if (match) {
    res.send('perfe!')
    res.status(201)
  } else {
    res.send('algo falla')
    res.status(401)
    res.end()
  }
}
