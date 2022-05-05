import Link from 'next/link'
import { Logo } from '../icons/Logo'
import { useSession } from '../../context/SessionProvider'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

export default function NavBar({ scroll }) {
  const { session, setSession } = useSession()

  useEffect(() => {
    setSession(Cookies.get('jwt'))
  }, [])

  const isLogin = (session) => {
    if (session) {
      return (
        <li className="">
          <a href="/admin" className="hover:underline">
            Admin
          </a>
        </li>
      )
    }
    return (
      <li className="">
        <Link href="/login">
          <a className="hover:underline">Login</a>
        </Link>
      </li>
    )
  }

  return (
    <nav className="bg-white shadow-xl fixed top-0 z-50 container mx-auto rounded-md">
      <div className="columns-2">
        <div className="w-1/3 pl-10">
          <Logo />
        </div>
        <div className="my-auto">
          <ul className="flex items-center justify-between w-2/3 h-24">
            <li className="">
              <Link href="/">
                <a className="hover:underline">Inicio</a>
              </Link>
            </li>
            <li className="">
              <Link href="/blog">
                <a className="hover:underline">Blog</a>
              </Link>
            </li>
            <li className="">
              <Link href="/lanzamientos">
                <a className=" hover:underline">Lanzamientos</a>
              </Link>
            </li>
            <li className="">
              <Link href="/recursos">
                <a className="hover:underline">Recursos Gratuitos</a>
              </Link>
            </li>
            {isLogin(session)}
          </ul>
        </div>
      </div>
    </nav>
  )
}
