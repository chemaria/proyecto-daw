import Head from 'next/head'
import { useEffect } from 'react'
import { ContentSlider } from '../components/general/ContentSlider'
import NavBar from '../components/general/NavBar'
import { useSession } from '../context/SessionProvider'

export default function Home() {
  useEffect(async () => {
    const response = await fetch('/api/user/auth')
    const isLogin = await response.json()
  }, [])
  const { session, setSession } = useSession()

  return (
    <>
      <Head>
        <title>Blomail</title>
        <meta
          name="description"
          content="BlomailApp by Jose Maria Cruz Iglesias"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="container m-auto">
        <ContentSlider />
      </main>
      <footer></footer>
    </>
  )
}
