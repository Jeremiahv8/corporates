import Link from "next/link";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { LayoutFive } from "../../components/Layout";
import { ShopInfo } from "../../components/Shop";
import { getProducts } from "../../lib/product";
import { HeroSliderTwo } from "../../components/HeroSlider";
import { CategorySlider } from "../../components/Category";
import { SectionTitleOne } from "../../components/SectionTitle";
import { ProductGridWrapper } from "../../components/ProductThumb";
import { BlogPostSlider } from "../../components/Blog";
import categoryData from "../../data/categories/category-one.json";
import blogData from "../../data/blog-posts/blog-post-one.json";
import heroSliderData from "../../data/hero-sliders/hero-slider-two.json";

const Trending = ({ products }) => {
  return (
    <LayoutFive>
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

      {/* blog post slider */}
      <BlogPostSlider blogData={blogData} spaceBottomClass="space-mb--50" />

      {/*shop info*/}
      <ShopInfo />
    </LayoutFive>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "fashion", "popular", 10)
  };
};

export default connect(mapStateToProps)(Trending);
