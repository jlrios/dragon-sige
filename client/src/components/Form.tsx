import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

export default function Form() {
  return(
    <div className="bg-white relative px-10 py-20">
    {/* <div className="bg-white relative px-10 py-20 rounded-3xl border-2 border-gray-100"> */}
      <img className="absolute top-4 left-4" src="../../public/images/orient-dragon.png" alt="" />
      <h1 className="text-3xl font-semibold mt-10">Iniciar sesión</h1>
      <p className="font-medium text-lg mt-4 text-gray-500">Por favor ingresa tus datos de inicio de sesión.</p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium" htmlFor="">Nombre de usuario:</label>
          <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent" type="text" placeholder="Ej. JRIOS"/>
        </div>
        <div className="mt-8">
          <label className="text-lg font-medium" htmlFor="">Contraseña:</label>
          <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent" type="text" placeholder="Contraseña" type="password" placeholder="Contraseña"/>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input id="" type="checkbox" />
            <label className="ml-2 font-medium text-base" htmlFor="">Guardar datos</label>
          </div>
          <button className="font-medium text-base">¿Olvidaste tu contraseña?</button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="bg-[#f16524] text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Aceptar</button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium tex-base">¿No tienes cuenta?</p>
          <button className="text-base font-medium ml-2">Solicita tu registro</button>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <FontAwesomeIcon className="text-3xl mr-1" icon={faCircleQuestion} />
          <button>Ayuda</button>
        </div>        
      </div>
    </div>
  )
}