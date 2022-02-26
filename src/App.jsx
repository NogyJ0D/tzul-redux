import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/user/userSlice'

import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

const App = () => {
  // Consultar el estado global:
  // const state = useSelector(state => state.user)
  // Actualizar el estado global:
  const dispatch = useDispatch()

  useEffect(() => {
    window.fetch('http://localhost:4000/auth/validate', {
      method: 'POST', credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.logged) return dispatch(login(data.user.username))
      })
  }, [])

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
