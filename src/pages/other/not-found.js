import { Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { HeaderTwo } from "../../components/Header";

const NotFound = () => {
  return (
    <LayoutNine aboutOverlay={false}>
      <HeaderTwo />
      <div
        className="nothing-found-area bg-404"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/backgrounds/404-bg.jpg"
          })`
        }}
      >
        <Container>
          <Row>
            <Col lg={6}>
              <div className="nothing-found-content">
                <h1>Oops!</h1>
                <h1 className="space-mb--50">Page not found!</h1>
                <p className="direction-page">
                  LETS HEAD BACK TO OUT LANDING PAGE {" "}
                  <Link href="/" as={ "/"}>
                    <a>Nysric Lights</a>
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutNine>
  );
};

export default NotFound;
