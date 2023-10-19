import { Contador } from './components/Contador'
import { ContadorConHook } from './components/ContadorConHook'
import { Formulario } from './components/Formulario'
import { Login } from './components/Login'
import { Users } from './components/Users'
import { Funciones } from './typescript/Funciones'
import { ObjetosLiterales } from './typescript/ObjetosLiterales'
import { TiposBasicos } from './typescript/TiposBasicos'

const App = () => {
  return (
    <div className="mt-2">
      <h1>Reforzamiento React Typescript</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      {/* <Users /> */}
      {/* GENERICOS */}
      <Formulario />
    </div>
  )
}

export default App