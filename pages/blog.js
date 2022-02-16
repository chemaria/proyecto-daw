import HeaderBlog from '../components/blog/HeaderBlog'
import PostGridTotal from '../components/blog/PostGridTotal'
import PostHorizontal from '../components/blog/PostHorizontal'
import PostVertical from '../components/blog/PostVertical'
import NavBar from '../components/general/NavBar'

export default function blog ({ posts, lastpost }) {
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
        <h2 className="w-10/12 mnpmx-auto text-2xl font-bold mb-10 mt-10">
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

export async function getStaticProps () {
  const res = await fetch(process.env.BLOMAIL_URL + '/api/post/allposts')
  const res1 = await fetch(process.env.BLOMAIL_URL + '/api/post/lastpost')
  const posts = await res.json()
  const lastpost = await res1.json()
  return {
    props: {
      posts,
      lastpost
    }
  }
}
