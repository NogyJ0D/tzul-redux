import { Navigate, Route, Routes } from 'react-router-dom'
// import { useEffect } from 'react'
// import axiosRequest from './helpers/axiosRequest'

import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

const App = () => {
  // Consultar el estado global:
  // const state = useSelector(state => state.user)
  // Actualizar el estado global:
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   axiosRequest()
  // }, [])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Route>
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  )
}

export default App
