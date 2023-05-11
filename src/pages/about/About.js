import React from "react";
import PersonCard from "./Person";
import persons from "../../common/persons.json";
import { useParams } from "react-router-dom";
import "./About.css";

export default function Person() {
  const { id } = useParams();
  //   console.log(typeof id);
  const person = persons.find((e) => {
    return e.id == id;
  });
  return (
    <div className="persons">
      <PersonCard
        key={person.id}
        imageURL={person.imageURL}
        fullName={person.fullName}
        location={person.location}
        description={person.description}
        goToRepositories={person.goToRepositories}
      />
    </div>
  );
}
