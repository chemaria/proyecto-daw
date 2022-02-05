export default function blog({ posts }) {
  return <div>hola</div>;
}

export async function getStaticProps() {
  const res = await fetch(process.env.DOM_HOST + "/api/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
