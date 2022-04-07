import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";

function FooterComponent() {
  let newDate = new Date();
  let year = newDate.getFullYear();
  return (
    <>
      <footer className="footerContainer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        <div className="m-5">
          <ul>
            <li>What We Do</li>
            <br />
            <li>House Renovation</li>
            <li>Bathroom Renovation</li>
            <li>Painting</li>
            <li>Tiles</li>
            <li>Plaster and more...</li>
          </ul>
        </div>
        <div className="m-5">
          <h1>Service Area</h1>
          <br />
          <li>Brooklyn</li>
          <li>Staten Island</li>
          <li>Manhatan</li>
          <li>New Jersey</li>
          <li>Contact for more information.</li>
        </div>
        <div className="m-5">
          <h1>Contact Form</h1>
          <br />
          <ul>
            <li>
              <a href="tel: 9178613269">Phone Call</a>
            </li>
            <li>
              <a href="https://wa.me/1(917)8613269">Watsap</a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/brooklynconstructioninc"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/brooklyngeneralconstruction/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto: brooklyn_construction@outlook.com">Email</a>
            </li>
          </ul>
        </div>
        <div className="m-5">
          <h1>For more see:</h1>
          <br />
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/work">Our Work</Link>
            </li>
          </ul>
        </div>
      </footer>
      <h1 className="text-center m-5">
        &copy;{" "}
        <em id="date" className="font-bold">
          {year}
        </em>{" "}
        Brooklyn General Construction
      </h1>
    </>
  );
}

export default FooterComponent;
