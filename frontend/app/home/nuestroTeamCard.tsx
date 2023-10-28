import Image from 'next/image'
import Link from 'next/link'

type Props = {
  id: string | undefined
  src: string
  text: string
  title: string
}

const Card = ({ id, title, text, src }: Props) => (
  <div className="card bg-base-100 rounded-none">
    <figure>
      <Image src={src} alt="Veterinario" width={300} height={300} />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p className="hidden xl:flex">{text}</p>
      <div className="card-actions w-4/6 items-center justify-center">
        {id && <Link href={`/turnos/${id}`} className="btn btn-accent text-base w-full max-w-sm capitalize">Pedir Cita</Link>}
      </div>
    </div>
  </div>
)

export default Card
