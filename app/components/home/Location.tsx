import React from "react";
import LocationCard from "../LocationCard";
import data from "../../data/data.json";

const Location: React.FC = () => {
  return (
    <>
      <p className="text-center mt-16 text-lg text-accent3">Top Selling</p>
      <h2 className="text-center mt-4 text-4xl text-darkText font-bold">
        Top Destination
      </h2>
      <div className="flex flex-col mt-10 lg:flex-row w-full justify-center items-center gap-6 lg:gap-8 lg:px-20">
        {data.locations.map((location, index) => (
          <LocationCard
            key={index}
            imageSrc={location.imageSrc}
            location={location.name}
            cost={location.cost}
            duration={location.duration}
          />
        ))}
      </div>
    </>
  );
};

export default Location;
