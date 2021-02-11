import Link from "next/link";
import Swiper from "react-id-swiper";
import { Container, Row, Col } from "react-bootstrap";
import {
  IoIosCalendar,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

const BlogPostSlider = ({ blogData, spaceBottomClass }) => {
  const params = {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <IoIosArrowBack />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <IoIosArrowForward />
      </button>
    ),
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div
      className={`blog-post-slider ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <div className="blog-intro space-mb-mobile-only--30">
              <h2> From our wall</h2>
              <p>
                Learn more about our Candles, Collections and 
                most importantly about us. 
              </p>
              <Link
                href="/wall"
                as={ "/wall"}
              >
                <a className="lezada-button lezada-button--medium">view wall</a>
              </Link>
            </div>
          </Col>
          <Col lg={8}>
            <div className="blog-post-slider-container">
              <Swiper {...params}>
                {blogData &&
                  blogData.map((single, i) => {
                    return (
                      <div className="blog-grid-post" key={i}>
                        <div className="blog-grid-post__image space-mb--30">
                          <Link
                            href={`/wall/[slug]?slug=${single.slug}`}
                            as={
                              "/wall/" + single.slug
                            }
                          >
                            <a>
                              <img
                                src={single.thumbImage[2]}
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="blog-grid-post__content">
                          <div className="post-date">
                            <IoIosCalendar />
                            {single.date}
                          </div>
                          <h2 className="post-title">
                            <Link
                              href={single.url}
                              as={single.url}
                            >
                              <a>{single.title}</a>
                            </Link>
                          </h2>
                          <p className="post-excerpt">{single.text}</p>
                          <Link
                            href={single.url}
                            as={ single.url}
                          >
                            <a className="blog-readmore-btn">read more</a>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogPostSlider;
