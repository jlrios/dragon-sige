import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'

import './App.css'
import Form from './components/Form'

function App() {

  return (
    <>
      <main>
        <section>
          <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
              <Form />
            </div>
            <div className="hidden lg:flex flex-col h-full w-1/2 items-center justify-center bg-[#f2efea]">      
              <div>
                <h1 className="text-4xl font-bold">SIGE</h1>
                <h2 className="text-2xl">Sistema Integral para la Gestión Escolar</h2>
                <h3 className="text-xl font-semibold mt-4">Plantel 20</h3>
                <h2 className="text-3xl font-semibold">Bienvenidos :)</h2>
              </div>
              <img
                className="max-w-sm w-full h-auto mt-8"
                src="/public/images/sige-web-app.svg" 
                alt=""
              />
              <div className="mt-5">
                <p className="text-base font-semibold">Otras aplicaciones</p>
                <div className="flex gap-6 mt-5">
                  <button className="flex items-center gap-2">
                    <FontAwesomeIcon className="text-2xl" icon={ faChalkboardUser } />
                    Aplic. Docente
                  </button>
                  <button className="flex items-center gap-2">
                    <FontAwesomeIcon className="text-2xl" icon={ faBookOpen } />
                    Biblioteca
                  </button>
                  <button className="flex items-center gap-2">
                    <FontAwesomeIcon className="text-2xl" icon={ faComputer } />
                    Equipo cómputo
                  </button>
                  <button className="flex items-center gap-2">
                    <FontAwesomeIcon className="text-2xl" icon={ faMap } />
                    Mapa campus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
