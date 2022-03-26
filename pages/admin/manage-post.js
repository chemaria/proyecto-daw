import NavBar from '../../components/admin/NavBar'
import { useState } from 'react'
import CreatePost from '../../components/admin/CreatePost'
import ListPost from '../../components/admin/ListPost'

export default function ManagePost() {
  const [createPost, setCreatePost] = useState(false)

  return (
    <section>
      <div className="h-screen grid grid-cols-12">
        <div className="col-span-2">
          <NavBar />
        </div>
        <div className="col-span-10">
          <div className="">
            <h1 className="text-3xl mt-10 mb-10 text-center">
              Manage your Post
            </h1>
          </div>
          <div>
            <a
              role="button"
              className="ml-10 px-20 py-2 font-bold text-white transition bg-[#e85e00] rounded hover:bg-[#b44900] mb-20"
              onClick={() => setCreatePost(true)}
            >
              {!createPost ? 'Create Post' : 'ListPost'}
            </a>
            {!createPost ? <ListPost /> : <CreatePost />}
          </div>
        </div>
      </div>
      <footer></footer>
    </section>
  )
}
