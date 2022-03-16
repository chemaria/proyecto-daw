import { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState } from 'draft-js'
export default function TextEditor({ tittle }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  return (
    <>
      <h1>{tittle}</h1>
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
        />
      </div>
    </>
  )
}
