"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [isScrolled, setIsScrolled] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const languages = ["EN", "ES"];

  const handleLanguageChange = (language: any) => {
    setSelectedLanguage(language);
    closeDropdown();
    // You can add additional logic here based on the selected language
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "Destinations" },
    { path: "/hotels", label: "Hotels" },
    { path: "/flights", label: "Flights" },
    { path: "/bookings", label: "Bookings" },
    { path: "/login", label: "Log In" },
  ];
  return (
    <header
      className={`py-4 sticky top-0 z-30 ${
        isScrolled
          ? "lg:backdrop-blur-3xl shadow-md sm:backdrop-blur-none bg-primary"
          : "bg-primary"
      }`}
    >
      <div className="flex items-center  justify-between max-w-[1440px] mx-auto px-8 lg:px-32">
        <Link href="/" className="flex sm:gap-5 gap-3">
          <Image
            src={Logo}
            width={80}
            height={35}
            alt="mks logo"
            className=" sm:w-auto"
          />
        </Link>
        <div className="lg:space-x-10 items-center font-medium hidden lg:flex">
          {navLinks.map((link) => (
            <Link className="nav-under" key={link.path} href={link.path}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/signup"
            className="border border-darkBg hover:bg-darkBg hover:text-white p-2 px-3 rounded-md"
          >
            Signup
          </Link>
          {/* language drop down */}
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={toggleDropdown}
                className="flex justify-center items-center gap-2 w-full rounded-md   px-4 py-4 text-sm font-medium  text-black"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen ? "true" : "false"}
              >
                {selectedLanguage}
                <FaAngleDown />
              </button>
            </div>

            {isDropdownOpen && (
              <div
                className={`origin-top-right absolute right-0 mt-2 w-full bg-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => handleLanguageChange(language)}
                      className={`block w-full px-4 py-2 text-sm text-white hover:bg-[#18182e] `}
                      role="menuitem"
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dropdown Menu */}

        <div className="relative z-10 content lg:hidden">
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            className="flex flex-col space-y-1 mt-[17.5px] sm:mt-5"
            onClick={() => toggleMobileNav()}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-px bg-black block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-px bg-black block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-5 h-px bg-black block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 0, rotate: 0, y: 0, borderRadius: "0%" },
                open: { rotate: 360, borderRadius: "50%" },
              }}
              className={`${
                mobileNav ? "absolute" : "hidden"
              } w-5 p-3 -bottom-[7px] sm:bottom-[9px] right-[-2.99px] h-px border border-black block`}
            ></motion.span>
          </motion.button>
        </div>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0,
              }}
            >
              <motion.div
                variants={{
                  open: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      when: "beforeChildren",
                    },
                  },
                  closed: {
                    x: "100%",
                    transition: {
                      type: "spring",
                      bounce: 0.25,
                      when: "afterChildren",
                    },
                  },
                }}
                animate="open"
                initial="closed"
                exit="closed"
                className="fixed inset-0 bg-white min-h[200vh]"
              >
                <motion.div
                  variants={{
                    open: {
                      y: "0%",
                      opacity: 1,
                    },
                    closed: {
                      y: "25%",
                      opacity: 0,
                    },
                  }}
                  className="text-white flex flex-col items-center py-4 px-8 border-t border-[#E1E1E1] mt-[70px]"
                >
                  {navLinks.map((link) => (
                    <Link
                      className="flex duration-700 text-black py-5"
                      key={link.path}
                      href={link.path}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/" className=" flex duration-700 text-black py-5">
                    Signup
                  </Link>
                </motion.div>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
