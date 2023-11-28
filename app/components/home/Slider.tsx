"use client";
import React from "react";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";
const SliderCarousel = () => {
  return (
    <div className="px-6 py-10 lg:px-32">
      <Slider
        width="250px"
        duration={20}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        <Slider.Slide>
          <Image
            src="/assets/carousel/logo-01.png"
            alt="any"
            width={162}
            height={162}
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/assets/carousel/logo-02.png"
            alt="any2"
            width={162}
            height={162}
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/assets/carousel/logo-03.png"
            alt="any3"
            width={162}
            height={162}
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/assets/carousel/logo-04.png"
            alt="any3"
            width={162}
            height={162}
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/assets/carousel/logo-05.png"
            alt="any3"
            width={162}
            height={162}
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default SliderCarousel;
