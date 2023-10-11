import Image from 'next/image'

interface Props {
  text: string
}

const ancho = 15
const alto = 15

const FooterAuth = ({ text }: Props) => (
  <>
    <div className="divider mt-8">{text}</div>
    <div className="avatar justify-center gap-4 mt-2">
      <div className="bg-base-200 rounded-full p-3">
        <Image
          src="/google.png"
          width={ancho}
          height={alto}
          alt="icono de google"
        />
      </div>
      <div className="bg-base-200 rounded-full p-3">
        <Image
          src="/facebook.png"
          width={ancho}
          height={alto}
          alt="icono de facebook"
        />
      </div>
      <div className="bg-base-200 rounded-full p-3">
        <Image
          src="/apple.png"
          width={ancho}
          height={alto}
          alt="icono de apple"
        />
      </div>
    </div>
  </>
)

export default FooterAuth
