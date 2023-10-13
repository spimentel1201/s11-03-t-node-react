import Image from 'next/image'

type Props = {
  src: string
  text: string
  title: string
}

const Card = ({ title, text, src }: Props) => (
  <div className="card bg-base-100 shadow-xl w-full rounded-none">
    <figure className="">
      <Image
        src={src}
        alt="Veterinario"        
        width={600}
        height={600}
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p className="hidden xl:flex">{text}</p>
      <div className="card-actions w-4/6">
        <button className="btn btn-accent text-base w-full">Pedir Cita</button>
      </div>
    </div>
  </div>
)

export default Card
