import Image from 'next/image'
import Section from './nuestrasSection'
import Card from './nuestroTeamCard'
import CardContainer from './nuestroTeamCardContainer'

const getData = async () => {
  return await fetch(
    'https://s11-03-react-node-production.up.railway.app/api/v1/veterinarians',
    {
      cache: 'no-store',
    },
  ).then((res) => res.json())
}

async function NuestroTeam() {
  const vets = await getData()
  console.log(vets.data.results)

  return (
    <div className="flex flex-col-reverse items-center justify-center xl:flex-row px-10 pb-24 bg-secondary">
      <div className="max-w-[90rem]">
        <h4 className="text-center mt-20 text-accent font-bold">
          Profesionales
        </h4>
        <h1 className="text-center text-xl xl:text-3xl mt-2 font-bold mb-10">
          Nuestro TEAM
        </h1>
        <div className="flex flex-col xl:flex-row">
          <div className="carousel carousel-start xl:carousel-center lg:max-w-[90rem] rounded-box lg:space-x-8 gap-8">
            <CardContainer add="invisible xl:hidden carousel-item w-2/6 xl:w-1/4">
              <Card
                src="/vet4.png"
                title="Julie K. Rusela"
                text="Veterinaria Clínica"
              />
            </CardContainer>
            {vets && vets.data &&
              vets.data.results &&
              vets.data.results.map(
                (
                  v: {
                    _id: number
                    photo_url: string
                    fullname: string
                    speciality: string
                  },
                  index: number,
                ) => (
                  <CardContainer add="carousel-item w-2/6 xl:w-1/4" key={v._id}>
                    <Card
                      src={v.photo_url}
                      title={v.fullname}
                      text={v.speciality}
                    />
                  </CardContainer>
                ),
              )}
            <CardContainer add="invisible xl:hidden carousel-item w-2/6 xl:w-1/4">
              <Card
                src="/vet4.png"
                title="Julie K. Rusela"
                text="Veterinaria Clínica"
              />
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NuestroTeam
