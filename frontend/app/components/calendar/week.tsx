type Props = {
  desde: string
  hasta: string
  data:
    | null
    | {
        day: number
        status: boolean
      }[]
}

const Week = ({ desde, hasta, data }: Props) => {
  return (
    <div className="flex justify-start font-medium text-sm pb-2 mb-9">
      {data?.slice(parseInt(desde), parseInt(hasta)).map((d, index) => (
        <span key={index} className="w-full flex justify-center items-center">
          {d?.status && (
            <div className="bg-white text-[#2F2D53] w-16 h-16 rounded-full border-4 border-[#2F2D53] hover:text-white hover:bg-[#2F2D53] cursor-pointer">
              <div className="flex text-2xl justify-center h-full text-center items-center">
                {d.day}
              </div>
            </div>
          )}
        </span>
      ))}
    </div>
  )
}

export default Week
