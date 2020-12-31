import Link from "next/link";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { getProducts } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { SectionTitleThree } from "../../components/SectionTitle";
import { ProductGridThreeWrapper } from "../../components/ProductThumb";

const ProductSliders = ({ products }) => {
  const params = {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <IoIosArrowRoundBack />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <IoIosArrowRoundForward />
      </button>
    ),
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Product Sliders"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>Home</a>
            </Link>
          </li>

          <li>Product Sliders</li>
        </ul>
      </BreadcrumbOne>
      <div className="element-wrapper space-mt--r130 space-mb--r130">
        <SectionTitleThree
          title="Carousel of products"
          subtitle="This is where to find your satisfactory products"
        />
        <Container>
          <Row>
            <Col lg={12}>
              <div className="product-slider-container">
                <Swiper {...params}>
                  <ProductGridThreeWrapper
                    products={products}
                    sliderClass="swiper-slide"
                  />
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "decor", "popular", 9)
  };
};

export default connect(mapStateToProps)(ProductSliders);
