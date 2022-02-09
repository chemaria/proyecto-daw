import Image from "next/image";
import Link from "next/link";
import imgPost from "../../public/img/jmcruz.jpg";

export default function PostVertical({
  img,
  tittle,
  subtittle,
  description,
  shortdesc,
  visible,
  date_publish,
  likes,
  avatar,
  id,
}) {
  const date = new Date(date_publish);
  const formatDate = date.toDateString();
  console.log(avatar);
  if (!avatar) {
    avatar = imgPost;
  }

  return (
    <Link href="">
      <div className="hover:shadow rounded-lg transition p-2 cursor-pointer">
        <Image
          className="rounded-t-lg"
          src={img}
          width={576}
          height={270}
          alt={tittle}
        />
        <h2 className="text-3xl">{tittle}</h2>
        <p className="">{formatDate}</p>
        <p className="mt-5">{description}</p>
        <div className="flex items-center justify-center align-bottom mt-5 ">
          <Image
            className="rounded-full"
            src={avatar}
            width={80}
            height={80}
            alt="blomail post"
          />
          <h4 className="ml-5">Por Jose Maria Cruz Iglesias</h4>
        </div>
        <div></div>
      </div>
    </Link>
  );
}
