import Button from "../general/Button";
import { useState } from "react";
export default function FormLogin({ onClick }) {
  const [data, setData] = useState({
    user: "",
    password: "",
  });

  function handleChange(evt) {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log({ data });
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <input
          className="mx-auto my-2 w-2/4 border-2 border-gray-400 rounded focus:text-red-400"
          type="text"
          placeholder="Usuario"
          name="user"
          onChange={handleChange}
        ></input>
        <input
          className="mx-auto w-2/4  my-2 border-2 border-gray-400 rounded focus:text-red-400"
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        ></input>
        <div className="mb-6 mr-4 ml-4">
          <Button
            className="w-2/4 border-2  px-10 py-1 rounded-md font-bold hover:bg-slate-400 duration-500"
            text="Login"
            type="submit"
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
  );
}
