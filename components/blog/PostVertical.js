import Image from "next/image";
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
}) {
  const date = new Date(date_publish);
  const formatDate = date.toDateString();
  console.log(avatar);

  return (
    <div className="flex flex-col hover:shadow rounded-lg transition p-2 cursor-pointer">
      <div>
        <h2 className="text-3xl">{tittle}</h2>
        <p className="">{formatDate}</p>
        <p>{description}</p>
      </div>
      <div className="flex items-center mt-5">
        <div className="mr-5 ">
          <Image
            className="rounded-full"
            src={avatar}
            width={80}
            height={80}
            alt="blomail post"
          />
        </div>
        <div>
          <h4>Por Jose Maria Cruz Iglesias</h4>
        </div>
      </div>
    </div>
  );
}
