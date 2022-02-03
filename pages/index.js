import Head from "next/head";
import { ContentSlider } from "../components/ContentSlider";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blomail</title>
        <meta
          name="description"
          content="BlomailApp by Jose Maria Cruz Iglesias"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container m-auto">
        <ContentSlider />
      </main>

      <footer></footer>
    </div>
  );
}
