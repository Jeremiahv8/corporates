import { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { connect } from "react-redux";
import {
  IoIosSearch,
  IoMdPerson,
  IoIosHeartEmpty,
  IoIosCart,
  IoIosMenu
} from "react-icons/io";
import Navigation from "./elements/Navigation";
import AboutOverlay from "./elements/AboutOverlay";
import SearchOverlay from "./elements/SearchOverlay";
import CartOverlay from "./elements/CartOverlay";
import WishlistOverlay from "./elements/WishlistOverlay";
import MobileMenu from "./elements/MobileMenu";

import branding from "../../data/general/branding.json";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import AppsIcon from '@material-ui/icons/Apps';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const HeaderSeven = ({ aboutOverlay, cartItems, wishlistItems, AppState, setAppState, ProfileState, setProfileState }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasAboutActive, setOffCanvasAboutActive] = useState(false);
  const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
  const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
  const [offCanvasWishlistActive, setOffCanvasWishlistActive] = useState(false);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(
    false
  );

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop
      ? (document.body.style.paddingTop = `${headerHeight}px`)
      : (document.body.style.paddingTop = 0);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  let logostyle = branding.logostyle;



  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge, Avatar);
  
  const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();


  const StyledBadge_Notification = withStyles((theme) => ({
    badge: {
      right: -2,
      top: 0,
      border: `2px solid`,
      padding: '0 4px',
      width: "10px"
    },
  }))(Badge);

  const StyledBadge_Apps = withStyles((theme) => ({
    badge: {
      right: -2,
      top: 0,
      border: `2px solid`,
      padding: '0 4px',
    },
  }))(Badge);



  const [Logo, setLogo] = useState("");
  const [Logo_D, setLogo_D] = useState("");
  const [Logo_height, setLogo_height] = useState("");

  React.useEffect(() => {
    // window is accessible here.
    console.log("window.innerHeight", window.innerHeight);

    console.log(window.location.href);
    let url = window.location.href;
    var domain = url.replace('http://','').replace('https://','').split(/[/?#]/)[0];
    console.log(domain);

    var HUB_Logo = {
      "localhost:3000": "https://filemanager.aegeantt.com/cdn/MysticLights/light%20logo_210122153708.png",
      "corporates.app": "",
      "mystic-lights.com": "https://filemanager.aegeantt.com/cdn/MysticLights/light%20logo_210122153708.png"
    };
    var HUB_Logo_D = {
      "localhost:3000": "https://filemanager.aegeantt.com/cdn/MysticLights/dark%20logo.png",
      "corporates.app": "",
      "mystic-lights.com": "https://filemanager.aegeantt.com/cdn/MysticLights/dark%20logo.png"
    };

    var HUB_Logo_height = {
      "localhost:3000": "36px",
      "corporates.app": "24px",
      "mystic-lights.com": "36px"
    };

    

    let AppLogo = HUB_Logo[domain];
    setLogo(AppLogo);

    let AppLogo_D = HUB_Logo_D[domain];
    setLogo_D(AppLogo_D);

    let AppLogo_height = HUB_Logo_height[domain];
    setLogo_height(AppLogo_height);


  }, []);

  return (
    <Fragment>
      <header style={{height: "56px"}}
        className={`topbar-shadow transparent-style white-content ${
          scroll > headerTop ? "is-sticky" : ""
        }`}
      >
        <Container className="wide">
          <div style={{height: "56px"}} className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30">
            {/* logo */}
            <div className="header-content__logo d-flex align-items-center space-pr--15">
              <button
                onClick={() => {
                  setOffCanvasAboutActive(true);
                  document
                    .querySelector("body")
                    .classList.add("overflow-hidden");
                }}
                className={`${
                  aboutOverlay === false
                    ? "d-none"
                    : "about-overlay-trigger d-none d-lg-block"
                }`}
              >
                <IoIosMenu />
              </button>
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>
                  <img
                    style={{height: Logo_height}}
                    src={Logo_D}
                    className="img-fluid dark-logo"
                    alt=""
                  />
                  <img
                    style={{height: Logo_height}}
                    src={Logo}
                    className="img-fluid white-logo"
                    alt=""
                  />
                </a>
              </Link>
            </div>

            {/* navigation */}
            <Navigation />

            {/* icons */}
            <div className="header-content__icons space-pl--15">
              <ul className="d-none d-lg-block">
              <li>
                  <button
                    onClick={() => {
                      setOffCanvasSearchActive(true);
                      document
                        .querySelector("body")
                        .classList.add("overflow-hidden");
                    }}
                  >
                    <IoIosSearch />
                  </button>
                </li>
                
                <li >
                  <button
                    onClick={() => {
                      setOffCanvasCartActive(true);
                      document
                        .querySelector("body")
                        .classList.add("overflow-hidden");
                    }}
                  >
                    <IconButton aria-label="cart">
                      <StyledBadge_Apps badgeContent={0} color="secondary">
                        <AppsIcon />
                      </StyledBadge_Apps>
                    </IconButton>
                  </button>
                </li>
                
                <li >
                  <button
                    onClick={() => {
                      setOffCanvasCartActive(true);
                      document
                        .querySelector("body")
                        .classList.add("overflow-hidden");
                    }}
                  >
                    <IconButton aria-label="cart">
                      <StyledBadge_Notification badgeContent={4} color="secondary">
                        <NotificationsNoneIcon />
                      </StyledBadge_Notification>
                    </IconButton>
                  </button>
                </li>

                <li >
                <button
                    onClick={() => {
                      if(AppState == "App Closed") setAppState("App Opened");
                      if(AppState == "App Opened") setAppState("App Closed");

                      if(ProfileState == "Profile Closed") setProfileState("Profile Opened");
                      if(ProfileState == "Profile Opened") setProfileState("Profile Closed");
                      /*
                      setOffCanvasCartActive(true);
                      document
                        .querySelector("body")
                        .classList.add("overflow-hidden");
                        */
                    }}
                  >
                  <a style={{background:"grey", width:"32px", height:"32px", "borderRadius": "5em"}}>
                    <StyledBadge
                      overlap="circle"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      variant="dot"
                    >
                      <Avatar alt="Guest Profile" src="" style={{width: "32px", height: "32px"}}/>
                    </StyledBadge>
                  </a>
                  </button>
                </li>

              </ul>



              <ul className="d-block d-lg-none">
                <li>
                  <Link
                    href="/other/wishlist"
                    as={process.env.PUBLIC_URL + "/other/wishlist"}
                  >
                    <a>
                      <IoIosHeartEmpty />
                      {wishlistItems.length >= 1 ? (
                        <span className="count">
                          {wishlistItems.length ? wishlistItems.length : ""}
                        </span>
                      ) : (
                        ""
                      )}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/cart"
                    as={process.env.PUBLIC_URL + "/other/cart"}
                  >
                    <a>
                      <IoIosCart />
                      {cartItems.length >= 1 ? (
                        <span className="count">
                          {cartItems.length ? cartItems.length : ""}
                        </span>
                      ) : (
                        ""
                      )}
                    </a>
                  </Link>
                </li>
                <li>
                  <button onClick={() => setOffCanvasMobileMenuActive(true)}>
                    <IoIosMenu />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>

      {/* about overlay */}
      {aboutOverlay === false ? (
        ""
      ) : (
        <AboutOverlay
          activeStatus={offCanvasAboutActive}
          getActiveStatus={setOffCanvasAboutActive}
        />
      )}
      {/* search overlay */}
      <SearchOverlay
        activeStatus={offCanvasSearchActive}
        getActiveStatus={setOffCanvasSearchActive}
      />

      {/* cart overlay */}
      <CartOverlay
        activeStatus={offCanvasCartActive}
        getActiveStatus={setOffCanvasCartActive}
      />

      {/* wishlist overlay */}
      <WishlistOverlay
        activeStatus={offCanvasWishlistActive}
        getActiveStatus={setOffCanvasWishlistActive}
      />
      {/* Mobile Menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

export default connect(mapStateToProps)(HeaderSeven);
