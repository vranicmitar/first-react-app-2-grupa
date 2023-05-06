import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { BASE_URL } from "../../config/api";
export function Register() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(userInput);

  const [message, setMessage] = useState(``);
  async function registerUser(data) {
    try {
      const user = await axios.post(`${BASE_URL}/users`, data);
      const userInfo = await user.data;
      console.log(userInfo);

      setMessage(`Uspesno ste se registrovali !!!`);
    } catch (err) {
      console.log(err.response.data.err);
      setMessage(err.response.data.err);
    }
  }
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="rCointener">
      <form>
        <h1>Register</h1>
        <h2>{message && message}</h2>
        <label>Name</label>
        <input
          className="rInput"
          type="text"
          placeholder="First Name"
          name="name"
          value={userInput.name}
          onChange={(e) =>
            setUserInput((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          className="rInput"
          placeholder="Email"
          name="email"
          value={userInput.email}
          onChange={(e) =>
            setUserInput((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          required
        ></input>
        <label>Password</label>
        <input
          placeholder="Enter Password"
          className="rInput"
          type="password"
          name="password"
          value={userInput.password}
          onChange={(e) =>
            setUserInput((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          required
        ></input>
        <button onClick={handleClick}>Register</button>
      </form>
    </div>
  );
}
