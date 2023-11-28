import Image from "next/image";
const Steps = () => {
  return (
    <div className="grid mx-8 grid-cols-1 place-items-center justify-between md:grid-cols-2 gap-4 lg:px-32 py-12">
      <div className="col-span-1">
        <p className=" font-semibold text-accent3">Easy and Fast</p>

        <h2 className=" text-darkText mt-8 text-3xl lg:text-5xl font-bold">
          Book Your Next Trip In 3 Easy Steps
        </h2>

        <div className="flex mt-8 gap-4 flex-col">
          <div className="flex items-start gap-4 text-accent3">
            <div className="p-4 max-h-12 bg-warnig rounded-lg">
              <Image
                src="/assets/icons/square-1.png"
                alt="square"
                width={22}
                height={22}
              />
            </div>

            <div>
              <p className="font-bold">Choose Destination</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-accent3">
            <div className="p-4 max-h-12 bg-move rounded-lg">
              <Image
                src="/assets/icons/water-sport-1.png"
                alt="square"
                width={22}
                height={22}
              />
            </div>

            <div>
              <p className="font-bold">Make Payment</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-accent3">
            <div className="p-4 max-h-12 bg-taxi rounded-lg">
              <Image
                src="/assets/icons/taxi-1.png"
                alt="square"
                width={22}
                height={22}
              />
            </div>

            <div>
              <p className="font-bold">Reach Airport on Selected Date</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <Image
          src="/assets/travel-dest.png"
          alt="travel-dest"
          width={645}
          height={582}
        />
      </div>
    </div>
  );
};

export default Steps;
