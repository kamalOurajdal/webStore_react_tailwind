import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div  onClick={onClick}>
      <button className=' text-white font-bold text-xl absolute top-[45%] right-0 w-14 h-14 bg-[#0f3460] rounded-full z-20'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div onClick={onClick}>
      <button className=' text-white font-bold text-xl absolute top-[45%] left-0 w-14 h-14 bg-[#0f3460] rounded-full z-20'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const SuperCard = ({ productItems }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className=' w-full group'>
              <div className=' bg-[#fff] relative shadow-md rounded-md m-4 flex flex-col justify-between '>
                <div className='img  h-48 my-8 flex flex-col justify-center items-center'>
                  <span className='  absolute top-0 left-0 bg-[#e94560] py-1 px-3 font-[poppins] rounded-full text-white m-2 '>{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt='' className="w-32"/>
                  <div className='absolute top-0 right-0 m-2 opacity-0 transform duration-500 group-hover:opacity-100'>
                    <label className="bg-[#0f3460] py-1 px-2 text-white rounded-md">{count}</label> <br />
                    <i className='fa-regular fa-heart text-xl my-2 mx-1 hover:text-[#e94560] cursor-pointer' onClick={increment}></i>
                  </div>
                </div>

                <div className='text-lg  flex flex-col justify-end pb-8 px-4'>
                  <h3 className="font-bold">{productItems.name}</h3>
                  <div className='rate text-[#ffcd4e]  py-2 '>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='font-bold flex justify-between text-xl text-[#e94560]'>
                    <h4>${productItems.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button className="  text-[#e94560] text-lg border  rounded-md px-2">
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default SuperCard