import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import "./style.css";

function Header() {
  {
    return (
      <header className="page-header">
        <Logo />
        <Nav />
      </header>
    );
  }
}

export default Header;

/*
logo
nav
*/