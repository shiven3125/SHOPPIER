"use client";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
import "./layout.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  const [side, setSide] = useState(false);

  function opennav() {
    setSide(true);
  }
  function closenav() {
    setSide(false);
  }
  const [fix, setfix] = useState(false);
  function setfixed() {
    if (window.scrollY >= 10) {
      setfix(true);
    } else {
      setfix(false);
    }
  }
  window.addEventListener("scroll", setfixed);
  const [text] = useTypewriter({
    words: [
      "Created For You",
      "Home Decor",
      "Best Designs",
      "And Much More...",
      "SHOPIEE",
    ],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 1000,
  });

  const currentRoute = usePathname();
  library.add(fas);
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" type="x-icon" href="/ecommerce.png"/>
        <title>SHOPPIE</title>
      </head>
      <body>
      <div>
      {loading ? (
        <div className="override">
        <HashLoader color="#f7eee3" loading={loading} size={150} />
  </div>
      ) : (
                <div className="ga">
                {/*mobile navigation*/}
                <div>
                <nav className="mobnav">
                  <button className="btnnn" onClick={opennav}>
                    <WidgetsIcon fontSize="20px" className="home" />
                  </button>
                  <div>SHOPIEE</div>
                  <div>
                    <Link href={"/"} legacyBehavior>
                      <a id="i1">
                        <HomeIcon
                          fontSize="20px"
                          className="navic"
                          onClick={closenav}
                        />
                      </a>
                    </Link>
                    <Link href={"/login"} legacyBehavior>
                      <a id="i1">
                        <PersonOutlineOutlinedIcon
                          fontSize="20px"
                          className="navic"
                          onClick={closenav}
                        />
                      </a>
                    </Link>
      
                    <ShoppingCartOutlinedIcon fontSize="20px" className="navic" />
                  </div>
                </nav>
                <div>
                  <div>
                    <div className={side ? "sidebaropen" : "sidebarclose"}>
                      <CloseIcon
                        fontSize="20px"
                        className="close"
                        onClick={closenav}
                      />
                      <div className="opt">
                        <Link
                          onClick={closenav}
                          onBlur={closenav}
                          href={"/seating"}
                          className={
                            currentRoute === "/seating" ? "visit" : "unvisit"
                          }
                        >
                          Seating
                        </Link>
                      </div>
                      <div className="opt">
                        <Link
                          onClick={closenav}
                          onBlur={closenav}
                          href={"/living"}
                          className={currentRoute === "/living" ? "visit" : "unvisit"}
                        >
                          Living
                        </Link>
                      </div>
                      <div className="opt">
                        <Link
                          onClick={closenav}
                          onBlur={closenav}
                          href={"/outdoor"}
                          className={
                            currentRoute === "/outdoor" ? "visit" : "unvisit"
                          }
                        >
                          Outdoor
                        </Link>
                      </div>
                      <div className="opt">
                        <Link
                          onClick={closenav}
                          onBlur={closenav}
                          href={"/bedroom"}
                          className={
                            currentRoute === "/bedroom" ? "visit" : "unvisit"
                          }
                        >
                          Bedroom
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              {/*mobile navigation*/}
              <div>
                <nav className={fix ? "mainfixed" : "main"}>
                  <div className="logos">
                    <div>
                      <h1 className="logo">
                        <Link href={"/"} legacyBehavior>
                          <a className="home">
                            {" "}
                            {text}
                            <Cursor
                              cursorBlinking={false}
                              cursorStyle={
                                <FontAwesomeIcon
                                  icon={faHouseCircleCheck}
                                  style={{ color: " #f7eee3" }}
                                />
                              }
                            />
                          </a>
                        </Link>
                      </h1>
                    </div>
                  </div>
                  <div className="options">
                    <div className="style">
                      <Link
                        href={"/seating"}
                        className={
                          currentRoute === "/seating" ? "visited" : "unvisited"
                        }
                      >
                        Seating
                      </Link>
                    </div>
                    <div className="style">
                      <Link
                        href={"/living"}
                        className={
                          currentRoute === "/living" ? "visited" : "unvisited"
                        }
                      >
                        Living
                      </Link>
                    </div>
                    <div className="style">
                      <Link
                        href={"/outdoor"}
                        className={
                          currentRoute === "/outdoor" ? "visited" : "unvisited"
                        }
                      >
                        Outdoor
                      </Link>
                    </div>
                    <div className="style">
                      <Link
                        href={"/bedroom"}
                        className={
                          currentRoute === "/bedroom" ? "visited" : "unvisited"
                        }
                      >
                        Bedroom
                      </Link>
                    </div>
                  </div>
                  <div className="logo1">
                    <div>
                      <Link
                        href={"/login"}
                        className={
                          currentRoute === "/login" ? "visited" : "unvisited"
                        }
                      >
                        <PersonOutlineOutlinedIcon
                          className="icons"
                          fontSize="20px"
                        />
                      </Link>
                    </div>
                    <div>
                      <ShoppingCartOutlinedIcon className="icons" fontSize="20px" />
                    </div>
                  </div>
                </nav>
              </div>
              {children}
            
            <footer>
              <div className="bottomp">
                <div className="inbt">
                  <input
                    type="text"
                    placeholder="Sign up for the enthralling couch reads"
                    className="inp"
                  />
                  <button className="btn">SUBSCRIBE</button>
                </div>
                <div className="ico">
                  <FontAwesomeIcon icon={faFacebookF} className="btico" />
      
                  <FontAwesomeIcon icon={faTwitter} className="btico" />
                  <FontAwesomeIcon icon={faInstagram} className="btico" />
                </div>
              </div>
              <div className="foot">
                <div className="footu">
                  Shopping Services
                  <div className="footi">
                    <div>Schedule Consultation</div>
                    <div>Showrooms</div>
                    <div>Trade Program</div>
                    <div>Outlet</div>
                  </div>
                </div>
      
                <div className="footu">
                  About
                  <div className="footi">
                    <div>Our Story</div>
                    <div>Reviews</div>
                    <div>Careers</div>
                    <div>Financing</div>
                  </div>
                </div>
      
                <div className="footu">
                  Resources
                  <div className="footi">
                    <div>Look Up Order Status</div>
                    <div>Assembly Instructions</div>
                    <div>Returns</div>
                    <div>Shipping & Delivery</div>
                  </div>
                </div>
      
                <div className="footu">
                  Contact Customer Experience
                  <div className="footi">
                    <div>Email: support@burrow.com</div>
                    <div>Hours:</div>
                    <div>Monday to Friday — 10a to 8p EST</div>
                    <div>Saturday to Sunday — 10a to 2p EST</div>
                  </div>
                </div>
              </div>
            </footer>
            </div>
      
      )}
    </div>
        
      </body>
    </html>
  );
}
