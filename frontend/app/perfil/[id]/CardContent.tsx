'use client'
import Image from 'next/image'
import ButtonLogic from './buttonLogic'
import { useEffect, useState } from 'react'
import CardLink from './card'
import UserData from '@/app/hooks/perfil/userData'

export default function CardContent() {
  const { data } = UserData()
  return (
    <div className="flex md:flex-row flex-col justify-center items-center md:justify-start mt-8 pt-8 pb-[104px] md:px-[104px] gap-x-[66px]">
      {data?.data?.pets?.map((pet: any) => (
        <div key={pet._id} className="">
          <CardLink id={pet._id}>
            <div className="flex flex-col items-center justify-center mt-3 ">
              <Image
                src={pet.photo_url}
                width={150}
                height={150}
                alt="Foto de perfil"
                className="rounded-full w-[150px] h-[150px] bg-center "
              />
              <h1 className="text-cyan-950 text-2xl font-bold mt-[25px] mb-5 ">
                {pet.name}
              </h1>
              <div>
                <span className="text-black text-xl font-semibold font-inter">
                  Mascota:{' '}
                </span>
                <span className="text-black text-xl font-normal font-inter">
                  {pet.specie}
                </span>
              </div>
              <div>
                <span className="text-black text-xl font-semibold font-inter">
                  Edad:{' '}
                </span>
                <span className="text-black text-xl font-normal font-inter">
                  {pet.age} {'años'}
                </span>
              </div>
              <div>
                <span className="text-black text-xl font-semibold font-inter">
                  Sexo:{' '}
                </span>
                <span className="text-black text-xl font-normal font-inter">
                  {pet.sex}
                </span>
              </div>
              <ButtonLogic petId={pet._id}/>
            </div>
          </CardLink>
        </div>
      ))}
    </div>
  )
}
