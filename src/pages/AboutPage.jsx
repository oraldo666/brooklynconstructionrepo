import React from "react";

function AboutPage() {
  return (
    <div className="text-center text-3xl m-10">
      <h1 className="mb-5">
        About{" "}
        <span className="text-orange-700">Brooklyn General Construction</span>
      </h1>

      <ol className="text-xl mx-10">
        <li>
          <span className="text-orange-700">The</span> core of our business is
          the construction ond renovation of your house. We are well equipped to
          handle any project.
        </li>
        <br />
        <li>
          <h1>
            <span className="text-orange-700">We </span> have been operating for
            25 years in this business so every task should be easy for us.
          </h1>
        </li>
      </ol>
    </div>
  );
}

export default AboutPage;
