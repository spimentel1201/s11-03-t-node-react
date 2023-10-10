'use client'
import { useState } from 'react'
import Image from 'next/image'
import { login } from '../_api/auth'
import toast, { Toaster } from 'react-hot-toast'

const notifyOk = (msg) => toast.success(msg)
const notifyError = (msg) => toast.error(msg)

const Login = () => {
  const [email, setEmail] = useState('jhondoe@gmail.com')
  const [password, setPassword] = useState('Password123$')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await login(email, password)
    if (response?.status === 200) {
      notifyOk('Login Exitoso')
      localStorage.setItem('token', response.data.data.token)
    } else {
      notifyError('Login Fallido, intente nuevamente')
    }
  }
  return (
    <div className="flex justify-center items-start h-screen">
      <Toaster />
      <div className="hero-content flex-col lg:flex-row-reverse justify-start lg:justify-start">
        <div className="text-center lg:text-left">
          <Image
            src="/auth-image.png"
            alt="Imagen de perritos"
            width="350"
            height="500"
          />          
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-300">
            <div className="card-body bg-primary text-primary-content">
              <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">E-mail</span>
                </label>
                <input
                  type="text"
                  placeholder="vetcare@gmail"
                  className="input input-bordered bg-slate-100 border-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="Ingrese tu contraseña"
                  className="input input-bordered bg-slate-100 border-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-end">¿Olviste la contraseña?</div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-accent-content">
                  Iniciar Sesión
                </button>
              </div>
              <div className="divider">O iniciar sesión con</div>
              <div className="avatar justify-center gap-8">
                <div className="rounded">
                  <Image src="/logo.png" width="24" height="24" alt="icono" />
                </div>
                <div className="rounded">
                  <Image src="/logo.png" width="24" height="24" alt="icono" />
                </div>
                <div className="rounded">
                  <Image src="/logo.png" width="24" height="24" alt="icono" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
