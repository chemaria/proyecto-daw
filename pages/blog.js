import HeaderBlog from "../components/blog/HeaderBlog";
import PostGridTotal from "../components/blog/PostGridTotal";
import PostHorizontal from "../components/blog/PostHorizontal";
import PostVertical from "../components/blog/PostVertical";
import { NavBar } from "../components/NavBar";

export default function blog({ posts }) {
  return (
    <main className="container mx-auto">
      <NavBar />
      <HeaderBlog />
      <PostHorizontal />
      <h2 className="w-10/12 mx-auto text-2xl font-bold mb-10 mt-10">
        Mas Recetas
      </h2>

      <PostGridTotal posts={posts}>
        <PostVertical />
        <PostVertical />
        <PostVertical />
        <PostVertical />
      </PostGridTotal>
    </main>
  );
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
