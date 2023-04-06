import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard() {
  return (
    <div className="card">
      <div className="firstPart">
        <img
          src={"https://avatars.githubusercontent.com/u/89378479?v=4"}
          alt={"profile_img"}
          className="img"
        />
        <h1>Dženan Kosuta</h1>
        <h3>NOVI PAZAR, SERBIA</h3>
      </div>
      <div className="secondPart">
        <p>
          Dženan is a mathematician, and he work's in center NIT as a Web
          developer
        </p>
        <a
          href="https://github.com/dzenankosuta?tab=repositories"
          target="blank"
          style={{ color: "darkblue" }}
        >
          <FaGithub style={{ width: "50px", height: "50px" }} />
        </a>
      </div>
    </div>
  );
}
