import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="page-template page-template-page-fullscreen-slider page-template-page-fullscreen-slider-php page page-id-77 page_with_custom_background_image">
      <header className="main_header fixed_header">
        <div className="header_wrapper">
          <a
            onClick={() => {
              navigate("/");
            }}
            className="logo"
          >
            <img
              src="/otkt.png"
              alt="Logo"
              width="130"
              style={{ height: "30px" }}
              className="logo_def"
            />
            <img
              src="/otkt.png"
              alt="Logo"
              width="130"
              style={{ height: "30px" }}
              className="logo_retina"
            />
          </a>
          <nav>
            <div className="menu-main-menu-container">
              {/* <ul id="menu-main-menu" className="menu">
                <li
                  id="menu-item-614"
                  className={`menu-item menu-item-type-custom menu-item-object-custom ${
                    location.pathname == "/" && " current-menu-ancestor "
                  } menu-item-has-children menu-item-614 parent-menu-1`}
                >
                  <a
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <span>
                      <i
                        className={`menu-item menu-item-type-custom menu-item-object-custom ${
                          location.pathname == "/" && " current-menu-ancestor "
                        } menu-item-has-children menu-item-614 parent-menu-1`}
                      ></i>
                      Home
                    </span>
                  </a>
                </li>
                <li
                  id="menu-item-625"
                  className={`menu-item menu-item-type-custom menu-item-object-custom ${
                    location.pathname == "/news" && " current-menu-ancestor "
                  }   menu-item-has-children menu-item-625 parent-menu-2`}
                >
                  <a
                    onClick={() => {
                      navigate("/news");
                    }}
                  >
                    <span>
                      <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-625 parent-menu-2"></i>
                      News
                    </span>
                  </a>
                </li>
                <li
                  id="menu-item-615"
                  className={`menu-item menu-item-type-custom menu-item-object-custom ${
                    location.pathname == "/participations" &&
                    " current-menu-ancestor "
                  }  menu-item-has-children menu-item-615 parent-menu-3`}
                >
                  <a
                    onClick={() => {
                      navigate("/participations");
                    }}
                  >
                    <span>
                      <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-615 parent-menu-3"></i>
                      Participations
                    </span>
                  </a>
                </li>
                <li
                  id="menu-item-616"
                  className={`menu-item menu-item-type-custom menu-item-object-custom ${
                    location.pathname == "/about" && " current-menu-ancestor "
                  }  menu-item-has-children menu-item-616 parent-menu-4`}
                >
                  <a
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    <span>
                      <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-616 parent-menu-4"></i>
                      About Us
                    </span>
                  </a>
                </li>
                <li
                  id="menu-item-617"
                  className={`menu-item menu-item-type-custom menu-item-object-custom ${
                    location.pathname == "/contact" && " current-menu-ancestor "
                  }  menu-item-has-children menu-item-617 parent-menu-5`}
                >
                  <a
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    <span>
                      <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-617 parent-menu-5"></i>
                      Contact Us
                    </span>
                  </a>
                </li>
              </ul> */}
              <ul id="menu-main-menu" className="menu">
                <li
                  id="menu-item-614"
                  className={`menu-item menu-item-type-custom menu-item-object-custom ${
                    location.pathname == "/" && " current-menu-ancestor "
                  } menu-item-has-children menu-item-614 parent-menu-1`}
                >
                  <a
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <span>
                      <i
                        className={`menu-item menu-item-type-custom menu-item-object-custom ${
                          location.pathname == "/" && " current-menu-ancestor "
                        } menu-item-has-children menu-item-614 parent-menu-1`}
                      ></i>
                      Home
                    </span>
                  </a>
                </li>
                <li
                  id="menu-item-625"
                  className={`menu-item menu-item-type-custom menu-item-object-custom ${
                    location.pathname == "/news" && " current-menu-ancestor "
                  }   menu-item-has-children menu-item-625 parent-menu-2`}
                >
                  <a
                    onClick={() => {
                      navigate("/news");
                    }}
                  >
                    <span>
                      <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-625 parent-menu-2"></i>
                      News
                    </span>
                  </a>
                </li>
                <li
                  id="menu-item-615"
                  className={`menu-item menu-item-type-custom menu-item-object-custom ${
                    location.pathname == "/participations" &&
                    " current-menu-ancestor "
                  }  menu-item-has-children menu-item-615 parent-menu-3`}
                >
                  <a
                    onClick={() => {
                      navigate("/participations");
                    }}
                  >
                    <span>
                      <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-615 parent-menu-3"></i>
                      Participations
                    </span>
                  </a>
                </li>
                <li
                  id="menu-item-616"
                  className={`menu-item menu-item-type-custom menu-item-object-custom ${
                    location.pathname == "/about" && " current-menu-ancestor "
                  }  menu-item-has-children menu-item-616 parent-menu-4`}
                >
                  <a
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    <span>
                      <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-616 parent-menu-4"></i>
                      About Us
                    </span>
                  </a>
                </li>
                <li
                  id="menu-item-617"
                  className={`menu-item menu-item-type-custom menu-item-object-custom ${
                    location.pathname == "/contact" && " current-menu-ancestor "
                  }  menu-item-has-children menu-item-617 parent-menu-5`}
                >
                  <a
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    <span>
                      <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-617 parent-menu-5"></i>
                      Contact Us
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="socials">
            <ul className="socials_list">
              <li>
                <a
                  className="ico_social_facebook"
                  target="_blank"
                  href="https://www.facebook.com/onetunisiakiteteam"
                  title="Facebook"
                ></a>
              </li>
              <li>
                <a
                  className="ico_social_twitter"
                  target="_blank"
                  href="http://twitter.com"
                  title="Twitter"
                ></a>
              </li>
              <li>
                <a
                  className="ico_social_instagram"
                  target="_blank"
                  href="http://instagram.com"
                  title="Instagram"
                ></a>
              </li>
              <li>
                <a
                  className="ico_social_youtube"
                  target="_blank"
                  href="https://www.youtube.com/@onetunisiakiteteam9733"
                  title="Youtube"
                ></a>
              </li>
            </ul>
          </div>
          <div className="phone">
            <a href="tel:8003561749">+216 97 116 066</a>
          </div>

          <div className="clear"></div>
          <div className="clear"></div>
          <a
            onClick={() => setShowMenu(!showMenu)}
            className="menu_toggler"
          ></a>
        </div>
        <div
          className="mobile_menu_wrapper"
          style={{ display: showMenu ? "block" : "none" }}
        >
          <ul className="mobile_menu container">
            <li
              id="menu-item-614"
              className={`menu-item menu-item-type-custom menu-item-object-custom ${
                location.pathname == "/" && " current-menu-ancestor "
              } menu-item-has-children menu-item-614 parent-menu-1`}
            >
              <a
                onClick={() => {
                  navigate("/");
                  setShowMenu(false);
                }}
              >
                <span>
                  <i
                    className={`menu-item menu-item-type-custom menu-item-object-custom ${
                      location.pathname == "/" && " current-menu-ancestor "
                    } menu-item-has-children menu-item-614 parent-menu-1`}
                  ></i>
                  Home
                </span>
              </a>
            </li>
            <li
              id="menu-item-625"
              className={`menu-item menu-item-type-custom menu-item-object-custom ${
                location.pathname == "/news" && " current-menu-ancestor "
              }   menu-item-has-children menu-item-625 parent-menu-2`}
            >
              <a
                onClick={() => {
                  navigate("/news");
                  setShowMenu(false);
                }}
              >
                <span>
                  <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-625 parent-menu-2"></i>
                  News
                </span>
              </a>
            </li>
            <li
              id="menu-item-615"
              className={`menu-item menu-item-type-custom menu-item-object-custom ${
                location.pathname == "/participations" &&
                " current-menu-ancestor "
              }  menu-item-has-children menu-item-615 parent-menu-3`}
            >
              <a
                onClick={() => {
                  navigate("/participations");
                  setShowMenu(false);
                }}
              >
                <span>
                  <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-615 parent-menu-3"></i>
                  Participations
                </span>
              </a>
            </li>
            <li
              id="menu-item-616"
              className={`menu-item menu-item-type-custom menu-item-object-custom ${
                location.pathname == "/about" && " current-menu-ancestor "
              }  menu-item-has-children menu-item-616 parent-menu-4`}
            >
              <a
                onClick={() => {
                  navigate("/about");
                  setShowMenu(false);
                }}
              >
                <span>
                  <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-616 parent-menu-4"></i>
                  About Us
                </span>
              </a>
            </li>
            <li
              id="menu-item-617"
              className={`menu-item menu-item-type-custom menu-item-object-custom ${
                location.pathname == "/contact" && " current-menu-ancestor "
              }  menu-item-has-children menu-item-617 parent-menu-5`}
            >
              <a
                onClick={() => {
                  navigate("/contact");
                  setShowMenu(false);
                }}
              >
                <span>
                  <i className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-617 parent-menu-5"></i>
                  Contact Us
                </span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
