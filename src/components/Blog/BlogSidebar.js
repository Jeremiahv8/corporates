import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { connect } from "react-redux";

import CurrencyFormat from 'react-currency-format';

import categoryData from "../../data/categories/category-data.json";


const BlogSidebar = ({products}) => {
  console.log(products);
  
  return (
    <div className="blog-sidebar">
      <div className="single-sidebar-widget space-mb--40">
        <div className="search-widget">
          <form>
            <input type="search" placeholder="Search products ..." />
            <button type="button">
              <IoIosSearch />
            </button>
          </form>
        </div>
      </div>
      

      <div className="single-sidebar-widget space-mb--40">
        <div className="widget-post-wrapper">

          {products.map(function(item,key) {
            return <div key={"ProductBlog"+ key} className="single-widget-post">
                <div className="image">
                  <Link
                    href={"/blog/"+ item.slug}
                    as={process.env.PUBLIC_URL + "/blog/"+ item.slug}
                  >
                    <a>
                      {item.slug}
                      <img
                        src={
                          item.thumbImage[1]
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h3 className="widget-post-title">
                    <Link
                      href={"/shop/"+item.slug}
                      as={process.env.PUBLIC_URL + "/shop/"+ item.slug}
                    >
                      <a>{item.name}</a>
                    </Link>
                  </h3>
                  <p className="widget-post-date"><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                </div>
              </div>
          })}  
          
          

          
          
        </div>
      </div>


      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          Collections
        </h2>
        <ul className="single-sidebar-widget__list single-sidebar-widget__list--category">
          {categoryData.map(function(item, count) {
            return <li key={"S_"+count}>
              <Link
                href={"/blog/"+ products.slug}
                as={process.env.PUBLIC_URL + "/blog/"+ products.slug}
              >
                <a>{item.name}</a>
              </Link>
            </li>
          })}
        </ul>
      </div>
      {/*
      <div className="single-sidebar-widget space-mb--40">
        <div className="blog-sidebar-banner">
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/banners/blog-sidebar.png"
                }
                className="img-fluid"
                alt=""
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="single-sidebar-widget">
        <h2 className="single-sidebar-widget__title space-mb--30">
          {" "}
          Popular Tags
        </h2>
        <div className="tag-container">
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>bags</a>
          </Link>
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>chair</a>
          </Link>
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>clock</a>
          </Link>
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>cosmetic</a>
          </Link>
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>fashion</a>
          </Link>
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>furniture</a>
          </Link>
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>holder</a>
          </Link>
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>mask</a>
          </Link>
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>men</a>
          </Link>
        </div>
      </div>
      */}

    </div>
  );
};



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(deleteFromWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
    deleteFromCompare: (item, addToast) => {
      dispatch(deleteFromCompare(item, addToast));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.productData
    //products: getProducts(products, "furniture", "popular", 8)

  };
};
//export default connect(mapStateToProps, mapDispatchToProps)(ProductGridWrapper);
export default connect(mapStateToProps, mapDispatchToProps)(BlogSidebar);



//export default BlogSidebar;
