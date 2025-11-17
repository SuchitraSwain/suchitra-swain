import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.scss";
import Icon from "../assets/icon.png";
import linkedin from "../assets/linkedinNav.png";
import github from "../assets/githubnav.png";
import MobileNavbar from "./MobileNavbar";
import line from "../assets/line.png";

const targetHashes = [
  "#about_me",
  "#feature__project",
  "#github_contributions",
  "#publication",
];

const devFestPath = "/devfest";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const toggleBodyClass = isCollapsed ? "remove" : "add";
    document.body.classList[toggleBodyClass]("body-no-scroll");

    return () => document.body.classList.remove("body-no-scroll");
  }, [isCollapsed]);

  const isActiveNavLink = (navHash: string) => location.hash === navHash;
  const isDevFestActive = () => location.pathname === devFestPath;

  const isHelloActive = () =>
    (isActiveNavLink("#hello") || location.pathname === "/") &&
    !targetHashes.some((hash) => location.hash === hash);

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  const handleNavLinkClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
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
              style={{ height: isCollapsed ? "auto" : "100vh" }}
            >
              <div className="container-fluid p-0 px-md-3 d-flex justify-content-between">
                <a className="navbar-brand text-white mx-3" href="/">
                  <img
                    src={Icon}
                    alt="Icon"
                    className="img-fluid mx-2"
                    width={24}
                    height={24}
                  />
                  Suchitra-Swain
                </a>
                <img src={line} className="img-fluid line d-md-none d-block" />
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
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li
                      className={`nav-item ${isHelloActive() ? "active" : ""}`}
                    >
                      <HashLink
                        to="/#hello"
                        className="nav-link text-light"
                        onClick={handleNavLinkClick}
                        scroll={(el) =>
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                      >
                        _hello
                      </HashLink>
                    </li> */}
                    {targetHashes.map((hash) => (
                      <li
                        key={hash}
                        className={`nav-item ${
                          isActiveNavLink(hash) ? "active" : ""
                        }`}
                      >
                        <HashLink
                          to={`/${hash}`}
                          className="nav-link text-light"
                          onClick={handleNavLinkClick}
                          scroll={(el) =>
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            })
                          }
                        >
                          {`_${hash.substring(1)}`}
                        </HashLink>
                      </li>
                    ))}
                    <li
                      className={`nav-item ${
                        isDevFestActive() ? "active" : ""
                      }`}
                    >
                      <Link
                        to={devFestPath}
                        className="nav-link text-light"
                        onClick={handleNavLinkClick}
                      >
                        _google-devfest
                      </Link>
                    </li>
                  </ul>
                  <div className="d-md-flex d-none">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          href="https://www.linkedin.com/in/suchitra-swain-47562ab7/"
                          className="nav-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={linkedin}
                            alt="LinkedIn"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://github.com/SuchitraSwain"
                          className="nav-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={github}
                            alt="GitHub"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="nav-item">
                        <HashLink
                          to="/contact-me"
                          className="nav-link contact__navbar"
                          onClick={handleNavLinkClick} // Collapse navbar on link click
                        >
                          _contact-me
                        </HashLink>
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
