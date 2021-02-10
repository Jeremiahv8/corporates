import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { animateScroll } from "react-scroll";
import { Tooltip } from "react-tippy";

import info from "../../data/general/info.json";
import metadata from "../../data/general/meta-data.json";


const FooterOne = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer className="space-pt--100 space-pb--100 bg-color--grey" style={{paddingTop: "25px", paddingBottom: "25px"}}>
      <Container>
        <Row>
          <Col lg={9} md={12} className="space-mb-mobile-only--50">
            {/*=======  footer navigation  =======*/}
            <nav className="footer-nav-container footer-nav-container--horizontal space-mb--20">
              <ul>
                <li>
                  <a href="/privacy-policy">PRIVACY POLICY</a>
                </li>
                <li>
                  <a href="/shipping-policy">SHIPPING POLICY</a>
                </li>
                <li>
                  <a href="/returns-policy">RETURNS POLICY</a>
                </li>
              </ul>
            </nav>

            {/*=======  copyright text  =======*/}
            <div className="footer-copyright-text">
              &copy; {new Date().getFullYear() + " "}
              <a href={info.website} target="_blank">
                {metadata.title}
              </a>
              . All Rights Reserved | <a href={"tel: "+info.phone }> {" "+ info.phone}</a> | <a href={"mailto:"+ info.email}> {" "+ info.email}</a>
            </div>
          </Col>
          <Col lg={3} md={12} className="text-left text-lg-right">
            {/*=======  social icons  =======*/}
            <div className="footer-social-icons space-mb--20">
              <ul>

                {info.social.map(function(item, i) {
                  function GetSocialIcon(name){
                    if(name == "Facebook") return <FaFacebookF/>;
                    if(name == "Instagram") return <FaInstagram/>;
                    if(name == "Twitter") return <FaTwitter/>;
                  }
                  if(item.enabled) return <li key={i}>
                    <Tooltip title={item.name} position="top" trigger="mouseenter" animation="shift" arrow={true} duration={200}
                    > 
                      <a href={item.url} target="_blank">
                        {GetSocialIcon(item.name)}
                      </a>
                    </Tooltip>
                  </li>
                })}
              </ul>
            </div>

            {/*=======  payment icon  =======*/}
            <div className="payment-icon">
              <img
                src="https://filemanager.aegeantt.com/cdn/greko/onlineprocessors.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <IoIosArrowRoundUp />
      </button>
    </footer>
  );
};

export default FooterOne;
