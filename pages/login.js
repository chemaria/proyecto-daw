import { Logo } from '../components/icons/Logo'
import FormLogin from '../components/login/FormLogin'
import { useEffect } from 'react'
import { useSession } from '../context/SessionProvider'
import { useRouter } from 'next/router'
export default function Login() {
  const { session, setSession } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session) router.push('/admin')
  }, [])

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
