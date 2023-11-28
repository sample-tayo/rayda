import React from "react";
import ServiceCard from "../servicecard";
import data from "../../data/data.json";
import Image from "next/image";
const Services = () => {
  return (
    <div className="py-8 relative px-4">
      <p className="text-center text-lg text-accent3">Category</p>
      <h2 className="text-center mt-4 text-3xl lg:text-5xl text-darkText font-bold">
        We Offer Best Services
      </h2>

      <Image
        src="/assets/stars.png"
        alt="stars"
        className="absolute top-0 right-10 scale-75"
        width={153}
        height={166}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-20 mt-20">
        {data.services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
