import Image from "next/image";

export default function Header() {
  return (
    <div>
      <Image
        src={process.env.DOM_HOST + "/img/"}
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
}
