import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { LayoutNine } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";

import { FooterOne } from "../../components/Footer";


const Privacy = () => {
  return (
    <LayoutNine aboutOverlay={false}>
      <div className="element-wrapper space-mt--r130 space-mb--r130" style={{background: "white", paddingTop: "56px", marginTop: "56px", minHeight: "calc(100vh - 56px)"}}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="faq-wrapper">
                <div className="single-faq space-mb--r100">
                  <h2 className="faq-title space-mb--20">
                    General privacy information
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
                            When you use our services, we're trusting you with your information. 
                            You understand this is a big responsibility and work hard to protect 
                            your information with the control that we give you over it. 
                            When you enter this software you will be able to manipulate input 
                            fields for: a Profile Image, First Name, Last Name and Country. 
                            You understand that manipulating these inputs mean 
                            you are fully and totally resposible for what is stored on your device.
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
                            When you use your data, you are trusting us to
                            maintain the integrity of the data when used in a
                            transaction, such as signing in, making a purchase etc.
                            We make sure that your data can be used by you for any 
                            purpose you see fit and as the platform supports.
                            We allow you the explicit freedome to use the data you 
                            upload in anyway shape or form when you enter. 
                            We will not enforce any laws on your data and how you use it
                            As such we hold no responsibilities for how you choose to 
                            use your data.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                  </Accordion>
                </div>

                <div className="single-faq space-mb--r100">
                  <h2 className="faq-title space-mb--20">
                    Payment privacy information
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
                            We expect that you use a payment method that is easy 
                            and effective for you. If you choose to use Credit card
                            payment, you would need to enter your card information 
                            on your device. We expect that if you enter this info during
                            a transaction, that you will not leave your device dormant
                            and accessible by other to make purchases that you are not aware of.
                            You understand that every purchase made by your device was verified by you.

                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="single-my-account space-mb--20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="1">
                          <h3 className="panel-title">
                            What are our resposibilities
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <p>
                            When you use this software, you are expected to have full
                            and unrestricted freedom to use any payment method that is 
                            functionally supported for any purpose you deem necesary without 
                            any interfarance from outside sources. We make it our responsibility
                            to make it easy for you to make payments and not hinder your productivity
                            for any means.
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

export default Privacy;
