import React from "react";
import "../assets/HomeStyles.css";
import webCover from "../assets/images/house-nr1-2.png";
import businessCard from "../assets/images/business-card-ph-new.jpg";
import { Link } from "react-router-dom";
import ContactButtonsComponent from "../components/ContactButtonsComponent";

import {
  AiOutlineInstagram,
  AiOutlineMobile,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";

function HomePage() {
  return (
    <div className=" ">
      <div className="backgroundStyles">
        <img src={webCover} className="w-full" alt="" />
        <div className="textStyle">
          <h2 className="firstTEXT">REMODELING SERVICES</h2>

          <h3 className="text-rose-900 font-black opacity-100">
            Residential and Commercial renovations
          </h3>
        </div>
        <div className="textStyleTwo underline ">
          <h1>
            <span className="text-orange-500">25</span> YEARS IN THE INDUSTRY
          </h1>
          <h2>Renovation</h2>
          <h2>Painting</h2>
          <h2>Plaster</h2>
          <h2>Stone Work</h2>
          <h2>Tiles and more...</h2>
        </div>
        <div className="buttonsContainer relative">
          <ContactButtonsComponent />
        </div>
      </div>

      <div className="cardVisit flex m-5">
        <Link to="contact">
          <img
            className="businesscardStyles object-center rounded-lg border border-transparent hover:border-emerald-700 "
            src={businessCard}
            alt=""
          />
        </Link>
      </div>

      <div className="grid grid-cols-4 my-40 text-center">
        <a
          className="iconsStyle"
          href="https://www.instagram.com/brooklyngeneralconstruction/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram fontSize="5em" />
        </a>
        <a href="tel: 9178613269" className="iconsStyle">
          <AiOutlineMobile fontSize="5em" />
        </a>
        <a
          href="https://www.facebook.com/brooklynconstructioninc"
          target="_blank"
          rel="noreferrer"
          className="iconsStyle"
        >
          <AiOutlineFacebook fontSize="5em" />
        </a>
        <a
          href="mailto: brooklyn_construction@outlook.com"
          className="iconsStyle"
        >
          <AiOutlineMail fontSize="5em" />
        </a>
      </div>


    </div>
  );
}

export default HomePage;
