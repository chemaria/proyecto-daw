export function ContentSlider({ image, h1, h2, h3 }) {
  return (
    <div>
      <div className="bg-black/50 bg-[url('http://localhost:3000/img/newDesing/headerWeb.jpg')] bg-cover h-screen flex flex-col items-center justify-center ">
        <div className="">
          <h1 className="pb-5 text-4xl font-bold text-center text-white ">
            ¿Quieres disponer de todo lo necesario <br /> para vender por
            internet?
          </h1>

          <h2 className="pt-5 text-3xl text-center text-white">
            ¿Y en una sola aplicación?
          </h2>
          <div className="flex justify-center mt-10">
            <a
              role="button"
              className="px-20 py-2 font-bold text-black transition bg-gray-300 rounded hover:bg-gray-500"
            >
              ¡Lo quiero!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
