import React from "react";
import "./About.css";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

export default function PersonCard({
  imageURL,
  fullName,
  location,
  description,
  goToRepositories,
}) {
  return (
    <div className="persons">
      <div className="first">
        <img src={imageURL} alt={"profile_img"} className="img" />
        <div className="imeIPrezime">
          <h1>{fullName}</h1>
          <h3>{location}</h3>
          <p>{description}</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="secondPart">
        <a
          href={goToRepositories}
          target="blank"
          style={{ color: "darkblue" }}
          className="gitHub"
        >
          <FaGithub
            style={{
              width: "40px",
              height: "40px",
              color: "black",
              position: "absolute",
              bottom: "50%",
            }}
          />
        </a>
        <GrInstagram
          style={{
            width: "40px",
            height: "40px",
            color: "black",
            position: "absolute",
            bottom: "-55px",
            left: "45%",
          }}
        />
      </div>
    </div>
  );
}
