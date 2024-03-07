import React from "react";
import data from "./data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as per your design needs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <div className=" max-w-full rounded-lg">
      <div className="mt-6">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="my-4 bg-green-100 rounded-lg">
              <div className="flex justify-center p-5 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="lg:w-16 lg:h-16 w-12 h-12 rounded-full mr-4 mt-4"
                />
                <div>
                  <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                  <p className="text-gray-600 mt-2 hidden lg:block">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
