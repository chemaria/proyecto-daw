export default function Post({ props }) {
  return <div>{console.log(props)}</div>;
}

export async function getStaticPaths() {
  //llamada a la api para generar las rutas
  const res = await fetch(process.env.DOM_HOST + "/api/posts");
  const posts = await res.json();

  //crea un objeto con las rutas
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(process.env.DOM_HOST + "/api/posts" + params.id);
  const post = await res.json();

  return { props: post };
}
