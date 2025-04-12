import React , {Suspense} from "react";

const LazyProfile = React.lazy(()=> import('./componentes/Profile'))

const App =() =>{
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-4 w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-6">
        </h1>
        Mi Aplicacion con React.lazy()
        <Suspense fallback={<div className="text-white text-lg">Cargando el Perfil...</div>}>
           <LazyProfile/>
        </Suspense>
      </div>

    </div>
  )
}
export default  App