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
    <div className="relative  group">
      <div className="relative bg-white flex flex-col items-center z-[5] py-8 text-center rounded-2xl hover:shadow-lg transition duration-100 ease-in-out ">
        <div className="w-[80px] h-[80px]">
          <Image src={imgSrc} alt={title} width={80} height={80} />
        </div>
        <div className="relative">
          <p className="text-lg font-bold mt-6">{title}</p>
          <p className=" text-sm px-12 mt-4">{description}</p>
        </div>
      </div>
      <div className="absolute -bottom-5 z-[1] -left-10 w-16 h-16 bg-[url('/assets/rectangle.png')] bg-cover opacity-0 group-hover:opacity-100 transition duration-100 ease-in-out"></div>
    </div>
  );
};

export default ServiceCard;
