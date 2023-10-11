import Image from 'next/image'
import { Toaster } from 'react-hot-toast'

interface Props {
  children: JSX.Element
}

const Container = ({ children }: Props) => (
  <div className="flex justify-center items-start h-screen">
    <Toaster />
    <div className="hero-content gap-4 flex-col lg:flex-row-reverse justify-start lg:justify-start">
      <div className="text-center lg:text-left">
        <Image
          src="/auth-image.png"
          alt="Imagen de perritos"
          width="591"
          height="761"
        />
      </div>
      {children}
    </div>
  </div>
)

export default Container