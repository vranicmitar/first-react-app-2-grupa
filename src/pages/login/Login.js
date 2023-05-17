import { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export function Login() {
  const [message, setMessage] = useState("");
  const navigation = useNavigate();
  const { setToken } = useContext(AppContext);

  async function loginUser(data) {
    try {
      const user = await axios.post(`${BASE_URL}/users/login`, data);
      const userInfo = await user.data;
      console.log(userInfo);
      // console.log(userInfo.token);
      localStorage.setItem("token", userInfo.token);
      setToken(userInfo.token);
      console.log(userInfo.token);
      navigation("/");
    } catch (err) {
      console.log(err.response.data.err);
      localStorage.removeItem("token");
      setToken(null);
      setMessage(err.response.data.err);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    loginUser({
      email,
      password,
    });
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     email: "",
  //     password:""
  //   })

  return (
    <div className="cointener">
      <form>
        <h1>Login</h1>
        <p>{message}</p>
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
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        ></input>
        <button id="login" onClick={handleClick} className="batn">
          Login
        </button>
      </form>
    </div>
  );
}
