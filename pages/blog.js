import HeaderBlog from '../components/blog/HeaderBlog'
import PostGridTotal from '../components/blog/PostGridTotal'
import PostVertical from '../components/blog/PostVertical'
import NavBar from '../components/general/NavBar'

export default function blog({ posts }) {
  console.log(posts)
  return (
    <div className="container mx-auto">
      <header>
        <NavBar />
        <HeaderBlog />
      </header>
      <main>
        <h2 className="w-10/12 mt-10 mb-10 text-2xl font-bold mnpmx-auto">
          Mas Recetas
        </h2>
        <PostGridTotal>
          {posts.map((post) => {
            return <PostVertical key={post.id} {...post} />
          })}
        </PostGridTotal>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.APIURL + '/post/')
  console.log(res)
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
