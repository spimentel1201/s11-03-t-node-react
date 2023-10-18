import Image from 'next/image'
import Section from './nuestrasSection'
import Card from './nuestroTeamCard'
import CardContainer from './nuestroTeamCardContainer'

const NuestroTeam = () => (
  <div className="flex flex-col-reverse items-center justify-center xl:flex-row px-10 pb-24 bg-secondary">
    <div className="max-w-[90rem]">
      <h4 className="text-center mt-20 text-accent font-bold">Profesionales</h4>
      <h1 className="text-center text-xl xl:text-3xl mt-2 font-bold mb-10">
        Nuestro TEAM
      </h1>
      <div className="flex flex-col xl:flex-row">
        {/* <Card
          src="/vet1.png"
          title="Velma S. Barry"
          text="Veterinario Cardiologo"
        />
        <Card
          src="/vet2.png"
          title="Velma S. Barry"
          text="Veterinario Cardiologo"
        />
        <Card
          src="/vet3.png"
          title="Velma S. Barry"
          text="Veterinario Cardiologo"
        />
        <Card
          src="/vet4.png"
          title="Velma S. Barry"
          text="Veterinario Cardiologo"
        /> */}
        <div className="carousel carousel-start xl:carousel-center lg:max-w-[90rem] rounded-box lg:space-x-8 gap-8">
          <CardContainer add="invisible xl:hidden carousel-item w-2/6 xl:w-1/4">
            <Card
              src="/vet4.png"
              title="Julie K. Rusela"
              text="Veterinaria Clínica"
            />
          </CardContainer>
          <CardContainer>
            <Card
              src="/vet1.png"
              title="Cathy J. Gomez"
              text="Veterinaria Clínica"
            />
          </CardContainer>
          <CardContainer>
            <Card
              src="/vet2.png"
              title="Velma S. Barry"
              text="Veterinario Cardiólogo"
            />
          </CardContainer>
          <CardContainer>
            <Card
              src="/vet3.png"
              title="Carol C. Queen"
              text="Veterinaria Nutricionista"
            />
          </CardContainer>
          <CardContainer>
            <Card
              src="/vet4.png"
              title="Julie K. Rusella"
              text="Veterinaria Clínica"
            />
          </CardContainer>
          <CardContainer>
            <Card
              src="/vet1.png"
              title="Velma S. Barry"
              text="Veterinario Cardiologo"
            />
          </CardContainer>
          <CardContainer>
            <Card
              src="/vet2.png"
              title="Velma S. Barry"
              text="Veterinario Cardiologo"
            />
          </CardContainer>
          <CardContainer>
            <Card
              src="/vet3.png"
              title="Velma S. Barry"
              text="Veterinario Cardiologo"
            />
          </CardContainer>
          <CardContainer>
            <Card
              src="/vet4.png"
              title="Velma S. Barry"
              text="Veterinario Cardiologo"
            />
          </CardContainer>
          <CardContainer add="invisible xl:hidden carousel-item w-2/6 xl:w-1/4">
            <Card
              src="/vet1.png"
              title="Cathy J. Gomez"
              text="Veterinaria Clínica"
            />
          </CardContainer>
        </div>
      </div>
    </div>
  </div>
)

export default NuestroTeam
