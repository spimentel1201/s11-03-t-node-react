'use client'
import { useState } from 'react'
import Container from '../components/auth/container'
import FooterAuth from '../components/auth/footerAuth'
import InputAuth from '../components/auth/inputAuth'
import { registerService } from '../_api/auth'
import toast from 'react-hot-toast'
import { verificar } from './verificar'
import Link from 'next/link'
import useErrors from './useErrors'

const notifyOk = (msg) => toast.success(msg)
const notifyError = (msg) => toast.error(msg)

const Register = () => {
  const [fullname, setFullname] = useState('John Doe Jr 2')
  const [email, setEmail] = useState('jhondoeJr@gmail.com')
  const [password, setPassword] = useState('Password123$')
  const [repeatPassword, setRepeatPassword] = useState('Password123$')
  const [token, setToken] = useState(null)

  const {
    errors,
    setErrors,
    errorRef,
    validarEmail,
    validarFullname,
    validarPassword,
    validarRepeatPassword,
  } = useErrors()

  const resetTokenAndErrorRef = () => {
    localStorage.removeItem('token')
    setToken('')
    errorRef.current = false
  }

  const saveTokenAndResetData = (t) => {
    localStorage.setItem('token', t)
    setToken(t)
    setErrors('')
    errorRef.current = false
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   if (password === repeatPassword) {
  //     try {
  //       const response = await registerService(fullname, email, password)
  //       if (response?.status === 201) {
  //         notifyOk('Register Exitoso')
  //         console.log(response.data.data.token)
  //         localStorage.setItem('token', response.data.data.token)
  //       } else {
  //         notifyError(JSON.stringify(response.response.data.errors))
  //         if (verificar(response.response.data.errors, 'fullname'))
  //           console.log('error en fullname')
  //         if (verificar(response.response.data.errors, 'email'))
  //           console.log('error en email')
  //         if (verificar(response.response.data.errors, 'password'))
  //           console.log('error en password')
  //       }
  //     } catch (error) {
  //       notifyError('Register fallido, intente nuevamente')
  //       console.log(error)
  //     }
  //   } else {
  //     notifyError('Las contraseñas no coinciden')
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    validarRepeatPassword(password, repeatPassword)
    validarPassword(password)
    validarEmail(email)
    validarFullname(fullname)
    console.log(errorRef.current)
    if (errorRef.current != true) {
      const response = await registerService(fullname, email, password)
      if (response?.status === 201) {
        notifyOk('RegisterExitoso')
        saveTokenAndResetData(response.data.data.token)
      } else {
        notifyError(JSON.stringify(response.response.data.errors))
        setErrors('')
        resetTokenAndErrorRef()
      }
    } else {
      resetTokenAndErrorRef()
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} className="min-w-[414px]">
        <div className="card flex-shrink-0 w-full max-w-sm">
          <div className="card-body bg-primary text-primary-content">
            <h1 className="text-3xl font-bold text-center lg:text-start">
              Registro
            </h1>
            <InputAuth
              title="Nombre y Apellido"
              type="text"
              placeholder="Ingrese su nombre y apellido"
              value={fullname}
              changeValue={setFullname}
              error={errors?.fullname}
            />
            <InputAuth
              title="E-mail"
              type="text"
              placeholder="vetcare@gmail"
              value={email}
              changeValue={setEmail}
              error={errors?.email}
            />
            <InputAuth
              title="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              changeValue={setPassword}
              error={errors?.password}
            />
            <InputAuth
              title="Confirmar contraseña"
              type="password"
              placeholder="repite tu contraseña"
              value={repeatPassword}
              changeValue={setRepeatPassword}
              error={errors?.repeatPassword}
            />
            <div className="form-control mt-6">
              <button className="btn btn-accent text-accent-content">
                Registrarse
              </button>
              <Link
                href="/login"
                className="btn btn-outline mt-2 border-accent text-accent hover:bg-primary hover:border-[#FF7E5B] hover:text-[#FF7E5B]"
              >
                Iniciar Sesión
              </Link>
            </div>
            <FooterAuth text="O registrarse con" />
          </div>
        </div>
      </form>
    </Container>
  )
}

export default Register
