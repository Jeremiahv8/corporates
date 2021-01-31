import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Countdown from "react-countdown";
import { HeaderComingSoon } from "../../components/Header";
import Renderer from "../../components/Countdown/Renderer";
import { SubscribeEmail } from "../../components/Newsletter";

const ComingSoon = () => {
  return (
    <Fragment>
      <div
        className="coming-soon-area bg-coming-soon"
        style={{
          backgroundImage: `url(${
            "https://filemanager.aegeantt.com/cdn/MysticLights/coming-soon.png"
          })`, backgroundSize: "cover"
        }}
      >
        <div style={{background: "rgba(0,0,0,.10)", width: "100vw", height: "100vh", position: "absolute"}}></div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="coming-soon-content">
                <div className="subscription-form subscription-form--comingsoon">
                  <h4 className="coming-soon-subtitle space-mb--10">
                    MYSTIC LIGHTS
                  </h4>
                  <h2 className="coming-soon-title space-mb--40">
                    Ready to welcome you in...
                  </h2>
                  <small >
                  </small><br></br>
                  <div className="deal-countdown coming-soon-deal-countdown">
                    <Countdown
                      date={new Date("February 03, 2021 12:00:00")}
                      renderer={Renderer}
                    />
                  </div>
                  <div className="coming-soon-subscribe-form">
                    <SubscribeEmail mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ComingSoon;
