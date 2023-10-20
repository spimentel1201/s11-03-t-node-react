const days = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '01',
  '02',
  '03',
  '04',
]

type Props = { desde: string; hasta: string }

const Week = ({ desde, hasta }: Props) => {
  return (
    <div className="flex justify-start font-medium text-sm pb-2 mb-4">
      {days.slice(parseInt(desde), parseInt(hasta)).map((d, index) => (
        <span key={index} className="w-full flex justify-center items-center">
          <span className="bg-white rounded-full border-black px-1 py-1 border hover:text-white hover:bg-black cursor-pointer">
            {d}
          </span>
        </span>
      ))}
    </div>
  )
}

export default Week
