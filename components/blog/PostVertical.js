import Image from "next/image";
import imgPost from "../../public/img/jmcruz.jpg";

export default function PostVertical() {
  return (
    <div className="flex flex-col hover:shadow rounded-lg transition p-2 cursor-pointer">
      <div>
        <h2 className="text-3xl">Primer Post</h2>
        <p className="">Feb 06, 2023</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget. At
          imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
        </p>
      </div>
      <div className="flex items-center mt-5">
        <div className="mr-5 ">
          <Image
            className="rounded-full"
            src={imgPost}
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
