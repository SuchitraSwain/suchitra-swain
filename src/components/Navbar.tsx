import React, { useEffect, useState } from "react";
import "../styles/Navbar.scss";
import { navbarList } from "../utils/Navbar";
import Icon from "../assets/icon.png";
import { Link, useLocation } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import MobileNavbar from "./MobileNavbar";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const location = useLocation(); // Use location to react to path and hash changes

  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.remove("body-no-scroll");
    } else {
      document.body.classList.add("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isCollapsed]);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavLinkClick = () => {
    setIsCollapsed(true);
  };

  const scrollWithOffset = (el: HTMLElement, offset: number) => {
    const elementPosition = el.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  const isActiveNavLink = (navPath: string) => {
    if (navPath === "/" && location.pathname === "/" && location.hash === "") {
      return true;
    }
    return location.hash === `#${navPath}`;
  };

  return (
    <section
      className={`navbar__section ${
        isCollapsed ? "navbar-collapsed-border" : ""
      }`}
      id="/"
    >
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12">
            <nav
              className="navbar navbar-expand-lg p-0"
              style={{ height: !isCollapsed ? "100vh" : "auto" }}
            >
              <div className="container-fluid d-flex justify-content-between px-0 px-md-0">
                <a className="navbar-brand text-white mx-3" href="/">
                  <img
                    src={Icon}
                    alt="icon"
                    className="img-fluid"
                    width={24}
                    height={24}
                  />{" "}
                  Suchitra-Swain
                </a>
                <button
                  className={`navbar-toggler mx-3 ${
                    isCollapsed ? "" : "collapsed"
                  }`}
                  type="button"
                  aria-expanded={!isCollapsed}
                  aria-label="Toggle navigation"
                  onClick={toggleNavbar}
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    !isCollapsed ? "show" : ""
                  }`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {navbarList?.map((nav, index) => (
                      <li
                        className={`nav-item ${
                          isActiveNavLink(nav.path) ? "active" : ""
                        }`}
                        key={index}
                      >
                        <HashLink
                          smooth
                          className="nav-link text-white"
                          aria-current="page"
                          to={`#${nav.path}`}
                          onClick={handleNavLinkClick}
                          scroll={(el) => scrollWithOffset(el, 70)}
                        >
                          {nav.name}
                        </HashLink>
                      </li>
                    ))}
                  </ul>

                  <div className="d-md-flex d-none">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          <BsLinkedin />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          <BsGithub />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/contact-me"
                          className="nav-link contact__navbar"
                        >
                          _contact-me
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <MobileNavbar />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
