import Image from 'next/image'

const Section = ({src, text, title}) => (
  <section className="mt-10 ml-3 flex">
    <Image
      src={src}
      width={80}
      height={25}
      alt="veterinario trabajando"
    />
    <div className="ml-4">
      <h3 className="font-bold"> {title}</h3>
      <p>
        {text}
      </p>
    </div>
  </section>
)

export default Section
