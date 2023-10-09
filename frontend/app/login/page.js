import Image from 'next/image'

const Login = () => (
  <div class="flex justify-center items-start h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse justify-start lg:justify-start">
      <div className="text-center lg:text-left">
        <Image
          src="/auth-image.png"
          alt="Imagen de perritos"
          width="450"
          height="500"
        />
        {/* <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p> */}
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
        <div className="card-body bg-secondary text-secondary-content">
          <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
          <div className="form-control">
            <label className="label">
              <span className="">E-mail</span>
            </label>
            <input
              type="text"
              placeholder="vetcare@gmail"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Contraseña</span>
            </label>
            <input
              type="text"
              placeholder="Ingrese tu contraseña"
              className="input input-bordered"
            />
          </div>
          <div class="flex justify-end">¿Olviste la contraseña?</div>
          <div className="form-control mt-6">
            <button className="btn btn-accent text-accent-content">
              Iniciar Sesión
            </button>
          </div>
          <div class="divider">O iniciar sesión con</div>
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
    </div>
  </div>
)

export default Login
