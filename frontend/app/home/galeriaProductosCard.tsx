import React from 'react'
import Image from 'next/image'

type Props = {
  src: string
}

function GaleriaProductosCard({ src }: Props) {
  return (
    <div className="card gap-4">
      <figure>
        <Image src={src} alt="Movie" width={0} height={0} sizes={"100vw"} className="w-[20rem]"/>
      </figure>
    </div>
  )
}

export default GaleriaProductosCard
