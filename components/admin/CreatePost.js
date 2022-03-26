import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState, convertToRaw } from 'draft-js'
import dynamic from 'next/dynamic'
import draftToHtml from 'draftjs-to-html'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)
export default function CreatePost() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [content, setContent] = useState('')
  const [visible, setVisible] = useState(1)
  const [tittle, setTittle] = useState('')
  const [img, setImg] = useState(null)

  async function handleOnSubmit(evt) {
    const formData = new FormData()
    formData.append('description', content)
    formData.append('visible', visible)
    formData.append('tittle', tittle)
    formData.append('imageBlomali', img)

    const url = 'http://localhost:3000/api/createpost'

    await fetch(url, {
      method: 'POST',
      body: formData,
    })
  }

  return (
    <form onSubmit={(evt) => handleOnSubmit(evt)}>
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
        <input
          type={'file'}
          name="imageBlomali"
          accept="image/x-png,image/jpeg,image/gif"
          onChange={(evt) => {
            setImg(evt.target.files[0])
          }}
        />
        <div className="">
          <span className="mr-5">Visible:</span>
          <span className="mr-5">yes</span>
          <input
            type={'radio'}
            value={'yes'}
            checked
            name="visible"
            className="mr-10"
            onChange={() => setVisible(0)}
          />
          <span className="mr-5">no</span>
          <input
            type={'radio'}
            value={'no'}
            name="visible"
            onClick={() => {
              setVisible(0)
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-10 ml-10 px-20 py-2 font-bold text-white transition bg-[#e85e00] rounded hover:bg-[#b44900] mb-20"
      >
        SEND
      </button>
    </form>
  )
}
