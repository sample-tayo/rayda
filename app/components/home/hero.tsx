import Image from "next/image";
function Hero() {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center py-10 pb-20 px-4 bg-primary  lg:pl-32">
      <section className="flex-1">
        <h3 className=" font-semibold lg:text-xl text-success uppercase">
          Best Destination Around the world
        </h3>

        <h1 className="lg:text-[80px] text-4xl mt-2 lg:leading-[89px] text-accent2">
          Travel,
          <span className="relative inline-block after:absolute after:content-[url('/assets/decore.png')] ml-6 after:top-5 after:-left-6 after:hidden after:lg:block">
            enjoy
          </span>
          <span className=" inline-block">and live a new and full life</span>
        </h1>

        <p className=" left-[30px] mt-5 lg:mt-10 text-accent3 w-4/5">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className="flex mt-8 gap-5">
          <button className="h-[60px] w-[170px] rounded-md bg-accent1 text-white">
            Find out more
          </button>
          <button className="flex h-[60px] w-[170px] items-center gap-5">
            <div className="bg-success p-4 rounded-full">
              <Image
                src="/assets/play.png"
                alt="play demo"
                width={15}
                height={15}
              />
            </div>
            <p>Play Demo</p>
          </button>
        </div>
      </section>

      <section className="lg:flex-1 pt-8 relative">
        <Image
          src="/assets/banner.png"
          alt="Banner image"
          width={791}
          height={528}
        />
        <Image
          src="/assets/plane.png"
          alt="Banner image"
          width={167}
          height={154}
          className="absolute top-0 lg:top-[10%] lg:left-[15%]"
        />

        <Image
          src="/assets/plane.png"
          alt="Banner image"
          width={167}
          height={154}
          className="absolute rotate-12 w-32 lg:block hidden -top-[10%] lg:-top-24 right-20"
        />
      </section>
    </main>
  );
}

export default Hero;
