import Image from "next/image";

interface LocationCardProps {
  imageSrc: string;
  location: string;
  cost: string;
  duration: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  imageSrc,
  location,
  cost,
  duration,
}) => {
  return (
    <div className="relative max-w-[315px]  shadow-lg">
      <Image
        src={imageSrc}
        alt={`Image of ${location}`}
        width={314}
        height={457}
      />
      <div className="absolute w-full p-4 rounded-b-2xl capitalize bottom-0 font-normal text-base bg-white text-accent3">
        <p className="flex items-center justify-between">
          <span>{location}</span>
          <span>{cost}</span>
        </p>
        <p className="flex items-center gap-2 mt-3">
          <span>{duration}</span>
        </p>
      </div>
    </div>
  );
};

export default LocationCard;