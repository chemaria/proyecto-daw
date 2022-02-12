export function ContentSlider({ image, h1, h2, h3 }) {
  return (
    <div>
      <div className="bg-[url('http://localhost:3000/img/blomail_principal4.png')] bg-cover min-h-min">
        <div className="w-1/2 ml-6 pt-10 pl-10 pb-20">
          <h1 className="text-4xl font-bold text-white pb-5">
            ¿Quieres disponer de todo lo necesario para vender por internet?
          </h1>
          <ul className="text-white text-xl">
            <li>-Blog</li>
            <li>-Email Marketing</li>
            <li>-Landings de aterrizaje</li>
            <li>-Analíticas web</li>
            <li>-Analisis de la competencia</li>
            <li>-Embudos de marketing</li>
            <li>-Emisión de webinars </li>
            <li>-Y mucho mas....</li>
          </ul>
          <h2 className="text-3xl text-white pt-5 text-center">
            ¡Y todo combinado en la misma aplicación!
          </h2>
          <div className="flex justify-center mt-10">
            <a
              role="button"
              className="text-black font-bold py-2 px-20 bg-gray-300 hover:bg-gray-500 rounded transition"
            >
              ¡Lo quiero!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
