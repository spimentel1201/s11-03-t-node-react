import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-red-500 text-4xl text-center items-center justify-center">
      <div className="text-8xl">Veterinaria 0.1</div>
      <div className="text-8xl m-4 p-4">🐶</div>
      <Link className="rounded bg-red-300 p-4 m-4 text-black" href="/about">¿Quienes Somos ?</Link>
    </div>
  )
}

export default Home
