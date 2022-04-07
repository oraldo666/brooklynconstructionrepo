import React from "react";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./WrapperStyles.css";
import {
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineMobile,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import {
  MdDesignServices,
  MdHomeWork,
  MdOutlineContactPhone,
} from "react-icons/md";
import logoPic from "../../assets/images/bgc-logo-2.png";

function WrapperComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const showSidebar = () => {
    setOpenDrawer(!openDrawer);
    console.log(openDrawer);
  };
  return (
    <div className="inline sm:hidden ">
      <div className="m-2  flex">
        <CgMenu size={70} onClick={showSidebar} className="menuToggler" />

        <div className="bgc-style text-2xl mt-4 ml-5 text-orange-600 font-bold">
          <img src={logoPic} className="logoStyle" alt="" />
        </div>
      </div>

      <div
        className={openDrawer ? "inline main-wrapper" : "hidden main-wrapper"}
      >
        <div className="wrapper-cl w-3/5 ">
          <ul onClick={showSidebar}>
            <li>
              <Link to="/" className="flex m-2 ">
                <AiOutlineHome fontSize="3em" />
                <h1 className="text-2xl mt-2 ml-10 hover:font-bold">Home</h1>
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex m-2">
                <FcAbout fontSize="3em" />
                <h1 className="text-2xl mt-2 ml-10">About Us</h1>
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex m-2">
                <MdDesignServices fontSize="3em" />
                <h1 className="text-2xl mt-2 ml-10">Services</h1>
              </Link>
            </li>
            <li>
              <Link to="/work" className="flex m-2">
                <MdHomeWork fontSize="3em" />
                <h1 className="text-2xl mt-2 ml-10">Work</h1>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex m-2">
                <MdOutlineContactPhone fontSize="3em" />
                <h1 className="text-3xl mt-2 ml-10">Contact</h1>
              </Link>
            </li>

            <li className=" flex space-x-1 sm:space-x-3 ml-2">
              <a
                href="https://www.instagram.com/brooklyngeneralconstruction/"
                target="_blank"
              >
                <AiOutlineInstagram fontSize="3em" />
              </a>
              <a href="tel: 9178613269">
                <AiOutlineMobile fontSize="3em" />
              </a>
              <a
                href="https://www.facebook.com/brooklynconstructioninc"
                target="_blank"
              >
                <AiOutlineFacebook fontSize="3em" />
              </a>
              <a href="mailto: brooklyn_construction@outlook.com">
                <AiOutlineMail fontSize="3em" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WrapperComponent;
