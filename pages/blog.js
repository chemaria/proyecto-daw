import HeaderBlog from "../components/blog/HeaderBlog";
import PostGridTotal from "../components/blog/PostGridTotal";
import PostHorizontal from "../components/blog/PostHorizontal";
import PostVertical from "../components/blog/PostVertical";
import { NavBar } from "../components/NavBar";

export default function blog({ posts, lastpost }) {
  return (
    <main className="container mx-auto">
      <NavBar />
      <HeaderBlog />

      <PostHorizontal
        img={lastpost.img}
        tittle={lastpost.tittle}
        description={lastpost.description}
        visible={lastpost.visible}
        date_publish={lastpost.date_publish}
        likes={lastpost.likes}
        src={lastpost.avatar}
      />
      <h2 className="w-10/12 mx-auto text-2xl font-bold mb-10 mt-10">
        Mas Recetas
      </h2>
      <PostGridTotal>
        {posts.map((post) => {
          return <PostVertical key={post.id} {...post} />;
        })}
      </PostGridTotal>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(process.env.DOM_HOST + "/api/post/allposts");
  const res1 = await fetch(process.env.DOM_HOST + "/api/post/lastpost");
  const posts = await res.json();
  const lastpost = await res1.json();
  return {
    props: {
      posts,
      lastpost,
    },
  };
}
