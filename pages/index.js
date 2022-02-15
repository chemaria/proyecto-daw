import Head from "next/head";
import { ContentSlider } from "../components/general/ContentSlider";
import NavBar from "../components/general/NavBar";
import { Logo } from "../components/icons/Logo";
import Modal from "../components/login/Modal";
import { useState } from "react";
export default function Home() {
  const [showModal, setShow] = useState(false);

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
        <NavBar onClick={() => setShow(true)} />
        <Modal showModal={showModal} onClick={() => setShow(false)}>
          <Logo />
        </Modal>
      </header>
      <main className="container m-auto">
        <ContentSlider />
      </main>
      <footer></footer>
    </>
  );
}
