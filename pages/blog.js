import HeaderBlog from '../components/blog/HeaderBlog'
import PostGridTotal from '../components/blog/PostGridTotal'
import PostHorizontal from '../components/blog/PostHorizontal'
import PostVertical from '../components/blog/PostVertical'
import NavBar from '../components/general/NavBar'
import { useSession } from '../context/SessionProvider'
export default function blog({ posts, lastpost }) {
  const { session, setSession } = useSession()
  console.log(session)
  return (
    <body className="container mx-auto">
      <header>
        <NavBar />
        <HeaderBlog />
      </header>
      <main>
        <PostHorizontal
          img={lastpost.img}
          tittle={lastpost.tittle}
          shortdesc={lastpost.shortdesc}
          visible={lastpost.visible}
          datePublish={lastpost.datePublish}
          likes={lastpost.likes}
          src={lastpost.avatar}
          id={lastpost.id}
        />
        <h2 className="w-10/12 mt-10 mb-10 text-2xl font-bold mnpmx-auto">
          Mas Recetas
        </h2>
        <PostGridTotal>
          {posts.map((post) => {
            return <PostVertical key={post.id} {...post} />
          })}
        </PostGridTotal>
      </main>
    </body>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/post/allposts')
  const res1 = await fetch('http://localhost:3000/api/post/lastpost')
  const posts = await res.json()
  const lastpost = await res1.json()
  return {
    props: {
      posts,
      lastpost,
    },
  }
}
