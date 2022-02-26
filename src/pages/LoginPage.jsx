import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/user/userSlice'

import { TiSocialFacebook, TiSocialGithub, TiSocialGooglePlus } from 'react-icons/ti'

const LoginPage = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = ({ email, password }) => {
    window.fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email, password
      })
    })
      .then(res => res.json())
      .then(user => {
        // console.log(user)
        if (user.fail) window.alert(user.message)
        else {
          dispatch(login(user.username))
          navigate(-1)
        }
      })
  }

  return (
    <div className='mx-auto border-2 border-black text-center bg-stone-700 w-max p-4 rounded-lg text-white flex flex-col gap-4'>
      <h3 className='text-xl font-bold'>Iniciar sesión</h3>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='outline-none rounded-r-lg px-4 py-1 text-black border-l-4 border-l-sky-500'
          type='email'
          {...register('email', { required: true })}
          required
          placeholder='Email'
        />
        <input
          className='outline-none rounded-r-lg px-4 py-1 text-black border-l-4 border-l-sky-500'
          type='password'
          {...register('password', { required: true })}
          required
          placeholder='Password'
        />
        <button className='border-2 border-white text-xl font-semibold w-max rounded-lg px-2 py-1 mx-auto'>
          Login
        </button>
      </form>
      <div className='border-t-2 border-t-sky-500 flex flex-col gap-4 items-center text-xl'>
        <h4 className='text-xl font-semibold'>Login with</h4>
        {/* <button
          onClick={() => socialLogin('facebook')}
          className='border-2 rounded-lg w-40 flex items-center gap-2 px-2'
        >
          <TiSocialFacebook className='text-3xl' />Facebook
        </button>
        <button
          onClick={() => socialLogin('github')}
          className='border-2 rounded-lg w-40 flex items-center gap-2 px-2'
        >
          <TiSocialGithub className='text-3xl' />Github
        </button> */}
        <a
          href='http://localhost:4000/auth/google'
          target='_blank'
          rel='noreferrer'
          className='border-2 rounded-lg w-40 flex items-center gap-2 px-2'
        >
          <TiSocialGooglePlus className='text-3xl' />Google
        </a>
      </div>
    </div>
  )
}

export default LoginPage
