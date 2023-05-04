import React from "react";
import HotelCard from "../../components/Cards/HotelCard/HotelCard";
import hotels from "../../common/hotels.json";
import "./Hotels.css";

export default function Hotels() {
  return (
    <div className="hotels">
      {hotels.map((hotel) => (
        <a href={"hotels/" + hotel.id.toString()} className="link">
          <HotelCard
            key={hotel.id}
            imageURL={hotel.imageURL}
            name={hotel.name}
            stars={hotel.stars}
            description={hotel.description}
            rating={hotel.rating}
            reviews={hotel.reviews}
          />
        </a>
      ))}
    </div>
  );
}
