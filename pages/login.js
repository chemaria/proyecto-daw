import { useState } from 'react'
import { Logo } from '../components/icons/Logo'
import FormLogin from '../components/login/FormLogin'
import Modal from '../components/login/Modal'

export default function Login() {
  const [showModal, setShow] = useState(false)
  return (
    <body className="min-h-screen">
      <header>
        <h1>Login</h1>
      </header>
      <main>
        <Modal showModal={showModal} onClick={() => setShow(false)}>
          <Logo />
        </Modal>
        <div>
          <FormLogin />
        </div>
      </main>
      <footer></footer>
    </body>
  )
}
