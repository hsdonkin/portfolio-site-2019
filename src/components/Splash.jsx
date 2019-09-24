import React from "react";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="splashPage">
        <div className="splashText">
          <h1>Hugh Donkin</h1>
          <h1>Developer</h1>
          <a href="#paper-trader">
            <h2> Work</h2>
          </a>
        </div>
      </div>
    );
  }
}

export default Splash;
