import Image from 'next/image'
import { Toaster } from 'react-hot-toast'

interface Props {
  children: JSX.Element
}

const Container = ({ children }: Props) => (
  <div className="flex justify-center items-start h-screen">
    <Toaster />
    <div className="hero-content gap-0 lg:gap-4 flex-col lg:flex-row-reverse justify-start lg:justify-start">
      <Image
        src="/auth-image.png"
        alt="Imagen de perritos"
        width={0}
        height={0}
        sizes={"100vw"}
        className="w-[14rem] lg:flex lg:w-[26rem] h-auto self-start mt-4 m-auto"
      />     
      {children}
    </div>
  </div>
)

export default Container
