import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // set this value to control the speed of automatic sliding
  };
  return (
    <Slider {...settings}>
      {images.map(image => (
        <div key={image.id} className="relative">
          <img 
          src={image.url} 
          alt={image.alt} 
          className="rounded-lg w-full h-auto object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="font-sans text-2xl font-medium text-white sm:text-4xl">Image Title</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Learn More</button>
          </div>
        </div>
      ))}
    </Slider>
  )
}
