import { IoIosClose } from "react-icons/io";
import MobileMenuSearch from "./MobileMenuSearch";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuWidgets from "./MobileMenuWidgets";

import info from "../../../data/general/info.json";


const MobileMenu = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={`offcanvas-mobile-menu ${activeStatus ? "active" : ""}`}>
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => getActiveStatus(false)}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => getActiveStatus(false)}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper">
          <div className="offcanvas-mobile-menu__content">
            {/* mobile search */}
            <MobileMenuSearch />

            {/* mobile nav menu */}
            <MobileMenuNav getActiveStatus={getActiveStatus} />

            <div className="offcanvas-mobile-menu__middle">
              <div className="lang-curr-style space-mb--20">
                <span className="title">Choose Language </span>
                <select>
                  {info.languages.map(function(item) {
                    if(item.enabled) return <option key={item.id} value={item.code}>{item.name}</option>;
                  })}
                </select>
              </div>
              <div className="lang-curr-style">
                <span className="title">Choose Currency</span>
                <select>
                  {info.currencies.map(function(item) {
                    if(item.enabled) return <option key={item.id} value={item.code}>{item.name}</option>;
                  })}
                </select>
              </div>
            </div>

            {/* mobile widgets */}
            <MobileMenuWidgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
