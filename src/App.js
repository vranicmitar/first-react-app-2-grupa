import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/Cards/PersonCard/PersonCard";
import persons from "./common/persons.json";
import hotels from "./common/hotels.json";
import HotelCard from "./components/Cards/HotelCard/HotelCard";

// const persons = [
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/89378479?v=4",
//     fullName: "Dzenan Kosuta",
//     description: "Dzenan is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/dzenankosuta?tab=repositories",
//   },
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/111905831?v=4",
//     fullName: "Alen Muslic",
//     description: "Alen is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/alenmuslic?tab=repositories",
//   },
//   {
//     imageURL:
//       "https://www.borisradivojkov.com/assets/images/profesionalni-poslovni-portret-rukovodioca-600x600.jpg",
//     fullName: "Aladin Zecic",
//     description: "Aladin is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/aladinzecic?tab=repositories",
//   },
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/111905979?v=4",
//     fullName: "Haris Muslic",
//     description: "Haris is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/harismuslic04?tab=repositories",
//   },
// ];

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  // setCount je metoda pomocu koje menjamo vrednost count state_a:
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  // const x = 10;

  const [name, setName] = useState("");
  // console.log(name);
  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      <div className="App">
        <Navbar>{/* <p>Samo za primer</p> */}</Navbar>
        <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 250px)",
            justifyContent: "center",
            gridAutoRows: "minmax(420px, auto)",
            gridGap: "40px",
          }}
        >
          {/* <PersonCard
            imageURL={"https://avatars.githubusercontent.com/u/89378479?v=4"}
            fullName={"Dzenan Kosuta"}
            location={"Novi pazar, Serbia"}
            description={
              "Dženan is a mathematician, and he work's in center NIT as a Webdeveloper"
            }
            goToRepositories={
              "https://github.com/dzenankosuta?tab=repositories"
            }
          />
          <PersonCard
            imageURL={"https://avatars.githubusercontent.com/u/111905831?v=4"}
            fullName={"Alen Muslic"}
            location={"Novi pazar, Serbia"}
            description={"Alen is rising Web developer..."}
            goToRepositories={"https://github.com/alenmuslic?tab=repositories"}
          />
          <PersonCard
            imageURL={
              "https://www.borisradivojkov.com/assets/images/profesionalni-poslovni-portret-rukovodioca-600x600.jpg"
            }
            fullName={"Aladin Zecic"}
            location={"Novi pazar, Serbia"}
            description={"Aladin is rising Web developer..."}
            goToRepositories={"https://github.com/aladinzecic?tab=repositories"}
          />
          <PersonCard
            imageURL={"https://avatars.githubusercontent.com/u/111905979?v=4"}
            fullName={"Haris Muslic"}
            location={"Novi pazar, Serbia"}
            description={"Haris is rising Web developer..."}
            goToRepositories={
              "https://github.com/harismuslic04?tab=repositories"
            }
          /> */}
          {persons.map((person) => (
            <PersonCard
              imageURL={person.imageURL}
              fullName={person.fullName}
              location={person.location}
              description={person.description}
              goToRepositories={person.goToRepositories}
            />
          ))}
          <div>
            <button style={{ width: "40px" }} onClick={decreaseCount}>
              -
            </button>
            <p>{count}</p>
            <button
              style={{ width: "40px" }}
              onClick={() => {
                console.log("povecanje");
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="hotels">
          {hotels.map((hotel) => (
            <HotelCard
              imageURL={hotel.imageURL}
              name={hotel.name}
              stars={hotel.stars}
              description={hotel.description}
              rating={hotel.rating}
              reviews={hotel.reviews}
            />
          ))}
        </div>
        <div className="formContainer">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="firstName">Unesite vase ime</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              // innerText={"ime"}
              value={name}
              onChange={(event) => {
                console.log(event);
                setName(event.target.value);
              }}
            />
            <br />
            <br />

            <label htmlFor="lastName">Unesite vase prezime</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={"ime"}
              onChange={() => {}}
            />
            <br />
            <br />

            <label htmlFor="email">Unesite vasu email adresu</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={"ime"}
              onChange={() => {}}
            />
            <br />
            <br />

            <label htmlFor="hobi">Unesite vas hobi</label>
            <input
              type="text"
              id="hobi"
              name="hobi"
              value={"ime"}
              onChange={() => {}}
            />
            <br />
            <br />

            <label htmlFor="phone">Unesite vas broj telefona</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={"ime"}
              onChange={() => {}}
            />
            <br />
            <br />

            <button type="submit">Potvrdi</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
