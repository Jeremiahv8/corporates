import {
  IoIosPhonePortrait,
  IoMdMail,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoMdPerson
} from "react-icons/io";
import Link from "next/link";

import info from "../../../data/general/info.json";


const MobileMenuWidgets = () => {
  return (
    <div className="offcanvas-mobile-menu__widgets">
      <div className="contact-widget space-mb--30">
        <ul>
          <li>
            <IoMdPerson />
            <Link
              href="/other/login-register"
              as={process.env.PUBLIC_URL + "/other/login-register"}
            >
              <a>Login / Register</a>
            </Link>
          </li>
          <li>
            <IoIosPhonePortrait />
            <a href={"tel:"+ info.phone}>{info.phone}</a>
          </li>
          <li>
            <IoMdMail />
            <a href={"mailto:"+ info.email}>{info.email}</a>
          </li>
        </ul>
      </div>
      <div className="social-widget">
        {info.social.map(function(item, i) {
          if(item.enabled && item.name == "Facebook") return <a key={i} href={item.url} target="_blank"><IoLogoFacebook /></a>;
          if(item.enabled && item.name == "Instagram") return <a key={i} href={item.url} target="_blank"><IoLogoInstagram /></a>;
          if(item.enabled && item.name == "Twitter") return <a key={i} href={item.url} target="_blank"><IoLogoTwitter /></a>;
        })}
      </div>
    </div>
  );
};

export default MobileMenuWidgets;
