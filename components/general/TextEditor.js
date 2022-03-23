import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState, convertToRaw } from 'draft-js'
import dynamic from 'next/dynamic'
import draftToHtml from 'draftjs-to-html'
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)
export default function TextEditor({ tittle }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [content, setContent] = useState('')
  console.log(content)
  return (
    <>
      <h1>{tittle}</h1>
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={(newState) => {
            setEditorState(newState)
            setContent(draftToHtml(convertToRaw(newState.getCurrentContent())))
          }}
        />
      </div>
    </>
  )
}
