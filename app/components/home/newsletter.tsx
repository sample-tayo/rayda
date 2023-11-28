import React from "react";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="bg-[#DFD7F9] mx-6 bg-opacity-40 lg:mx-32 py-20 px-10 lg:p-20 flex relative flex-col items-center rounded-tl-[10rem] rounded-3xl">
      <h2 className=" text-accent3 text-xl lg:text-3xl text-center font-bold mb-4">
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h2>

      <Image
        src="/assets/rgt-top.png"
        alt="design"
        width={203}
        height={274}
        className="absolute top-0 right-0 z-10 opacity-20"
      />

      <Image
        src="/assets/btm-lft.png"
        alt="design"
        width={374}
        height={276}
        className="absolute bottom-0 left-0 z-10 opacity-20"
      />

      <div className="flex items-center w-full lg:flex-row flex-col mt-10 gap-4 space-x-4">
        <input
          type="email"
          placeholder="Your email"
          className="p-3 rounded-md w-full lg:w-96 text-accent3 z-50"
        />
        <button
          type="submit"
          className="bg-[#FF946D] text-white px-4 py-3 rounded-md hover:bg-[#e5855f] transition duration-300"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
