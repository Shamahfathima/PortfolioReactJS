import React from "react";
import "./index.css";

function NavBar(){
    return(
      <nav className="navbar is-black no-shadow has-background-maroon is-fixed-top " top="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            {/*Logo*/}
            <a href="#" className="navbar-item is-size-2 is-white">
              <h1 className="is-black">Codist</h1>
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" arial-expanded="false" data-target="navbar-menu">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbar-menu" className="navbar-menu is-static">
            <div className="navbar-end">
              <a href="#about" className="navbar-item has-text-white">
                About
              </a>
              <a href="#work" className="navbar-item has-text-white">
                Work
              </a>
              <a href="#contact" className="navbar-item has-text-white">
                Contact
              </a>
              <a href="#contact" className="navbar-item has-text-white">
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});


export default NavBar;