import React, { useState, useEffect } from "react";
import pattern from "../assets/image/pattern-divider-desktop.svg";
import pattern1 from "../assets/image/pattern-divider-mobile.svg";
import dice from "../assets/image/icon-dice.svg";
import "./Homepage.css";
import axios from "axios";

const Homepage = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");

    const advice = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="container1">
      <p>Advice #{advice.id}</p>
      <h4>{advice.advice}</h4>
      <img src={pattern} className="pattern" alt="" />
      <img src={pattern1} className="pattern1" alt="" />

      <div className="dice" onClick={getAdvice}>
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
};

export default Homepage;
