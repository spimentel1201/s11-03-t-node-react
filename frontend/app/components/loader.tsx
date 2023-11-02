'use client'

type Props = {
  isLoading: boolean
}

export const Loader = ({ isLoading }: Props) => {
  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center h-10 p-8">
          <span className="loading loading-spinner loading-lg bg-[#FF5B2E]"></span>
        </div>
      )}
    </>
  )
}
