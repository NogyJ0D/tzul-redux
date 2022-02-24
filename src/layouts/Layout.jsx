import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  const state = useSelector(state => state.user)

  return (
    <div className='min-h-screen bg-neutral-400'>
      <header className='bg-stone-900 text-white flex justify-between items-center px-8 py-2 mb-8'>
        <h2 className='text-2xl underline font-bold'>Redux Toolkit</h2>
        <nav className='flex gap-4'>
          <NavLink
            className='border-2 rounded-full px-2 py-1 font-semibold'
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className='border-2 rounded-full px-2 py-1 font-semibold'
            to={state.name ? '/dashboard' : '/login'}
          >
            {
              state.name ? state.name : 'Login'
            }
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
