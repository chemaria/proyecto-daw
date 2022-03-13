import { Logo } from '../icons/Logo'
export default function NavBar() {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/admin/magage-post">Manage Post</a>
          </li>
          <li>
            <a href="/admin/magage-user">Manage User</a>
          </li>
          <li>
            <a href="/admin/competence">Competence</a>
          </li>
          <li>
            <a href="/admin/options">Theme Options</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
