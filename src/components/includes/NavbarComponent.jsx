import React from "react";
import { Link } from "react-router-dom";
import WrapperComponent from "./WrapperComponent";

function NavbarComponent() {
  return (
    <>
      <div className="hidden sm:inline">
        <div className="grid grid-cols-7 m-5 text-base md:text-xl lg:text-2xl ">
          <Link to="/" className="col-span-2 hover:font-black">
            Brooklyn General Construction
          </Link>

          <Link to="/" className="mx-auto hover:font-black">
            Home
          </Link>
          <Link to="/about" className="mx-auto hover:font-black">
            About Us
          </Link>
          <Link to="/services" className="mx-auto hover:font-black">
            Services
          </Link>

          <Link to="/work" className="mx-auto hover:font-black">
            Work
          </Link>

          <Link to="/contact" className="mx-auto hover:font-black">
            Contact
          </Link>
        </div>
        <hr className="w-11/12 mx-auto mb-5" />
      </div>
      <WrapperComponent />
    </>
  );
}

export default NavbarComponent;
