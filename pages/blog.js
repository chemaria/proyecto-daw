import HeaderBlog from '../components/blog/HeaderBlog'
import PostGridTotal from '../components/blog/PostGridTotal'
import PostVertical from '../components/blog/PostVertical'
import NavBar from '../components/general/NavBar'

export default function blog({ posts }) {
  return (
    <div>
      <div className="flex justify-center">
        <NavBar />
      </div>
      <div className="container mx-auto mt-28">
        <header>
          <HeaderBlog />
        </header>
        <main className="w-10/12 mx-auto">
          <h2 className=" mt-10 mb-10 text-2xl font-bold ">Mas Recetas</h2>
          <PostGridTotal>
            {posts.map((post) => {
              return <PostVertical key={post.id} {...post} />
            })}
          </PostGridTotal>
        </main>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.URLAPI + '/post/')
  console.log(res)
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
