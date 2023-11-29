"use client";

import React from "react";
import LocationCard from "../LocationCard";
import data from "../../data/data.json";
import { motion } from "framer-motion";

const Location: React.FC = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const images = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <>
      <p className="text-center mt-16 text-lg text-accent3">Top Selling</p>
      <h2 className="text-center mt-4 text-4xl text-darkText font-bold">
        Top Destination
      </h2>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="flex flex-col mt-10 lg:flex-row w-full justify-center items-center gap-6 lg:gap-8 lg:px-20"
      >
        {data.locations.map((location, index) => (
          <motion.div key={index} variants={images}>
            <LocationCard
              key={index}
              imageSrc={location.imageSrc}
              location={location.name}
              cost={location.cost}
              duration={location.duration}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Location;
