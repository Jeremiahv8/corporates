import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { IoIosCart } from "react-icons/io";

import featured from "../../data/general/featured.json";


const ImageCtaTwo = ({ spaceBottomClass }) => {
  return (
    <div
      className={`image-cta-two ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="image-cta-two__content space-mb-mobile-only--40">
              <h3 className="subtitle space-mb--30">{featured.subtitle}</h3>
              <h2 className="title space-mb--30">{featured.title}</h2>
              <p className="text space-mb--30">
                {featured.description}
              </p>
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                  <IoIosCart /> {featured.buttonText}
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-cta-two__image">
              <img
                style={{width: "100%"}}
                src={featured.image}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCtaTwo;
