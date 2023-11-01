'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getPetsService } from '@/app/_api/pets/pets'

interface Pet {
  _id: string
  name: string
  specie: string
  sex: string
  age: number
  photo_url: string
}

interface ApiResponse {
  data: {
    results: Pet[]
  }
}

function PetsGallery() {
  const [pets, setPets] = useState<Pet[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const data: ApiResponse = await getPetsService()
        setPets(data.data.results)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="p-4">
      {loading ? (
        <p className="text-gray-500">Cargando datos...</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1440px] m-auto py-[60px]">
            {pets?.map((pet) => (
              <div
                key={pet._id}
                className="bg-white rounded-[15px] shadow-md lg:max-w-[416px] lg:max-h-[387px] overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={pet.photo_url}
                    alt={pet.name}
                    width={416}
                    height={280}
                    className="object-contain w-full"
                  />
                  <div className="flex justify-center align-center bg-accent text-white absolute bottom-[15px] left-[11px] w-[102px] h-[38px]">
                    <div className="h-full my-2">{pet.specie}</div>
                  </div>
                </div>
                <div className="text-left px-[23px] py-[18px]">
                  <h2 className="text-xl font-semibold">{pet.name}</h2>
                  <p className="text-[#667085]">
                    {pet.sex},
                    <span>{pet.age === 1 ? 'Cachorro' : 'Adulto'}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PetsGallery
