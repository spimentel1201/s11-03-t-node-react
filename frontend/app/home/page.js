import Link from 'next/link'
import Navbar from './components/navbar'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="form-control m-8">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>

      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src="/pet1.png" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="/pet2.png" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="/pet3.png" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="/pet4.png" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="/pet1.png" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="/pet2.png" alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src="/pet3.png" alt="Pizza" />
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Sobre Nosotros</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Conocenos más</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
