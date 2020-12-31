import { Container, Row, Col } from "react-bootstrap";
import {
  getIndividualCategories,
  getIndividualColors,
  getProductsIndividualSizes,
  getIndividualTags,
  setActiveSort
} from "../../lib/product";

const ShopFilter = ({ products, getSortParams }) => {
  const categories = getIndividualCategories(products);
  const colors = getIndividualColors(products);
  const sizes = getProductsIndividualSizes(products);
  const tags = getIndividualTags(products);

  return (
    <div className="shop-advance-filter">
      <Container className="space-pt--50 space-pb--50">
        <Row>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Categories</h2>

              {categories.length > 0 ? (
                <ul className="single-filter-widget__list">
                  <li>
                    <button
                      onClick={(e) => {
                        getSortParams("category", "");
                        setActiveSort(e);
                      }}
                    >
                      All categories
                    </button>
                  </li>
                  {categories.map((category, i) => {
                    return (
                      <li key={i}>
                        <button
                          onClick={(e) => {
                            getSortParams("category", category);
                            setActiveSort(e);
                          }}
                        >
                          {category}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No categories found"
              )}
            </div>
          </Col>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Colors</h2>
              {colors.length > 0 ? (
                <ul className="single-filter-widget__list single-filter-widget__list--color">
                  {colors.map((color, i) => {
                    return (
                      <li key={i}>
                        <button
                          onClick={(e) => {
                            getSortParams("color", color.colorName);
                            setActiveSort(e);
                          }}
                          style={{ backgroundColor: color.colorCode }}
                        ></button>
                      </li>
                    );
                  })}
                  <li>
                    <button
                      onClick={(e) => {
                        getSortParams("color", "");
                        setActiveSort(e);
                      }}
                    >
                      x
                    </button>
                  </li>
                </ul>
              ) : (
                "No colors found"
              )}
            </div>
          </Col>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Sizes</h2>
              {sizes.length > 0 ? (
                <ul className="single-filter-widget__list single-filter-widget__list--size">
                  <li>
                    <button
                      onClick={(e) => {
                        getSortParams("size", "");
                        setActiveSort(e);
                      }}
                    >
                      All sizes
                    </button>
                  </li>
                  {sizes.map((size, i) => {
                    return (
                      <li key={i}>
                        <button
                          onClick={(e) => {
                            getSortParams("size", size);
                            setActiveSort(e);
                          }}
                        >
                          {size}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No sizes found"
              )}
            </div>
          </Col>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Tags</h2>
              {tags.length > 0 ? (
                <div className="tag-container">
                  {tags.map((tag, i) => {
                    return (
                      <button
                        key={i}
                        onClick={(e) => {
                          getSortParams("tag", tag);
                          setActiveSort(e);
                        }}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              ) : (
                "No tags found"
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopFilter;
