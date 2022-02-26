import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/user/userSlice'

const DashboardPage = () => {
  const state = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state.name) navigate('/')
  }, [])

  const onLogout = () => {
    window.fetch('http://localhost:4000/auth/logout', { method: 'POST', credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        dispatch(logout())
        navigate('/')
      })
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-stone-700 px-4 text-white py-2 text-lg rounded-lg border-black border-2'>
        <button
          className='bg-red-600 px-2 font-bold rounded-lg'
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      <div>
        Nada acá tampoco
      </div>
    </div>
  )
}

export default DashboardPage
