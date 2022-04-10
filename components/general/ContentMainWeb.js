import Image from 'next/image'

export const ContentTop = () => {
  return (
    <section className="bg-black/50 bg-image-index bg-cover h-screen flex flex-col items-center justify-center ">
      <div className="">
        <h1 className="pb-5 text-6xl font-bold text-center text-white ">
          ¿Quieres disponer de todo lo necesario <br /> para vender por
          internet?
        </h1>

        <h2 className="pt-5 text-4xl text-center text-white">
          ¿Y en una sola aplicación?
        </h2>
        <div className="flex justify-center mt-10">
          <a
            role="button"
            className="px-20 py-2 font-bold text-white transition bg-[#e85e00] rounded hover:bg-[#b44900]"
          >
            ¡Lo quiero!
          </a>
        </div>
      </div>
      <style jsx>{`
        .bg-image-index {
          background-image: url(${process.env.URLAPP +
          '/img/newDesing/headerWeb.jpg'});
        }
      `}</style>
    </section>
  )
}

export const ContentMiddle = () => {
  return (
    <section className="columns-2 pt-20 pb-20 container">
      <div className="">
        <div className="columns-2">
          <div className="">
            <Image
              className=""
              alt="blomail blog comida saludable"
              src={process.env.URLAPP + '/img/newDesing/banner1.jpg'}
              width={250}
              height={165}
            />
            <Image
              className=""
              alt="blomail blog comida saludable"
              src={process.env.URLAPP + '/img/newDesing/banner1.jpg'}
              width={250}
              height={165}
            />
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className=""></div>
    </section>
  )
}
