import { useState } from "react";
import "./Login.css";
import axios from "axios";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login(data) {
    try {
      const user = await axios.post(
        "https://nit-backend.onrender.com/users/login",
        data
      );
      const userInfo = await user.data;
      console.log(userInfo);
    } catch (err) {
      console.log(err.response.data.err);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    login({ email, password });
  }

  //   const [userInput, setUserInput] = useState({
  //     email: "",
  //     password: "",
  //   }); -->BOLJA PRAXA

  return (
    <div className="cointener">
      <form>
        <h1>Login</h1>
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name="email"
          required
        ></input>
        <label className="label">Password</label>
        <input
          className="input"
          type="password "
          name="password "
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required
        ></input>
        <button id="login" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}
