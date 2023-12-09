import React from "react";
import "./Home.css";
import hello from "../pictures/welcome.png";
function Home() {
  return (
    <div className="home">
      <img src={hello} alt="Welcome Image" />
    </div>
  );
}

export default Home;
