import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { LayoutNine } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";

import { FooterOne } from "../../components/Footer";


const Shipping = () => {
  return (
    <LayoutNine aboutOverlay={false}>
      <div className="element-wrapper space-mt--r130 space-mb--r130" style={{background: "white", paddingTop: "56px", marginTop: "56px"}}>
        <Container style={{minHeight: "calc(100vh - 56px - 56px - 56px)"}}>
          <Row>
            <Col lg={12}>
              <div className="faq-wrapper">
                <div className="single-faq space-mb--r100">
                  <h2 className="faq-title space-mb--20">
                    General shipping information
                  </h2>
                  <Accordion defaultActiveKey="0">
                    <Card className="single-my-account space-mb--20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="0">
                          <h3 className="panel-title">
                            What are your resposibilities
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p>
                            When you make an order of a product that needs to be shipped to your location,
                            You are expected to be available for a phone call at noon to confirm collection of your delivery. 
                            if the product was ordered after noon, the call should be expected noon of the following day.
                            You should be present for your delivery.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="single-my-account space-mb--20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="1">
                          <h3 className="panel-title">
                            What are our responsibilities
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <p>
                            When you make a purchase we will deliver your products to you in the same day 
                            if the order was made before 10:00 AM, you will then be called at noon to confirm 
                            that you are ready to collect, the delivery may reach before 1:00PM but can be as late as 7:00 PM.
                            We are also responsibille for informing you when your delivery cannot be made. You are responsible for 
                            informing us if you cannot collect the package that day,  and would like to postpone delivery to the following day.

                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                  </Accordion>
                </div>


                
              </div>
            </Col>
          </Row>
        </Container>
        <FooterOne />
      </div>
    </LayoutNine>
  );
};

export default Shipping;
