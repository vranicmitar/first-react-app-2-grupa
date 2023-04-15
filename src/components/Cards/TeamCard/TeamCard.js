import React from "react";
import "./TeamCard.css";

function TeamCard(props) {
  return (
    <div className="cardContainer2">
      <div className="card2">
        <p>{props.name}sdf</p>
        <p>{props.matches}sdfsdf</p>
        <p>{props.points}sdfsdf</p>
        <button onClick={props.deleteTeam}>Izbrisi tim</button>
      </div>
    </div>
  );
}

export default TeamCard;
