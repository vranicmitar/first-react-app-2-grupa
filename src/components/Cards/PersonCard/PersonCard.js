import React from "react";
import "./PersonCard.css";

export default function PersonCard({ imgUrl, name, desc, residency, email }) {
  return (
    <>
      <div className="card">
        <div className="firstPart">
          <img src={imgUrl} alt={"profile_img"} className="img" />
          <h3>{name}</h3>
          <h3>{residency}</h3>
        </div>
        <div className="secondPart">
          <p id="email">{email}</p>
          <p style={{ fontSize: "10px" }}>{desc}</p>
        </div>
      </div>
    </>
  );
}
