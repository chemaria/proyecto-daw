import { bcrypt } from 'bcrypt'
import mySqlDbConnect from '../../../lib/mySqlDbConnect'

// end-point login user
export default async function handler (req, res) {
  const dataLogin = req.body
  console.log(dataLogin)
  res.end()
}
