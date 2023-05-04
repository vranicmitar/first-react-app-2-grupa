import React from "react";
import "./HotelCard.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

function HotelCard(props) {
  const oneStar = (
    <span>
      <FaStar />
    </span>
  );
  const halfStar = (
    <span>
      <FaStarHalf />
    </span>
  );
  const stars = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(oneStar);
    }
    if (props.stars % 1 !== 0) {
      arr.push(halfStar);
    }
    return arr;
  };
  // 5-6 => "Decent"
  // 6-7 => ""
  // 7-8 => "Good"
  // 8-9 => "Very Good"
  // 9-10 => "Wonderful"

  const slashIndex = props.reviews.indexOf("/");
  const rating = +props.reviews.slice(0, slashIndex);
  let reaction;
  if (rating >= 5 && rating < 6) {
    reaction = "Decent";
  } else if (rating >= 6 && rating < 7) {
    reaction = "";
  } else if (rating >= 7 && rating < 8) {
    reaction = "Good";
  } else if (rating >= 8 && rating < 9) {
    reaction = "Very Good";
  } else if (rating >= 9 && rating <= 10) {
    reaction = "Wonderful";
  }

  const showRecomendation = rating >= 8 ? true : false;

  return (
    <>
      <div className="hotelcards">
        <div className="first">
          <img src={props.imageURL}></img>
          <h3>{props.caption}</h3>
          <h4>{stars(props.stars)}</h4>
          <p>{props.description}</p>
          <p>
            {/* <span className="hotelrat">{props.reviews}</span> {""} */}
            <span style={{ color: "gray" }}>{reaction} </span>
            {/* <span style={{ color: "gray" }}>({props.reviews} </span>) */}
          </p>
          <p>{props.reviews}</p>
          {/* 1. nacin uslovnog prikazivanja (Conditional rendering) */}
          {/* {showRecomendation && <p>Recomendation</p>} */}
          {/* 2. nacin uslovnog prikazivanja (Conditional rendering) */}
          <p style={{ color: "red" }}>
            {showRecomendation ? <p>*Recomendation</p> : <></>}
          </p>
        </div>
      </div>
    </>
  );
}

export default HotelCard;

// <div className="hotelcards">
// <div className="prvi">
//   <img src={props.imageURL}></img>
//   <h1>{props.caption}</h1>
//   {/* <FaStar/> <FaStar/> <FaStar/>  */}
//   <p>{props.description}</p>
//   <p>{props.reviews}</p>
// </div>
// </div>
