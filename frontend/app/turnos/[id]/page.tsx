import Card from '../../home/nuestroTeamCard'

const getData = async () => {
  return await fetch(
    'https://s11-03-react-node-production.up.railway.app/api/v1/veterinarians',
    {
      cache: 'no-store',
    },
  ).then((res) => res.json())
}

export default async function Post({ params }) {
  const { id } = params
  const vets = await getData()

  return (
    <div className="flex justify-center">
    <div className="mt-16 shadow bg-red-200 w-fit">
      {vets &&
        vets.data &&
        vets.data.results &&
        vets.data.results.map(
          (v: {
            _id: number
            photo_url: string
            fullname: string
            speciality: string
          }) =>
            v._id === id && (
              <Card
                key={v._id}
                src={v.photo_url}
                title={v.fullname}
                text={v.speciality}
              />
            ),
        )}
    </div>
    </div>
  )
}
