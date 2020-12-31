import { Tooltip } from "react-tippy";
import { IoIosClose } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import metadata from "../../../data/general/meta-data.json";
import info from "../../../data/general/info.json";


const AboutOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={`about-overlay ${activeStatus ? "active" : ""}`}>
      <div
        className="about-overlay__close"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      />
      <div className="about-overlay__content">
        <button
          className="about-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        <div className="about-overlay__content-container d-flex flex-column justify-content-between h-100">
          <div className="about-overlay__widget-wrapper">
            <div className="about-widget">
              <h2 className="about-widget__title">About Us</h2>
              <p>
                {metadata.description}
              </p>
            </div>
          </div>
          <div className="about-overlay__contact-widget">
            <p className="email">
              <a href="mailto:contact@lezada.com">{info.email}</a>
            </p>
            <p className="phone">{info.phone}</p>
            <div className="social-icons">
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
          </div>
        </div>

      </div>
      
    </div>
    
  );
};

export default AboutOverlay;
