import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosCart } from "react-icons/io";
import Countdown from "react-countdown";
import Renderer from "../../components/Countdown/Renderer";
import { LayoutNine } from "../../components/Layout";
import { BlogPostSlider } from "../../components/Blog";
import { SectionTitleOne } from "../../components/SectionTitle";
import { HeroSliderSeven } from "../../components/HeroSlider";
import { CategoryGridThree } from "../../components/Category";
import { CountdownTimerOne } from "../../components/Countdown";
import blogData from "../../data/blog-posts/blog-post-one.json";
import heroSliderData from "../../data/hero-sliders/hero-slider-data.json";
import { yellow } from "@material-ui/core/colors";

import { useState, useEffect, Fragment } from "react";

import { connect } from "react-redux";

import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';




import { LayoutFive } from "../../components/Layout";
import { ShopInfo } from "../../components/Shop";
import { getProducts } from "../../lib/product";
import { HeroSliderTwo } from "../../components/HeroSlider";
import { CategorySlider } from "../../components/Category";
import { ProductGridWrapper } from "../../components/ProductThumb";
import categoryData from "../../data/categories/category-one.json";


import { FooterOne } from "../../components/Footer";


const Collection = () => {
  
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


  const [AppState, setAppState] = useState("App Opened");
  const [ProfileState, setProfileState] = useState("Profile Closed");

  return (
    <LayoutNine aboutOverlay={false} AppState={AppState} setAppState={setAppState} ProfileState={ProfileState} setProfileState={setProfileState}>

      <div className={AppState} style={{background:"white" , width:"100%", height:"auto"}}>
        <div style={{display: "none", height: "1500px", width: "200px", background: "yellow", backgroundImage: "url('https://www.thephoblographer.com/wp-content/uploads/2018/09/Chris-Gampat-The-Phoblographer-Canon-RF-50mm-f1.2-L-USM-sample-images-in-Hawaii-45-770x1155.jpg')"}}></div>
        
        


        {/* hero slider */}
      <HeroSliderTwo
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--50"
      />
      {/* category slider */}
      <CategorySlider
        categoryData={categoryData}
        spaceBottomClass="space-mb--r100"
      />

      {/* products */}
      <SectionTitleOne
        title="Spring summer 2020"
        subtitle="Find your style. Fall fashion 20xx"
      />
      {/*
      <div className="products-wrapper space-mb--r100">
        <Container className="wide">
          <Row className="five-column">
            <ProductGridWrapper
              products={products}
              bottomSpace="space-mb--r50"
            />
          </Row>
          <div className="text-center">
            <Link
              href="/shop/left-sidebar"
              as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
            >
              <a className="lezada-loadmore-button">
                <IoIosAdd /> SEE MORE ...
              </a>
            </Link>
          </div>
        </Container>
      </div>
      */}

      {/* blog post slider */}
      <BlogPostSlider blogData={blogData} spaceBottomClass="space-mb--50" />

      {/*shop info*/}
      <ShopInfo />

      <FooterOne />
      </div>

      <div className={ProfileState} style={{background: "purple", position: "fixed", width:"100vw", height:"100vh", top: "0"}}>
        <div className="ProfileContainer" style={{height: "100%", width: "100%", position: "relative", background: "blue"}}>

          <div style={{width:"100%", height:"200px", background: "rgb(50,50,50)"}}></div>

          <div style={{display:"flex"}} >
            <div style={{width:"50%", height:"112px", background: "rgb(50,50,50)", display: "flex", padding: "14px", paddingLeft:"56px", paddingRight:"56px", borderTop: "1px solid rgb(75,75,75)"}}>
              <div style={{width: "80px", height: "80px", borderRadius: "5em"}}>
                <Avatar alt="Guest Profile" src="" style={{width: "100%", height: "100%"}}/>
              </div>
              <div style={{minWidth: "160px", width: "auto", height: "80px", marginLeft:"14px"}}>
                <div style={{ width: "auto", height: "40px", fontSize: "24px", lineHeight: "54px", color:"white"}}>
                  Guest Profile
                </div>
                <div style={{ width: "auto", height: "40px", fontSize: "14px", lineHeight: "20px", color:"#AAAAAA"}}>
                  3 followers
                </div>
              </div>
            </div>

            <div style={{width:"50%", height:"112px", background: "rgb(50,50,50)", display: "flex", padding: "14px", paddingLeft:"56px", paddingRight:"56px", borderTop: "1px solid rgb(75,75,75)", justifyContent: "flex-end"}}>
              <div style={{border:"1px solid rgb(150,150,150)", margin: "auto 0", padding: "10px", paddingLeft: "20px", paddingRight: "20px", width: "auto", height: "auto", marginLeft:"14px", fontSize: "14px", color:"rgb(150,150,150)"}}>
              FOLLOW
              </div>
            </div>

          </div>

        

        </div>
      </div>

    </LayoutNine>
  );
};

export default Collection;
