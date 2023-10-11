import Image from 'next/image'

interface Props {
  text: string
}

const FooterAuth = ({ text }: Props) => (
  <>
    <div className="divider">{text}</div>
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
  </>
)

export default FooterAuth
