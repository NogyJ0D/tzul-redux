// import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
// import { login, logout } from './features/user/userSlice'

import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

const App = () => {
  // Consultar eel estado global
  // const state = useSelector(state => state.user)

  // Actualizar el estado global
  // const dispatch = useDispatch()

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Route>
    </Routes>
    // <div className='app flex flex-col w-max border-2 border-black m-4 p-4'>
    //   <p>Usuario: {state.name ? state.name : 'Vacío'}</p>
    //   <p>Sesión: {state.logged ? 'Conectado' : 'Desconectado'}</p>

  //   <button
  //     className='border-2 border-black py-1 px-2'
  //     onClick={() => {
  //       state.logged
  //         ? dispatch(logout())
  //         : dispatch(login('Nogy'))
  //     }}
  //   >
  //     {state.logged ? 'Salir' : 'Entrar'}
  //   </button>
  // </div>
  )
}

export default App
