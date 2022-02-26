import { useEffect } from 'react'
import { Logo } from '../components/icons/Logo'
import FormLogin from '../components/login/FormLogin'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  // useEffect(() => {
  //   if (isLogin) router.push('/admin')
  // }, [isLogin])
  return (
    <section className="flex items-center justify-center min-h-screen">
      <main>
        <div className="w-80 h-80 shadow-2xl">
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
