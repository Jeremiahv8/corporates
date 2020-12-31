import { Container, Row, Col } from "react-bootstrap";
import { SectionTitleOne } from "../../components/SectionTitle";

const BrandLogoOne = ({ brandLogoData }) => {
  return (
    <div className="brand-logo-area">
      <Container className="wide">
        <Row >
          <Col lg={12}>
            <SectionTitleOne title="Our Brands" />
            <div className="brand-logo-wrapper space-mb-mobile-only--m30">
              <Row style={{justifyContent: "center"}}>
                {brandLogoData &&
                  brandLogoData.map((single, i) => {
                    return (
                      <Col lg={2} md={4} xs={6} key={i}>
                        <div className="single-brand space-mb-mobile-only--30">
                          <a href={single.url} target="_blank">
                            <img
                              src={process.env.PUBLIC_URL + single.image}
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrandLogoOne;
