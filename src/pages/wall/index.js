import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutNine } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { BlogSidebar, BlogPostGridWrapper } from "../../components/Blog";

const Wall = () => {
  return (
    <LayoutNine>
      <div className="blog-page-wrapper space-mb--r130 space-mt--r130" style={{background:"white", marginTop:"54px", marginBottom: "56px", paddingTop: "56px"}}>
        <Container>
          <Row>
            <Col lg={12}>
              {/* post list */}
              <BlogPostGridWrapper />

              {/*
              <div className="pro-pagination-style text-center">
                <ul>
                  <li className="active page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      NEXT
                    </a>
                  </li>
                </ul>
              </div>
              */}
              
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutNine>
  );
};

export default Wall;
