import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";

import { LayoutNine } from "../../components/Layout";
import { getDiscountPrice } from "../../lib/product";

import { BreadcrumbOne } from "../../components/Breadcrumb";
import { BlogSidebar } from "../../components/Blog";
import {
  IoIosCalendar,
  IoIosPerson,
  IoMdChatbubbles,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGoogleplus,
  IoLogoPinterest,
  IoMdPricetags,
  IoIosRedo
} from "react-icons/io";

import products from "../../data/products.json";

const PostRightSidebar = ({
  product,
  cartItems,
  wishlistItems,
  compareItems,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare
}) => {

  const { addToast } = useToasts();
  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  const productPrice = product.price.toFixed(2);
  const cartItem = cartItems.filter(
    (cartItem) => cartItem.id === product.id
  )[0];
  const wishlistItem = wishlistItems.filter(
    (wishlistItem) => wishlistItem.id === product.id
  )[0];
  const compareItem = compareItems.filter(
    (compareItem) => compareItem.id === product.id
  )[0];

  //const PostRightSidebar = () => {
  return (
    <LayoutNine aboutOverlay={false} >
      <div style={{background: "white", paddingTop: "24px", marginTop: "56px"}} className="blog-page-wrapper space-mb--r130 space-mt--r130">
        <Container>
          <Row>
            <Col lg={3} className="order-2 space-mt-mobile-only--50">
              {/* sidebar */}
              <BlogSidebar />
            </Col>

            <Col lg={9} className="order-1">
              <div className="blog-grid-post blog-grid-post--sticky space-pb--50 space-mb--40">
                <div className="blog-grid-post__image blog-grid-post--sticky__image space-mb--30">
                  <img
                    src={product.thumbImage[1]}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="blog-grid-post__content blog-grid-post--sticky__content">
                  <div className="post-category space-mb--10">
                    <Link
                      href="/blog/standard-left-sidebar"
                      as={
                        process.env.PUBLIC_URL + "/blog/standard-left-sidebar"
                      }
                    >
                      <a>{product.category[0]}</a>
                    </Link>
                  </div>
                  <h2 className="post-title">{product.name}</h2>

                  <div className="post-info d-flex flex-wrap align-items-center space-mb--50">
                    <div className="post-user">
                      <IoIosPerson /> By
                      <Link
                      >
                        <a> {" "+ product.by}</a>
                      </Link>
                    </div>
                    <div className="post-date mb-0 space-pl--30">
                      <IoIosCalendar />
                      <Link
                        href="/blog/standard-left-sidebar"
                        as={
                          process.env.PUBLIC_URL + "/blog/standard-left-sidebar"
                        }
                      >
                        <a>june 5, 2020</a>
                      </Link>
                    </div>
                    <div className="post-category space-pl--30">
                      <Link
                        href="/blog/standard-left-sidebar"
                        as={
                          process.env.PUBLIC_URL + "/blog/standard-left-sidebar"
                        }
                      >
                        <a>fashion</a>
                      </Link>
                    </div>
                    <div className="post-comment space-pl--30">
                      <IoMdChatbubbles />
                      <a href="#"> 4 Comments</a>
                    </div>
                  </div>

                  <div className="single-blog-post-section">
                    <h3 className="space-mb--30">Vessel</h3>
                    <p className="space-mb--30">
                      {product.shortDescription}
                    </p>
                    <h3 className="space-mb--30">Core</h3>
                    <p className="space-mb--30">
                      {product.fullDescription}
                    </p>
                    
                  </div>

                  <Row className="space-mt--30 align-items-center">
                    <Col md={6} className="text-center text-md-left">
                      <div className="post-tags">
                        <IoMdPricetags />
                        <ul className="tag-list">
                          <li>
                            <a href="#">accessories</a>,
                          </li>
                          <li>
                            <a href="#">clothes</a>,
                          </li>
                          <li>
                            <a href="#">fashion</a>,
                          </li>
                          <li>
                            <a href="#">greenspace</a>,
                          </li>
                          <li>
                            <a href="#">Instagram</a>,
                          </li>
                          <li>
                            <a href="#">Interior</a>,
                          </li>
                          <li>
                            <a href="#">lezada</a>,
                          </li>
                          <li>
                            <a href="#">lifestyle</a>,
                          </li>
                          <li>
                            <a href="#">shop</a>,
                          </li>
                          <li>
                            <a href="#">stores</a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col md={6} className="text-center text-md-right">
                      <div className="post-share">
                        <span>Share this post:</span>
                        <ul>
                          <li>
                            <a href="#">
                              <IoLogoFacebook />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <IoLogoTwitter />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <IoLogoGoogleplus />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <IoLogoPinterest />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="single-author space-mb--40">
                <div className="single-author__image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/user/user3.jpeg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-author__content">
                  <p className="username">Edna Watson</p>
                  <p className="message">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laboruLorem
                    ipsum dolor sit amet datat non proident
                  </p>
                </div>
              </div>
              <div className="comments-wrapper space-mb--40">
                <h2 className="comment-title space-mb--30">
                  Comments <span>(4)</span>
                </h2>

                <div className="single-comment">
                  <div className="single-comment__image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/user/user1.jpeg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-comment__content">
                    <p className="username">
                      Scott James <span className="date">/ April 5, 2020</span>
                    </p>

                    <p className="message">
                      Thanks for always keeping your WordPress themes up to
                      date. Your level of support and dedication is second to
                      none.
                    </p>

                    <a href="#" className="reply-link">
                      <IoIosRedo /> reply
                    </a>
                  </div>
                </div>
                <div className="single-comment">
                  <div className="single-comment__image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/user/user2.jpeg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-comment__content">
                    <p className="username">
                      Edna Watson <span className="date">/ April 5, 2020</span>
                    </p>

                    <p className="message">
                      Thanks for always keeping your WordPress themes up to
                      date. Your level of support and dedication is second to
                      none.
                    </p>

                    <a href="#" className="reply-link">
                      <IoIosRedo /> reply
                    </a>
                  </div>
                </div>

                <div className="single-comment">
                  <div className="single-comment__image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/user/user3.jpeg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-comment__content">
                    <p className="username">
                      Owen Christ <span className="date">/ April 5, 2020</span>
                    </p>

                    <p className="message">
                      Thanks for always keeping your WordPress themes up to
                      date. Your level of support and dedication is second to
                      none.
                    </p>

                    <a href="#" className="reply-link">
                      <IoIosRedo /> reply
                    </a>
                  </div>
                </div>

                <div className="single-comment single-comment--reply">
                  <div className="single-comment__image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/user/user1.jpeg"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-comment__content">
                    <p className="username">
                      Scott James <span className="date">/ April 5, 2020</span>
                    </p>

                    <p className="message">
                      Thanks for always keeping your WordPress themes up to
                      date. Your level of support and dedication is second to
                      none.
                    </p>

                    <a href="#" className="reply-link">
                      <IoIosRedo /> reply
                    </a>
                  </div>
                </div>
              </div>
              <div className="comment-form">
                <div>
                  <h2 className="comment-title space-mb--30">
                    Leave your thought here
                  </h2>
                  {/*=======  comment form  =======*/}
                  <div className="lezada-form comment-form">
                    <form>
                      <Row>
                        <Col lg={4} className="space-mb--20">
                          <input type="text" placeholder="Name (*)" required />
                        </Col>
                        <Col lg={4} className="space-mb--20">
                          <input
                            type="email"
                            placeholder="Email (*)"
                            required
                          />
                        </Col>
                        <Col lg={4} className="space-mb--20">
                          <input type="text" placeholder="Website" />
                        </Col>
                        <Col lg={12} className="space-mb--20">
                          <textarea
                            cols={30}
                            rows={10}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </Col>
                        <Col lg={12} className="text-center">
                          <button
                            type="submit"
                            className="lezada-button lezada-button--medium"
                          >
                            submit
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutNine>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(deleteFromWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
    deleteFromCompare: (item, addToast) => {
      dispatch(deleteFromCompare(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostRightSidebar);


//export default PostRightSidebar;


export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths = products.map((product) => ({
    params: { slug: product.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = products.filter((single) => single.slug === params.slug)[0];

  return { props: { product } };
}
