import { Logo } from '../icons/Logo'
export default function NavBar() {
  return (
    <div className="pl-5 h-screen bg-blue-100 ">
      <a href="/">
        <Logo />
      </a>

      <nav className="relative mt-20 mx-5, font-bold">
        <ul className="flex flex-col h-screen">
          <li className="my-7">
            <a
              className="text-blue-900 tracking-wide transition-all ease-out hover:text-slate-400 hover:border-b-2 border-blue-900"
              href="/admin/manage-post"
            >
              Manage Post
            </a>
          </li>
          <li className="my-7">
            <a
              className="text-blue-900 tracking-wide transition-all ease-out hover:text-slate-400 hover:border-b-2 border-blue-900"
              href="/admin/manage-user"
            >
              Manage User
            </a>
          </li>
          <li className="my-7">
            <a
              className="text-blue-900 tracking-wide transition-all ease-out hover:text-slate-400 hover:border-b-2 border-blue-900"
              href="/admin/competence"
            >
              Competence
            </a>
          </li>
          <li className="my-7">
            <a
              className="text-blue-900 tracking-wide transition-all ease-out hover:text-slate-400 hover:border-b-2 border-blue-900"
              href="/admin/options"
            >
              Theme Options
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
