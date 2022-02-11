import { Navbar } from "../../components/NavBar";
export default function Post(props) {
  console.log();
  return (
    <body>
      <header>
        <h1>{props.tittle}</h1>
        {/* <Navbar /> */}
      </header>
      <main></main>
      <footer></footer>
    </body>
  );
}

export async function getStaticPaths() {
  //llamada a la api para generar las rutas
  const res = await fetch(process.env.DOM_HOST + "/api/post/allposts");
  const posts = await res.json();

  //crea un objeto con las rutas
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(process.env.DOM_HOST + "/api/post/" + params.id);
  const post = await res.json();

  return { props: post };
}
