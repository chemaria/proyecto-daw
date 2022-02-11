import Head from "next/head";
import { ContentSlider } from "../components/ContentSlider";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <body>
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
    </body>
  );
}
