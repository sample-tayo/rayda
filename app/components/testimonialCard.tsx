"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Mike Taylor",
    location: "Lahore, Pakistan",
    src: "/assets/avatar-1.jpg",
  },
  {
    quote:
      "Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Mike Taylor",
    location: "Lagos, Nigeria",
    src: "/assets/avatar-2.jpg",
  },
  {
    quote:
      "talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Mike Taylor",
    location: "Melbourne, Australia",
    src: "/assets/avatar-3.jpg",
  },
];

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const showNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const showPrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextTestimonial();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative px-4 flex lg:gap-4 h-[450px] items-center max-w-full lg:max-w-[550px]">
      <div className="testimonial-card-container bg-white">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card absolute top-[46px] lg:top-0 lg:left-0  mt-4 left-[42px] bg-white transform transition-transform duration-300  ${
              index === currentTestimonial
                ? "translate-y-0 opacity-100"
                : "translate-y-[20%] text-white opacity-5"
            } ${
              index !== currentTestimonial && index === 3 ? "hidden" : "block"
            }`}
          >
            <div
              className={`absolute -top-10 -left-10 ${
                index !== currentTestimonial ? "hidden" : "block"
              }`}
            >
              <Image
                src={testimonial.src}
                alt="avatar"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="rounded-md shadow-xl bg-white p-6 w-[300px]  lg:max-w-[504px]">
              <p className="leading-5">{testimonial.quote}</p>
              <p className="mt-8">{testimonial.author}</p>
              <p className="text-black">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="arrow-buttons gap-10 absolute right-0 flex flex-col">
        <button className="arrow-button" onClick={showPrevTestimonial}>
          &#8593;
        </button>
        <button className="arrow-button" onClick={showNextTestimonial}>
          &#8595;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
