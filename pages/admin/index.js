import NavBar from '../../components/admin/NavBar'
export default function Home() {
  return (
    <section>
      <div className="h-screen grid grid-cols-12">
        <div className="col-span-3">
          <NavBar />
        </div>
        <div className="col-span-9"></div>
      </div>

      <footer></footer>
    </section>
  )
}
