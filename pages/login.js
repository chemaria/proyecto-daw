import { Logo } from '../components/icons/Logo'
import FormLogin from '../components/login/FormLogin'

export default function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <main>
        <div className="shadow-2xl w-80 h-80">
          <div className="flex justify-center align-top">
            <Logo />
          </div>
          <FormLogin />
        </div>
      </main>
      <footer></footer>
    </section>
  )
}
