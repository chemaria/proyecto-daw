import Button from "../general/Button";
import FormLogin from "./FormLogin";

export default function Modal({ showModal, children, onClick }) {
  //estado que le pasamos desde index para abrir o cerrar el modal
  if (!showModal) {
    return null;
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log();
  }
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="w-1/4 bg-white rounded-t">
        <div className="-mt-10">
          <div className="flex justify-center">{children}</div>
          <h3 className="text-lg text-center font-bold text-black mb-5">
            LOGIN USER
          </h3>
        </div>
        <FormLogin onClick={onClick} />
      </div>
    </div>
  );
}
