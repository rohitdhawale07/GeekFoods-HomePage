import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4 fixed w-full top-0 z-10 tracking-wide">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="GeekFood Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="font-semibold text-3xl">GeekFoods</span>
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="px-4 font-bold transition duration-200 hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#"
            className="px-4 font-bold transition duration-300 hover:text-blue-500"
          >
            Quote
          </a>
          <a
            href="#"
            className="px-4 font-bold transition duration-300 hover:text-blue-500"
          >
            Restaurants
          </a>
          <a
            href="#"
            className="px-4 font-bold transition duration-300 hover:text-blue-500"
          >
            Foods
          </a>
          <a
            href="#"
            className="px-4 font-bold transition duration-300 hover:text-blue-500"
          >
            Contact
          </a>
        </div>

        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
