import { Logo } from '../components/icons/Logo'
import FormLogin from '../components/login/FormLogin'
import { useEffect } from 'react'
import { useSession } from '../context/SessionProvider'
import { useRouter } from 'next/router'
import NavBar from '../components/general/NavBar'
export default function Login() {
  // const router = useRouter()
  // const { session } = useSession()
  // useEffect(() => {
  //   console.log('pasa por aqui!!')
  //   console.log(session)
  //   if (session) {
  //     console.log(session)
  //     router.push('/admin/')
  //   }
  // }, [session])

  return (
    <div>
      <div className="flex justify-center">
        <NavBar />
      </div>
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
    </div>
  )
}
