import React from "react";
import paperTraderImgHome from "./../assets/paper-trader-home.png";

const PaperTraderProject = () => (
  <div id="paper-trader" className="project">
    <h2>Paper_Trader</h2>
    <h3>Roles: Product Designer, Front End Developer</h3>
    <div className="project-img-holder">
      <img src={paperTraderImgHome}></img>
    </div>
    <div className="project-tech">
      <p>Ruby on Rails</p>
      <p>Chart.js</p>
      <p>PostgreSQL</p>
    </div>
    <div className="project-description">
      <p>
        Paper_Trader is a Ruby on Rails application that simulates stock
        trading. Users can buy and sell stocks of their choosing, and see how
        their portfolio grows (or shrinks) over time. Using the Chart.js library
        for graphs, data is delivered from the Alpha Vantage Financial API for
        realtime pricing. Trades are stored in a PostgreSQL database. Paper
        Trader was built as part of an in-class hackathon.
      </p>
    </div>
    <div>
      <a href="#pokedex">Next</a>
    </div>
  </div>
);

export default PaperTraderProject;
