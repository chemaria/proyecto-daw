import Button from "../general/Button";

export default function Modal({ showModal, children, onClick }) {
  //estado que le pasamos desde index para abrir o cerrar el modal
  if (!showModal) {
    return null;
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
        <form className="">
          <div className="flex flex-col">
            <input
              className="mx-auto my-2 w-2/4 border-2 border-gray-400 rounded focus:text-red-400"
              type="text"
              placeholder="Usuario"
            ></input>
            <input
              className="mx-auto w-2/4  my-2 border-2 border-gray-400 rounded focus:text-red-400"
              type="password"
              placeholder="Contraseña"
            ></input>
            <div className="mb-6 mr-4 ml-4">
              <Button
                className="w-2/4 border-2  px-10 py-1 rounded-md font-bold hover:bg-slate-400 duration-500"
                text="Login"
                onClick={() => {}}
              />
              <Button
                className="w-2/4 border-2  px-10 py-1 rounded-md font-bold  hover:bg-slate-400 duration-500"
                text="Cancelar"
                onClick={onClick}
              />
            </div>
          </div>

          <div className=""></div>
        </form>
      </div>
    </div>
  );
}
