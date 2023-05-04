import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard({
  imageURL,
  fullName,
  location,
  description,
  goToRepositories,
}) {
  return (
    <div className="card">
      <div className="firstPart">
        <img src={imageURL} alt={"profile_img"} className="img" />
        <h1>{fullName}</h1>
        <h3>{location}</h3>
      </div>
      <div className="secondPart">
        <p>{description}</p>
        <a
          href={goToRepositories}
          target="blank"
          style={{ color: "darkblue" }}
          className="gitHub"
        >
          <FaGithub style={{ width: "40px", height: "40px", color: "black" }} />
        </a>
      </div>
    </div>
  );
}
