import { Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { HeaderTwo } from "../components/Header";

import { LayoutNine } from "../components/Layout";


const NotFound = () => {
  return (
    <LayoutNine aboutOverlay={false}>
      <div
        className="nothing-found-area bg-404"
        style={{
          backgroundImage: `url(${
            "https://img.wallpapersafari.com/desktop/1920/1080/31/67/NG82fm.jpg"
          })`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{background: "rgba(0,0,0,.75)", width: "100vw", height: "100vh", position: "absolute"}}></div>

        <Container>
          <Row>
            <Col lg={6}>
              <div className="nothing-found-content" style={{color: "white"}}>
                <h1 style={{color: "rgb(225,225,225)"}}>Page Locked!!</h1>
                <p style={{textAlign: "center", color: "rgb(200,200,200)"}} className="direction-page">You cannot access this page at this moment because the owner has temporarily locked it</p>
                <p className="direction-page">
                  BACK TO{" "}
                  <Link href="/" as={"/"}>
                    <a style={{color: "rgb(225,225,225)", borderColor: "rgb(200,200,200)"}}>Landing Page</a>
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
