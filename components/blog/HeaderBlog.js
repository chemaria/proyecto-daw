import Image from "next/image";
import imgCabecera from "../../public/img/blomail-blog-header.jpg";
import { NavBar } from "../NavBar";

export default function HeaderBlog() {
  return (
    <div className="w-10/12 mx-auto">
      <section className="flex justify-between items-center mt-10  mb-10 ">
        <h1 className="text-7xl font-bold">Blog</h1>
        <h4 className="text-xl">El blog de ejemplo</h4>
      </section>
      <section className="flex justify-center">
        <Image
          alt="blomail blog comida saludable"
          src={imgCabecera}
          width={1280}
          height={720}
        />
      </section>
    </div>
  );
}
