import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './features/user/userSlice'

const App = () => {
  // Consultar eel estado global
  const state = useSelector(state => state.user)

  // Actualizar el estado global
  const dispatch = useDispatch()

  return (
    <div className='app flex flex-col w-max border-2 border-black m-4 p-4'>
      <p>Usuario: {state.name ? state.name : 'Vacío'}</p>
      <p>Sesión: {state.logged ? 'Conectado' : 'Desconectado'}</p>

      <button
        className='border-2 border-black py-1 px-2'
        onClick={() => {
          state.logged
            ? dispatch(logout())
            : dispatch(login('Nogy'))
        }}
      >
        {state.logged ? 'Salir' : 'Entrar'}
      </button>
    </div>
  )
}

export default App
