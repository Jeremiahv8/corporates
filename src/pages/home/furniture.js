import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { CountdownTimerFour } from "../../components/Countdown";
import { LayoutTwo } from "../../components/Layout";
import { HeroSliderFive } from "../../components/HeroSlider";
import { SectionTitleOne } from "../../components/SectionTitle";
import { getProducts } from "../../lib/product";
import { ProductGridWrapper } from "../../components/ProductThumb";
import { TestimonialOne } from "../../components/Testimonial";
import { ImageCtaTwo } from "../../components/Cta";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";
import heroSliderData from "../../data/hero-sliders/hero-slider-data.json";
import { HoverBannerOne } from "../../components/Banner";

import limited from "../../data/general/limited.json";

import info from "../../data/general/info.json";


const Furniture = ({ products }) => {
  console.log(products);
  return (
    <LayoutTwo aboutOverlay={true}>
      {/* hero slider */}
      <HeroSliderFive
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--50"
      />

      {/* hover banner */}
      <HoverBannerOne spaceBottomClass="space-mb--r100" />

      {/* product grid */}
      <div className="section-title-container">
        <Container>
          <Row className="space-mb--50">
            <Col xs={6}>
              <div className="section-title__label">
                <p>
                  {products.length} <span className="line"> Total Items</span>
                </p>
              </div>
            </Col>
            <Col xs={6} className="text-right">
              <div className="section-title__label">
                <p>
                  <a>Aegean Technology Solutions Limited</a> |<br /> 
                  DEV Server |<br /> 
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="col-lg-12">
              <SectionTitleOne title={info.FirstName+"'s Top Items"} />
            </div>
          </Row>
        </Container>
      </div>

      <div className="product-grid-container space-mb--r100">
        <Container>
          <Row className="space-mb--rm50">
            <ProductGridWrapper
              products={products}
              bottomSpace="space-mb--r50"
              column={4}
            />
          </Row>
        </Container>
      </div>

      {/* countdown timer */}
      <CountdownTimerFour
        title={limited.title}
        image={limited.image}
        dateTime={limited.dateTime}
        url={limited.url}
        buttonText={limited.buttonText}
        backgroundColorClass={limited.backgroundColorClass}
      />

      {/* testimonial */}
      <TestimonialOne
        testimonialData={testimonialOneData}
        spaceBottomClass="space-mb--r100"
      />

      {/* image cta */}
      <ImageCtaTwo spaceBottomClass="space-mb--r100" />
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    //products: getProducts(products, "furniture", "popular", 8)
    products: getProducts(products, "", "", 8)
  };
};

export default connect(mapStateToProps)(Furniture);
