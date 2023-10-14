type Props = {
  children: React.ReactNode
  add?: string
}

const CardContainer = ({ children, add }: Props) => (
  <div
    className={add
        ? add : 'visible carousel-item w-2/6 xl:w-1/4'
    }
  >
    {children}
  </div>
)

export default CardContainer
