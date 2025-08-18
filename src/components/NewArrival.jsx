import React, { useContext, useRef } from 'react'
import Container from './Container'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoGitCompareOutline } from 'react-icons/io5'
import { ApiData } from './ContextApi'

const NewArrival = () => {
    const { info, loading } = useContext(ApiData)
    const sliderRef = useRef(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,          // smooth continuous
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,       
        autoplaySpeed: 0,     
        cssEase: "linear",    
        pauseOnHover: false,  // hover এ থামবে না
        draggable: false,     // drag থামাবে না
        swipe: false,         // mobile swipe disable
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    }

    if (loading) return <h1 className='text-center py-10'>Loading.....</h1>

    return (
        <div className='py-10 relative'>
            <Container>
                <h1 className='text-[28px] sm:text-[32px] md:text-[39px] font-dm font-bold text-[#262626] mb-6'>New Arrivals</h1>

                <Slider ref={sliderRef} {...settings}>
                    {info?.map((item) => (
                        <div className='px-2 sm:px-3' key={item.id}>
                            <div className='relative group'>
                                <img src={item.thumbnail} alt={item.title} className='w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] object-cover' />

                                {/* Hover options */}
                                <div className='absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white w-full p-2 flex flex-col gap-1'>
                                    <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>Add to Wish List <FaHeart /></p>
                                    <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>Compare <IoGitCompareOutline /></p>
                                    <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>Add to Cart <FaCartPlus /></p>
                                </div>

                                {/* Discount label */}
                                <div className='absolute left-0 top-0 bg-[#262626] px-2 py-1'>
                                    <p className='text-[#fff] text-[12px] sm:text-[14px] font-dm'>{item.discountPercentage}%</p>
                                </div>
                            </div>

                            {/* Title and Price */}
                            <div className='mt-2'>
                                <h5 className='font-bold text-[16px] sm:text-[18px] md:text-[20px]'>{item.title}</h5>
                                <p className='font-bold text-[14px] sm:text-[16px] md:text-[18px] mt-1'>${item.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    )
}

export default NewArrival