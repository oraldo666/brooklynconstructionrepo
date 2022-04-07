import React from "react";
import "./ContactButtonsStyles.css";

function ContactButtonsComponent() {
  return (
    <div className="buttonsContainer grid grid-cols-3">
      <a className="btnContainer" href="tel: 9178613269">
        <button className="btn">Call Us</button>
      </a>

      <a
        className="btnContainer"
        href="mailto: brooklyn_construction@outlook.com"
      >
        <button className="btn">Email</button>
      </a>

      <a
        className="btnContainer"
        href="https://www.facebook.com/brooklynconstructioninc"
        target="_blank"
      >
        <button className="btn">Social Media</button>
      </a>
    </div>
  );
}

export default ContactButtonsComponent;
