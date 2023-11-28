import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <div className="relative bg-white group">
      <div className="relative flex flex-col items-center z-[2] py-8 text-center rounded-2xl hover:shadow-lg transition duration-100 ease-in-out ">
        <Image
          src={imgSrc}
          alt={title}
          width={80}
          height={80}
          className="rounded-t-2xl"
        />
        <div className="relative">
          <p className="text-lg font-bold mt-6">{title}</p>
          <p className="text-base px-12 mt-4">{description}</p>
        </div>
      </div>
      <div className="absolute z-[-1] -bottom-5 left-0 w-16 h-16 bg-[url('/assets/rectangle.png')] bg-cover opacity-0 group-hover:opacity-100 transition duration-100 ease-in-out"></div>
    </div>
  );
};

export default ServiceCard;
