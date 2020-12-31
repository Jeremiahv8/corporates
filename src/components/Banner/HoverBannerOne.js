import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import hoverslideData from "../../data/hover-banner/hover-banner-data.json";

const HoverBannerOne = ({ spaceBottomClass }) => {

  return (
    <div
      className={`hover-banner-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <Container className="wide">
        <Row className="space-mb--m30">

          {hoverslideData.map(function(item, i) {
            return <Col key={i} md={4} className="space-mb--30">
                <div className="single-category single-category--three" style={{height: "259px"}}>
                  <div style={{position: "relative"}} className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                    <img
                      src={item.bgimage}

                      className="img-fluid"
                      alt=""
                      style={{height: "259px", objectFit: "cover"}}
                    />
                    <div style={{position: "absolute",width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,.25)", top: "0"}}></div>
                  </div>
                  <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                    <div className="title">
                      <p>
                        <Link
                          href={item.url}
                          as={item.url}
                        >
                          <a style={item.titlestyle}>
                            {item.title}
                          </a>
                        </Link>
                      </p>
                      <Link
                        href={item.url}
                        as={item.url}
                        
                      >
                        <a style={item.titlestyle}>Get Started</a>
                      </Link>
                    </div>
                  </div>
                  <Link
                    href={item.url}
                    as={item.url}
                  >
                    <a className="banner-link" />
                  </Link>
                </div>
              </Col>
          })}
          
        </Row>
      </Container>
    </div>
  );
};

export default HoverBannerOne;
