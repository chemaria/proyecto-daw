import FormLogin from './FormLogin'

export default function Modal({ showModal, children, onClick }) {
  // estado que le pasamos desde index para abrir o cerrar el modal
  if (!showModal) {
    return null
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="w-1/4 bg-white rounded-t">
        <div className="-mt-10">
          <div className="flex justify-center">{children}</div>
          <h3 className="mb-5 text-lg font-bold text-center text-black">
            Modal
          </h3>
        </div>
        <FormLogin onClick={onClick} />
      </div>
    </div>
  )
}
