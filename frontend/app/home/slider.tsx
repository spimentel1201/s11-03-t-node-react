'use client'
import Slider from 'react-slick'

type Props = {
  children: React.ReactNode
  settings: any
}

const MySlider = ({ children, settings }: Props) => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <Slider {...settings}>{children}</Slider>
    </>
  )
}

export default MySlider
