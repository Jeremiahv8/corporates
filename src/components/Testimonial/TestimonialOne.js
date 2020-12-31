import Swiper from "react-id-swiper";
import { Container, Row, Col } from "react-bootstrap";
import { SectionTitleOne } from "../SectionTitle";
const TestimonialOne = ({ testimonialData, backgroundImage, spaceBottom }) => {
  const params = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
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
    <div
      className={`testimonial-area bg-img ${
        spaceBottom ? spaceBottom : "space-pt--r130 space-pb--r130"
      }`}
      style={{
        backgroundImage: `${
          backgroundImage
            ? `url(${process.env.PUBLIC_URL + backgroundImage})`
            : "none"
        },
        `, position: "relative"
      }}
    >
      <div style={{width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,.85)", position: "absolute", top: "0"}}></div>
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitleOne title="Testimonial" />
            <div className="testimonial-wrapper">
              <Swiper {...params}>
                {testimonialData &&
                  testimonialData.map((single, i) => {
                    return (
                      <div className="multi-testimonial-single-item" key={i}>
                        <div className="multi-testimonial-single-item__text">
                          {single.content}
                        </div>
                        <div className="multi-testimonial-single-item__author-info">
                          <div className="image">
                            <img
                              src={process.env.PUBLIC_URL + single.image}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <p className="name">{single.name}</p>
                            <span className="designation">
                              / {single.designation}
                            </span>
                          </div>
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

export default TestimonialOne;
