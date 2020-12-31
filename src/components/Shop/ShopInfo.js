import { Container, Row, Col } from "react-bootstrap";
const ShopInfo = () => {
  return (
    <div className="shop-info-wrapper space-mb--50">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="shop-info-container">
              <div className="shop-info-single">
                <h4 className="title">FREE SHIPPING</h4>
                <div className="content">
                  <p>On all orders over $75.00</p>
                </div>
              </div>
              <div className="shop-info-single">
                <h4 className="title">FREE RETURNS</h4>
                <div className="content">
                  <p>30 days money back guarantee</p>
                </div>
              </div>
              <div className="shop-info-single">
                <div>
                  <h4 className="title">SECURE PAYMENT</h4>
                  <div className="content">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/icon/pay.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopInfo;
