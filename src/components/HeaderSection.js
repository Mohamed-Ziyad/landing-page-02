import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function HeaderSection() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <header>
        <Link smooth to="#" className="logo">
          LOGO
        </Link>

        <div
          id="menu-bar"
          className="fas fa-bars"
          onClick={() => setMenu(!menu)}
        ></div>

        <nav
          className={!menu ? "navbar" : "navbar nav-toggle"}
          onClick={() => setMenu(!menu)}
        >
          <Link smooth to="#home">
            Home
          </Link>
          <Link smooth to="#features">
            Features
          </Link>
          <Link smooth to="#about">
            About
          </Link>
          <Link smooth to="#usage">
            Usage
          </Link>
          <Link smooth to="#review">
            Review
          </Link>
          <Link smooth to="#pricing">
            Pricing
          </Link>
          <Link smooth to="#contact">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default HeaderSection;
