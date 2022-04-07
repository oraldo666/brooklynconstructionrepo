import React from "react";
import "./ServicesComponentStyles.css";
import serviceItems from "../assets/ServiceItems";

function ServicesComponent() {
  return (
    <div className="servicesContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {serviceItems.map((item) => (
        <div key={item.id} className="servicesCard ">
          <img
            src={require(`../assets/images/services/${item.img}`)}
            alt="Image here"
          />
          <h2 className="servicesDescription text-orange-400">
            {item.description}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ServicesComponent;
