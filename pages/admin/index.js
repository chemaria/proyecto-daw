import styles from '../../styles/Admin.module.css'

export default function Home() {
  return (
    <section>
      <head>
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
      </head>
      <body></body>
      <footer></footer>
    </section>
  )
}
