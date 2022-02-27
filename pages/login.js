import { Logo } from '../components/icons/Logo'
import FormLogin from '../components/login/FormLogin'
import { useEffect } from 'react'
import { useSession } from '../context/SessionProvider'
import Router from 'next/router'
import NavBar from '../components/general/NavBar'
export default function Login() {
  const { session, setSession } = useSession()
  useEffect(() => {
    if (session) Router.push('http://localhost:3000/admin/')
  }, [session])

  return (
    <>
      <NavBar />
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
    </>
  )
}
