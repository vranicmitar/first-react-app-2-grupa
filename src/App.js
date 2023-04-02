import React from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting";

function App() {
  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      <div className="App">
        <header className="header">
          <h1 style={{ color: "#ffffff", fontFamily: "Arial" }}>Logo</h1>
        </header>
        <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} />
      </div>
    </>
  );
}

export default App;
