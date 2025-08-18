import banner from '../assets/banner.png'
import Slider from 'react-slick'
import { FaTruck, FaUndoAlt } from 'react-icons/fa'
import { TbNumber2 } from 'react-icons/tb'
import Container from './Container';

const Banner = () => {
  var settings = {
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          left:"10%",
          top:"50%",
          transform:"translateY(-50%)",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "transparent",
          borderRight: "2px #fff solid",
          padding: "10px 0",
        }}
      >
        {i + 1}
      </div>
    )
  };

  return (
    <>
      <Slider {...settings}>   
        <div>
          <img src={banner} alt="banner"/>
        </div>
        <div>
          <img src={banner} alt="banner"/>
        </div>
        <div>
          <img src={banner} alt="banner"/>
        </div>
        <div>
          <img src={banner} alt="banner"/>
        </div>
      </Slider>

      <Container>
        <div className="w-12/12">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-2">
              <TbNumber2/>
              <p className="font-bold font-dm lg:font-normal text-[8px] lg:text-[16px] text-nlicolor">
                Two Years Warranty
              </p>
            </div>

            <div className="flex items-center gap-2">
              <FaTruck/>
              <p className="font-bold font-dm lg:font-normal text-[8px] lg:text-[16px] text-nlicolor">
                Free Shipping
              </p>
            </div>

            <div className="flex items-center gap-2">
              <FaUndoAlt/>
              <p className="font-bold font-dm lg:font-normal text-[8px] lg:text-[16px] text-nlicolor">
                Return Policy in 30 Days
              </p>
            </div>

          </div>
        </div>
      </Container>
    </>
  )
}

export default Banner;