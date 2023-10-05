import Link from 'next/link'

const About = () => {
  return (
    <div className="flex flex-col h-screen bg-red-500 text-4xl text-center items-center justify-center">
      <div>S11-03-t-node-react</div>
      <div className="text-8xl m-4 p-4">🧑‍🤝‍🧑</div>
      <Link className="rounded bg-red-300 p-4 m-4 text-black" href="/home">
        Volver a Home
      </Link>
    </div>
  )
}

export default About
