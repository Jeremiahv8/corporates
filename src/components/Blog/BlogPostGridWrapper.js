import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { IoIosHeart, IoIosAdd } from "react-icons/io";


import productData from "../../data/products.json";


const BlogPostGridWrapper = ({ column }) => {
  return (
    <Row>

      {productData.map(function(item, key) {
        return <Col key={"P"+ key}
            lg={column && column === 2 ? 6 : column === 3 ? 4 : 12}
            md={column && column === 2 ? 6 : column === 3 ? 6 : 12}
            className="space-mb--60"
          >
            <div className="blog-grid-post">
              <div className="blog-grid-post__image space-mb--30">
                <Link
                  href={"/blog/"+ item.slug}
                  as={process.env.PUBLIC_URL + "/blog/"+ item.slug}
                >
                  <a>
                    <img
                      src={
                        item.thumbImage[0]
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-grid-post__content">
                <div className="post-date">
                  <IoIosHeart /> <a>{item.likes}</a>
                  
                </div>
                <h2 className="post-title">
                  <Link
                    href={"/blog/"+ item.slug}
                    as={process.env.PUBLIC_URL + "/blog/" + item.slug}
                  >
                    <a>{item.name}</a>
                  </Link>
                </h2>
                <p className="post-excerpt">
                  {item.shortDescription}
                </p>
                <Link
                  href={"/blog/"+ item.slug}
                  as={process.env.PUBLIC_URL + "/blog/"+ item.slug}
                >
                  <a className="blog-readmore-btn">
                    <IoIosAdd /> read more
                  </a>
                </Link>
              </div>
            </div>
          </Col>
      })}

      

    </Row>
  );
};

export default BlogPostGridWrapper;
