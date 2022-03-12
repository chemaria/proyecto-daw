import Head from 'next/head'
import { ContentMiddle, ContentTop } from '../components/general/ContentMainWeb'
import NavBar from '../components/general/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blomail</title>
        <meta
          name="description"
          content="BlomileApp by Jose Maria Cruz Iglesias"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-center">
        <NavBar />
      </header>
      <main className="">
        <ContentTop />
        <ContentMiddle />
      </main>
      <footer></footer>
    </>
  )
}
