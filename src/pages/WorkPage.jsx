import React from "react";
import "../assets/WorkStyles.css";
import WorkItems from "../assets/WorkItems";

function WorkPage() {
  return (
    <div>
      <div className="workContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-5">
        {WorkItems.map((item) => (
          <div
            key={item.id}
            className="servicesCard "
            style={{ width: "100%", height: "500px", overflow: "hidden" }}
          >
            <img
              className="imageStyle"
              src={require(`../assets/images/work-images/${item.img}`)}
              alt="Image here"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkPage;
