import Image from "next/image";
import imgPost from "../../public/img/jmcruz.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

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
  const [like, setLike] = useState(likes);
  const date = new Date(date_publish);
  const formatDate = date.toDateString();
  console.log(avatar);
  if (!avatar) {
    avatar = imgPost;
  }

  return (
    <div className="hover:shadow rounded-lg transition p-2 cursor-pointer">
      <div>
        <h2 className="text-3xl">{tittle}</h2>
        <p className="">{formatDate}</p>
        <p>{description}</p>
      </div>
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
      <div>
        <FontAwesomeIcon icon={faThumbsUp} size={"lg"} />
      </div>
    </div>
  );
}
