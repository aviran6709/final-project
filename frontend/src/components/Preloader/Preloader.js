import React from "react";
const Preloader = (props) => {
  if (props.isFund) {
    return (
      <div className="preloader">
        <img
          className="preloader__img circle-preloader"
          src={require("../../image/Ellipse-min.svg")}
          alt="Ellipse"
        />
        <p className="preloader__text">Searching for news...</p>
      </div>
    );
  } else {
    return (
      <div className="preloader">
        <img
          className="preloader__img"
          src={require("../../image/not-found_v1.svg")}
          alt="Ellipse"
        />
        <h1 className= "preloader__tittle">Nothing found</h1>
        <p className="preloader__text">Sorry, but nothing matched <br/>
your search terms.</p>
      </div>
    );
  }
};

export default Preloader;
