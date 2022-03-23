import NavBar from '../../components/admin/NavBar'
import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState, convertToRaw } from 'draft-js'
import dynamic from 'next/dynamic'
import draftToHtml from 'draftjs-to-html'
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)

export default function ManagePost() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [content, setContent] = useState('')
  const [tittle, setTittle] = useState('')
  const [createPost, setCreatePost] = useState(false)

  function managePost() {
    let view
    if (createPost === false) {
      view = (
        <a
          role="button"
          className="ml-10 px-20 py-2 font-bold text-white transition bg-[#e85e00] rounded hover:bg-[#b44900] mb-20"
          onClick={() => setCreatePost(true)}
        >
          Create Post
        </a>
      )
    } else {
      view = (
        <div className="mt-8 ml-10">
          <input
            type="text"
            placeholder="Tittle"
            className="w-2/3 border-2 border-slate-300 mb-5"
            required
            onChange={(evt) => {
              setTittle(evt.target.value)
            }}
          />

          <div className="">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={(newState) => {
                setEditorState(newState)
                setContent(
                  draftToHtml(convertToRaw(newState.getCurrentContent()))
                )
              }}
            />
          </div>
          <div className="">
            <span className="mr-5">Visible:</span>
            <span className="mr-5">yes</span>
            <input
              type={'radio'}
              checked
              value={'yes'}
              name="visible"
              className="mr-10"
            />
            <span className="mr-5">no</span>
            <input type={'radio'} value={'no'} name="visible" />
          </div>
        </div>
      )
    }
    return view
  }
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

          <div className="">{managePost()}</div>
        </div>
      </div>
      <footer></footer>
    </section>
  )
}
