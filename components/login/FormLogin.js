import Button from '../general/Button'
import { useState } from 'react'
export default function FormLogin({ onClick }) {
  const [data, setData] = useState({
    user: '',
    password: '',
  })

  function handleChange(evt) {
    setData({ ...data, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    const res = await fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        user: data.user,
        password: data.password,
      }),
    })
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <input
          className="w-2/4 mx-auto my-2 border-2 border-gray-400 rounded focus:text-red-400"
          type="text"
          placeholder="Usuario"
          name="user"
          onChange={handleChange}
        ></input>
        <input
          className="w-2/4 mx-auto my-2 border-2 border-gray-400 rounded focus:text-red-400"
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        ></input>
        <div className="mb-6 ml-4 mr-4">
          <Button
            className="w-2/4 px-10 py-1 font-bold duration-500 border-2 rounded-md hover:bg-slate-400"
            text="Login"
            type="submit"
          />
          <Button
            className="w-2/4 px-10 py-1 font-bold duration-500 border-2 rounded-md hover:bg-slate-400"
            text="Cancelar"
            onClick={onClick}
          />
        </div>
      </div>
    </form>
  )
}
