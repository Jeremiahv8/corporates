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
import heroSliderData from "../../data/hero-sliders/hero-slider-seven.json";

const Collection = () => {
  return (
    <LayoutNine aboutOverlay={false}>
      <div style={{background:"red", width:"100vw", height:"100vh", position: "fixed", opacity: ".5", display:"none"}}>


      </div>

      <div style={{background:"red", width:"100%", minHeight:"110vh"}}>


      </div>

    </LayoutNine>
  );
};

export default Collection;
