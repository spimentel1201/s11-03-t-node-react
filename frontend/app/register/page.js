const Register = () => (
    <div className="hero-content flex-col lg:flex-row-reverse h-screen">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Repeat Password</span>
            </label>
            <input
              type="text"
              placeholder="repeat password"
              className="input input-bordered"
            />            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
  
  export default Register