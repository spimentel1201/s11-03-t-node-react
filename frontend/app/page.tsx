import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen flex flex-col text-center items-center justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="p-4">
          <Image src="/logo.png" alt="Album" width={200} height={200} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Bienvenido a la Veterinaria</h2>
          <p>Haz click en los botones para continuar navegando</p>
          <div className="flex flex-row gap-4">
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href="home">Home</Link>
              </button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href="about">About</Link>
              </button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href="login">Login</Link>
              </button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href="register">Register</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
