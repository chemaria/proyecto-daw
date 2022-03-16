import NavBar from '../../components/admin/NavBar'
import TextEditor from '../../components/general/TextEditor'
export default function ManagePost() {
  return (
    <section>
      <div className="h-screen grid grid-cols-12">
        <div className="col-span-2">
          <NavBar />
        </div>
        <div className="col-span-10">
          <div className="flex justify-center align-middle items-center flex-col">
            <TextEditor tittle={'Editor'} />
          </div>
        </div>
      </div>

      <footer></footer>
    </section>
  )
}
