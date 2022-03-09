import Button from '../general/Button'
import { useState } from 'react'
import Link from 'next/link'
import { useSession } from '../../context/SessionProvider'
import Cookies from 'js-cookie'

export default function FormLogin() {
  // set global session
  const { setSession } = useSession()
  const [data, setData] = useState({
    user: '',
    password: '',
  })

  const [login, setLogin] = useState('')
  function handleChange(evt) {
    setData({ ...data, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    const response = await fetch(process.env.APIURL + '/user/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        user: data.user,
        password: data.password,
      }),
    })

    if (response.status === 401) {
      setLogin('Usuario o contraseña inválidos')
    } else {
      const token = Cookies.get('jwt')
      setSession(token)
    }

    // redireccionar a admin
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <input
          className="mx-auto my-2 border-2 border-gray-400 rounded"
          type="text"
          placeholder="Usuario"
          name="user"
          onChange={handleChange}
        ></input>
        <input
          className="mx-auto my-2 border-2 border-gray-400 rounded focus:ring-green-500"
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        ></input>
        <span className="text-center text-red-500">{login}</span>
        <div className="flex flex-col mt-10 mb-6">
          <Button
            className="px-10 py-1 mx-auto font-bold text-white duration-500 bg-green-500 border-2 rounded-md hover:bg-green-800"
            text="Login"
            type="submit"
          />
          <Link href="/">
            <a className="px-10 py-1 mx-auto mt-2 font-bold text-center text-white duration-500 bg-red-500 border-2 rounded-md hover:bg-red-800">
              Cancelar
            </a>
          </Link>
        </div>
      </div>
    </form>
  )
}
