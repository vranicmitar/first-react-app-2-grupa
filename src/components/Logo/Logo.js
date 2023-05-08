import React from "react";
import "./Logo.css";
import { useNavigate } from "react-router-dom";
import { BsFillCloudMoonFill } from "react-icons";

function Logo() {
  const navigation = useNavigate();
  return (
    <div className="glavni">
      <div className="container">
        <div>
          <img src="https://a.travel-assets.com/mad-service/footer/bnaBanners/HCOM_POOL_Stocksy_300dpi.jpg"></img>
        </div>
        <div>
          <h2>With the Hotels.com app, you can:</h2>
          <br></br>
          <ul>
            <li>Save even more—up to 25% on select hotels</li>
            <li>Get rewarded* for every night you stay</li>
            <li>Search, book, and save on the go</li>
          </ul>
        </div>
      </div>
      <button onClick={() => navigation("/hotels")}>See Hotels</button>
      <div className="div">
        <h1>Hotels.com makes it easy and rewarding. Always</h1>
        <div className="second">
          <section>
            <h5>Reward yourself your way</h5>
            <p>Stay where you want, when you want, and get rewarded</p>
            <a href="" onClick={() => navigation("/about-us ")}>
              Learn About Us
            </a>
          </section>
          <section>
            <h5>Unlock instant savings</h5>
            <p>Save an average of 15% on thousands of hotels</p>
            <a href="" onClick={() => navigation("/register ")}>
              Sign up,it's free
            </a>
          </section>
          <section>
            <h5>Reward yourself your way</h5>
            <p>Stay where you want, when you want, and get rewarded</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export { Logo };
