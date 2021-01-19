import { connect } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutOne } from "../components/Layout";
import { HeroSliderOne } from "../components/HeroSlider";
import { ProductTab } from "../components/ProductTab";
import { ImageCta } from "../components/Cta";
import heroSliderData from "../data/hero-sliders/hero-slider-one.json";
import imageCtaData from "../data/image-cta/image-cta-one.json";

//  Home Pages
import accessories from "../pages/home/accessories";
import collection from "../pages/home/collection";
import creative from "../pages/home/creative";
import decor from "../pages/home/decor";
import essentials from "../pages/home/essentials";
import furniture from "../pages/home/furniture";
import lookbook from "../pages/home/lookbook";
import perfumes from "../pages/home/perfumes";
import smartdesign from "../pages/home/smart-design";
import trending from "../pages/home/trending";
import corp from "../pages/home/corp";

import branding from "../data/general/branding.json";


import comingsoon from "../pages/other/coming-soon";
import emaillogin from "../pages/other/email-login";

let isComingSoon = false;
let isEmailLogin = true;

//const Home = ({ newProducts, popularProducts, saleProducts }) => {
const Home = () => {

  var layouts = {
    "accessories": accessories,
    "collection": collection,
    "creative": creative,
    "decor": decor,
    "essentials": essentials,
    "furniture": furniture,
    "lookbook": lookbook,
    "perfumes": perfumes,
    "smartdesign": smartdesign,
    "trending": trending,
  };

  //  For Home Page, will mode to data folder in the future
  let Base = layouts[branding.layout];

  if(isComingSoon) Base = comingsoon;
  if(isEmailLogin) Base = collection;
  return (
    <>
      <Base/>
    </>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;  
  return {
    newProducts: getProducts(products, "decor", "new", 9),
    popularProducts: getProducts(products, "decor", "popular", 9),
    saleProducts: getProducts(products, "decor", "sale", 9)
  };
};

export default connect(mapStateToProps)(Home);


