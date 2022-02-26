import Link from 'next/link'
import { Logo } from '../icons/Logo'
import { useSession } from '../../context/SessionProvider'
import Cookies from 'js-cookie'
export default function NavBar() {
  const { session, setSession } = useSession()
  setSession(Cookies.get('jwt'))

  const isLogin = (session) => {
    if (session) {
      return (
        <li className="flex items-center">
          <Link href="/admin">
            <a className="hover:underline hover:font-bold">Hihi</a>
          </Link>
        </li>
      )
    }
    return (
      <li className="flex items-center">
        <Link href="/login">
          <a className="hover:underline hover:font-bold">Login</a>
        </Link>
      </li>
    )
  }

  return (
    <nav className="sticky bg-white shadow-xl">
      <ul className="container flex justify-around mx-auto align-middle">
        <li>
          <Logo />
        </li>
        <li className="flex items-center text">
          <Link href="/">
            <a className="hover:underline hover:font-bold">Inicio</a>
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/blog">
            <a className="hover:underline hover:font-bold">Blog</a>
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/lanzamientos">
            <a className="hover:underline hover:font-bold">Lanzamientos</a>
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/recursos">
            <a className="hover:underline hover:font-bold">
              Recursos Gratuitos
            </a>
          </Link>
        </li>
        {isLogin(session)}
      </ul>
    </nav>
  )
}
