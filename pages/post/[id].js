import Image from 'next/image'
import NavBar from '../../components/general/NavBar'
export default function Post(props) {
  return (
    <section>
      <div className="flex justify-center">
        <NavBar />
      </div>
      <header
        className={
          'bg-image-post bg-cover bg-no-repeat min-h-screen flex items-center flex-col justify-center'
        }
      >
        <h1 className="text-6xl font-bold text-white">{props.tittle}</h1>
        <div>
          <a href="#goToPost">
            <p className="mt-20 text-lg text-center text-white">Leer más</p>
            <Image
              src="/img/down-arrow-w.svg"
              width={100}
              height={100}
              alt="props.tittle"
            />
          </a>
        </div>
      </header>
      <main id="goToPost">
        <div className="w-5/6 mx-auto">
          <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
        </div>
      </main>
      <footer></footer>

      <style jsx>{`
        p {
          font-size: 20px;
        }
        .bg-image-post {
          background-image: url(${props.img});
        }
      `}</style>
    </section>
  )
}

export async function getStaticPaths() {
  // llamada a la api para generar las rutas
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + '/post/')
  const posts = await res.json()

  // crea un objeto con las rutas
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + '/post/' + params.id)
  const post = await res.json()
  return { props: post[0] }
}
