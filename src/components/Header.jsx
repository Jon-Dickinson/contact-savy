import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="horizontal-inline-flex align--center justify--center-under--1024 min-h-90p min-h-65p--under-768 bg-primary-1 pad-lr-20 shadow-2 shadow-0--under-768">
        <span className="color--white font-s--32 font-w--300 letter-spacing-1">Contact<span className="font-w--500">Savy</span></span>
      </header>
    );
  }
}

export default Header;