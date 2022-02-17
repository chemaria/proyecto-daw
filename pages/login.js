import { Logo } from '../components/icons/Logo'
import FormLogin from '../components/login/FormLogin'

export default function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <main>
        <div className="grid grid-cols-3 align-middle">
          <div></div>
          <div className="px-16 py-16 shadow-lg">
            <div className="flex justify-center align-top">
              <Logo />
            </div>
            <FormLogin />
          </div>
          <div></div>
        </div>
      </main>
      <footer></footer>
    </section>
  )
}
