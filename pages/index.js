import Head from 'next/head'
import { ContentSlider } from '../components/general/ContentSlider'
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
