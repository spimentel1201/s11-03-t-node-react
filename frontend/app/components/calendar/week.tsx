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
    <div className="flex justify-start font-medium text-sm pb-2 mb-9">
      {days.slice(parseInt(desde), parseInt(hasta)).map((d, index) => (
        <span key={index} className="w-full flex justify-center items-center">
          <div className="bg-white text-[#2F2D53] w-16 h-16 rounded-full border-4 border-[#2F2D53] hover:text-white hover:bg-[#2F2D53] cursor-pointer">
            <div className="flex text-2xl justify-center h-full text-center items-center">{d}</div>
          </div>
        </span>
      ))}
    </div>
  )
}

export default Week
