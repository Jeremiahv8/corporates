import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import ModalVideo from "react-modal-video";
import { LayoutNine } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { TestimonialOne } from "../../components/Testimonial";
import { BrandLogoOne } from "../../components/BrandLogo";
import testimonialData from "../../data/testimonials/testimonial-one.json";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";

import aboutpageData from "../../data/general/about-page.json";
import info from "../../data/general/info.json";
import metadata from "../../data/general/meta-data.json";


const About = () => {
  const [modalStatus, isOpen] = useState(false);

  return (
    <LayoutNine aboutOverlay={false}>
      
      {/* about content */}
      <div className="about-content space-mt--r130 space-mb--r130" style={{background: "white", marginTop: "56px", paddingTop: "56px", paddingBottom: "56px"}}>
        <div className="section-title-container space-mb--40">
          <Container>
            <Row>
              <Col lg={8} className="ml-auto mr-auto">
                {/* section title */}
                <div className="about-title-container text-center">
                  <p className="dark-title space-mb--35">{aboutpageData.tagline}</p>
                  <h2 className="title space-mb--15">
                    {aboutpageData.headline}
                  </h2>
                  <p className="title-text">
                    {aboutpageData.bio}
                  </p>
                  <p className="title-text">
                    {aboutpageData.content}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* about video content */}
        <div className="about-video-content space-mb--r100">
          <Container style={{maxWidth: "1660px"}}>
            <Row>
              <Col lg={10} className="ml-auto mr-auto">
                {/*=======  about video area  =======*/}
                <div
                  className="about-video-bg space-mb--60"
                  style={{
                    backgroundImage: `url(${
                      aboutpageData.ytvideothumbnail
                    })`
                    , backgroundPosition: "bottom"}}
                >
                  <p className="video-text video-text-left">
                    <Link
                      href=""
                      as={""}
                    >
                      <a></a>
                    </Link>
                  </p>

                  <div className="about-video-content__text-icon d-flex flex-column h-100 justify-content-center">
                    <div className="play-icon text-center space-mb--40">
                      <ModalVideo
                        channel="youtube"
                        isOpen={modalStatus}
                        videoId={aboutpageData.ytvideoid}
                        onClose={() => isOpen(false)}
                      />
                      <button onClick={() => isOpen(true)}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-play-100x100.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </button>
                    </div>
                    <h1>{aboutpageData.ytvideotitle}</h1>
                  </div>
                  <p className="video-text video-text-right">
                    <Link
                      href=""
                      as={""}
                    >
                      <a></a>
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={10} className="ml-auto mr-auto">
                <Row>
                  <Col md={6}>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title space-mb--25">ADDRESS</h2>
                      <p className="widget-content">
                        {info.address}
                      </p>
                    </div>
                    <div className="about-widget space-mb--35">
                      <h2 className="widget-title space-mb--25">PHONE</h2>
                      <p className="widget-content">Mobile: {info.phone}</p>
                    </div>
                    <div className="about-widget">
                      <h2 className="widget-title space-mb--25">EMAIL</h2>
                      <p className="widget-content">{info.email}</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="about-page-text">
                      <p className="space-mb--35">
                        {metadata.description}
                      </p>
                      <Link
                        href="/shop/"
                        as={process.env.PUBLIC_URL + "/shop/"}
                      >
                        <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                          <IoMdAdd /> online store
                        </a>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* testimonial 
        <TestimonialOne
          testimonialData={testimonialData}
          backgroundImage={aboutpageData.testimonialbgimage}
        />
        <div className="space-mb--r100"></div>
        <BrandLogoOne brandLogoData={brandLogoData} />
      */}
      </div>
    </LayoutNine>
  );
};

export default About;
