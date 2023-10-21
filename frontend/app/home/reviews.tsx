'use client'

// import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'
// import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
import React, { useRef } from 'react'
import reviewsData from './reviews.json'
import Slider from 'react-slick'

export default function Reviews() {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const nextSlide = () => {
    sliderRef.current?.slickNext()
  }

  const prevSlide = () => {
    sliderRef.current?.slickPrev()
  }

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= rating; i++) {
      stars.push(<div key={i} className="mr-1 text-warning text-[20px]" />)
    }
    return stars
  }

  return (
    <div className="w-full relative bg-[#F8F0EE] pt-24 pb-28">
      <section className="max-w-[90rem] m-auto">
        <section className="flex justify-between items-center mb-[45px]">
          <h2 className="text-lg lg:text-4xl font-semibold font-title">
            Nuestros Clientes
          </h2>
          <div className="flex gap-3">
            <button
              className="text-white bg-accent rounded-full w-10 h-10 flex items-center justify-center"
              onClick={prevSlide}
            >
              {/* {<MdOutlineArrowBackIos />} */}
            </button>
            <button
              className="text-white bg-accent rounded-full w-10 h-10 flex items-center justify-center"
              onClick={nextSlide}
            >
              {/* {<MdOutlineArrowForwardIos />} */}
            </button>
          </div>
        </section>
        <section>
          <Slider {...settings} ref={sliderRef}>
            {reviewsData.reviews.map((review, index) => (
              <section
                key={index}
                className="flex p-2"
              >
                <div className="flex bg-white mb-3 lg:h-[300px] rounded-tr-2xl rounded-bl-2xl">
                <div className="flex justify-between gap-4 px-5 py-12 rounded-custom">
                  <div className="w-3/4 lg:max-h-[224px]">
                    <div>
                      <div className="inline-flex">
                        {renderStars(review.rating)}
                      </div>
                      <h3 className="font-semibold mt-2 text-lg">
                        {review.title}
                      </h3>
                      <p className="text-sm text-[#667085]">
                        {review.detailed_comment}
                      </p>
                    </div>
                    <div className="flex justify-between mt-6">
                      <div>
                        <p className="font-semibold text-lg">
                          {review.reviewer_name}
                        </p>
                        <p> {review.pet_name_attended}</p>
                      </div>
                      <Image
                        src="https://res.cloudinary.com/dxq0pypxu/image/upload/v1697579418/itfrw0r6oeknh85fte3p.svg"
                        alt="square"
                        width={59}
                        height={59}
                      />
                    </div>
                  </div>
                  <div className="items-center max-w-[194px] px-3">
                    <Image
                      src={review.photo_url}
                      alt={review.pet_name_attended}
                      width={170}
                      height={207}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                </div>
              </section>
            ))}
          </Slider>
        </section>
      </section>
    </div>
  )
}
