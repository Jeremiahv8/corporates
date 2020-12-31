import { Container, Row, Col } from "react-bootstrap";

import branding from "../../data/general/branding.json";


const BreadcrumbOne = ({ children, backgroundImage, pageTitle, className }) => {

  if(backgroundImage == "") backgroundImage = branding.pagedefaults.breadcrumbbanner;

  return (
    <div
      className={`breadcrumb-area space-pt--70 space-pb--70 ${
        className ? className : ""
      }`}
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL + backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}
    >
    <div className="bgoverlay" style={{width: "100%", height: "100%", position: "absolute",backgroundColor: "rgba(255,255,255,.5)", top: "0"}}></div>

      <Container>
        <Row>
          <Col>
            <h1 className="breadcrumb__title">{pageTitle}</h1>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbOne;
