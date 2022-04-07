import React from "react";
import ServicesComponent from "../components/ServicesComponent";
import "../assets/ServicesPage.css";

function ServicesPage() {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl m-5  md:m-10 titleContainer">
          We include a variety of services for the construction and renovation
          of your houses.
        </h1>
      </div>
      <ServicesComponent />
    </div>
  );
}

export default ServicesPage;
