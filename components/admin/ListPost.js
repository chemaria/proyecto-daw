import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ListPost() {
  const [posts, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [onHover, setOnHover] = useState(false)
  useEffect(() => {
    fetch(process.env.URLAPI + '/post/', {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((post) => {
        setPost(post)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Image src={'/img/general/loading.gif'} width={150} height={150} />
      </div>
    )
  } else {
    return (
      <div className="flex justify-center mt-10">
        <table className="table-fixed w-4/5">
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Tittle</th>
              <th className="text-left">Url</th>
              <th className="text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => {
              const bgColor =
                index % 2 === 0
                  ? 'bg-slate-300 hover:bg-slate-400 hover:shadow-md hover:cursor-pointer'
                  : 'hover:bg-slate-100 hover:shadow-2xl hover:cursor-pointer'
              return (
                <tr
                  key={post.id}
                  className={bgColor}
                  onMouseEnter={() => setOnHover(true)}
                  onMouseLeave={() => setOnHover(false)}
                >
                  <td className="p-4 ">
                    {post.id}
                    {onHover ? <div>asdadasd</div> : null}
                  </td>

                  <td>{post.tittle}</td>
                  <td>{process.env.URLAPP + '/post/' + post.id}</td>
                  <td>{post.datePublish}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
