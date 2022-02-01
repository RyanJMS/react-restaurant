import React from "react";

const Header = () => {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's a Great Time For A Good Tasting Burger</h3>
        <h1>
          <span>Burger</span> Of <br /> The Week
        </h1>
        <p className="details">
          Lorem, ipsum, dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
