import Link from "next/link";
import { Logo } from "./logo";
export default function NavBar() {
  return (
    <nav className="bg-white shadow-xl sticky">
      <ul className="flex justify-around  align-middle container mx-auto">
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
        <li className="flex items-center">
          <Link href="/faq">
            <a className="hover:underline hover:font-bold">FAQ</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
