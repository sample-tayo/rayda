import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" p-8 pt-20 pb-4 lg:px-32">
      <div className="container mx-auto flex lg:flex-row justify-between items-center flex-col gap-8">
        {/* Column 1 */}
        <div className="lg:w-[300px] flex flex-col justify-center  items-center lg:items-start ">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            className="mb-8"
            width={80}
            height={34}
          />
          <p className="text-sm text-center lg:text-left font-medium">
            Book your trip in a minute, get full control for much longer.
          </p>
        </div>

        {/* Column 2 */}
        <div className=" flex lg:gap-20 gap-32 items-center justify-between">
          <div className="  lg:text-left">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="list-none font-medium">
              <li className=" cursor-pointer">About</li>
              <li className=" cursor-pointer">Careers</li>
              <li className=" cursor-pointer">Mobile</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="   lg:text-left">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="list-none font-medium">
              <li className=" cursor-pointer">Help/FAQ</li>
              <li className=" cursor-pointer">Press</li>
              <li className=" cursor-pointer">Affiliates</li>
            </ul>
          </div>
        </div>

        {/* Column 4 */}
        <div className=" flex gap-12  lg:items-center items-start justify-between">
          <div className="  lg:text-left">
            <h3 className="text-xl font-bold mb-4">More</h3>
            <ul className="list-none font-medium">
              <li className=" cursor-pointer">Airline fees</li>
              <li className=" cursor-pointer">Airline</li>
              <li className=" cursor-pointer">Low fare tips</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className=" flex flex-col items-center">
            <div className="mb-4 flex gap-4">
              <div className="p-3 rounded-full cursor-pointer shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <FaFacebook className=" text-black" size={24} />
              </div>
              <div className="p-3 rounded-full cursor-pointer shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <FaTwitter className=" text-black" size={24} />
              </div>
              <div className="p-3 rounded-full cursor-pointer shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <FaInstagram className="text-black" size={24} />
              </div>
            </div>
            <p className="mb-2 text-center">Discover our app</p>

            <div className="flex flex-col text-white text-xs  gap-4 justify-center w-full">
              <Link
                href="/"
                className="flex items-center p-2 px-4 justify-center cursor-pointer  bg-black rounded-3xl gap-4"
              >
                <Image
                  src="/assets/icons/google-play.svg"
                  alt="google"
                  height={20}
                  width={20}
                />

                <div>
                  <p>GET IT ON</p>
                  <p>GOOGLE PLAY</p>
                </div>
              </Link>

              <Link
                href="/"
                className="flex items-center justify-center p-2 px-4 cursor-pointer bg-black rounded-3xl gap-4"
              >
                <Image
                  src="/assets/icons/app-store.svg"
                  alt="app-store"
                  height={20}
                  width={20}
                />
                <div>
                  <p>Available on </p>
                  <p>Apple Store</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 lg:mt-20">
        All rights reserved@mksstudios
      </p>
    </footer>
  );
};

export default Footer;
