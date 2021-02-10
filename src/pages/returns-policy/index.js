import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { LayoutNine } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";

import { FooterOne } from "../../components/Footer";


const Returns = () => {
  return (
    <LayoutNine aboutOverlay={false}>
      <div className="element-wrapper space-mt--r130 space-mb--r130" style={{background: "white", paddingTop: "56px", marginTop: "56px"}}>
        <Container style={{minHeight: "calc(100vh - 56px - 56px - 56px)"}}>
          <Row>
            <Col lg={12}>
              <div className="faq-wrapper">
                <div className="single-faq space-mb--r100">
                  <h2 className="faq-title space-mb--20">
                    General returns information
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
                            When you receive an Item that you are not hapy with, we expect that you articulate clearly to us the issue you've encountered
                            You are responsible for communicating this dissatisfaction to us in an effective way, which includes describing the differences in
                            what you expected with what was received. You are expected to call, message, or use our contact page to communicate this.
                            We expect you to understand that returns are only valid if the product is damaged: A damaged product is any that does not function as it was discribed.
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
                            We ship returns just as we do deliveries, If a return is requested before 10:00 AM, you will then be called at noon to confirm 
                            that you are ready to present the item to our delivery, the delivery may reach before 1:00PM but can be as late as 7:00 PM.
                            We are also responsibille for informing you when your return cannot be made. You are responsible for 
                            informing us if you cannot present the return to our delivery that day,  and would like to postpone the return to the following day.

                            When a retun is made, you understand that we will refund 99% of the cost of the item, but not the cost of delivery.
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

export default Returns;
