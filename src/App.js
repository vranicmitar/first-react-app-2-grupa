import React from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/Cards/PersonCard/PersonCard";

function App() {
  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      <div className="App">
        <Navbar>{/* <p>Samo za primer</p> */}</Navbar>
        <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} />
        <PersonCard />
      </div>
    </>
  );
}

export default App;
