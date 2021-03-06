import Image from "next/image";
import Link from "next/link";
import imgPost from "../../public/img/jmcruz.jpg";

export default function PostHorizontal({
  tittle,
  shortdesc,
  date_publish,
  src,
  id,
}) {
  const date = new Date(date_publish);
  const formatDate = date.toDateString();

  if (!src) {
    src = imgPost;
  }

  return (
    <Link href={`../../post/${encodeURIComponent(id)}`} passHref>
      <div className="grid grid-cols-2 mt-10 w-10/12 mx-auto p-2 hover:shadow rounded-lg transition cursor-pointer">
        <div>
          <h2 className="text-3xl">{tittle}</h2>
          <p>{formatDate}</p>
        </div>
        <div>
          <p>{shortdesc}</p>
          <div className="flex items-center mt-2">
            <div className="mr-5">
              <Image
                className="rounded-full"
                src={src}
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
      </div>
    </Link>
  );
}
