import NavBar from '../../components/admin/NavBar'
export default function Options() {
  return (
    <section>
      <div className="h-screen grid grid-cols-12">
        <div className="col-span-2">
          <NavBar />
        </div>
        <div className="col-span-10"></div>
      </div>

      <footer></footer>
    </section>
  )
}
