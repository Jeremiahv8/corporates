import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { IoMdCash } from "react-icons/io";
import { LayoutNine } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";

import defaultoptions from "../../data/general/default-options.json";
import branding from "../../data/general/branding.json";

import Cookies from 'universal-cookie';

import { useToasts } from "react-toast-notifications";


//import sgMail from "@sendgrid/mail";



const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

//ReactDOM.render(<App />, document.body);







const cookies = new Cookies();

const Checkout = ({ cartItems }) => {
  let cartTotalPrice = 0;

  const { addToast } = useToasts();

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });


  let PackagesStored = cookies.get('packages', { path: '/' });

  let pointA_heading = "Shipping Address";
  let DeliveryFee = 40;

  console.log(PackagesStored);

  //console.log(cartItems[0].id);
  let isUDLVRDelivery = false;
  if(cartItems[0] != undefined){
    if(cartItems[0].id == 11){
      isUDLVRDelivery = true;
    }
  }

  if(isUDLVRDelivery){
    pointA_heading = "Pickup Address";
    DeliveryFee = 0;
  }else{
    DeliveryFee = 40;
    cartTotalPrice += 40;
  }
  

  
  let ShippingFeeStyle_ = {};
  if(isUDLVRDelivery){
    ShippingFeeStyle_ = {
      display: "none"
    };
  }
  
  
  let ResultURL = "/other/checkout";

  function PlaceOrder(e){
    e.preventDefault();

    let canOrder = true;
    
    if(isUDLVRDelivery && PackagesStored.length == 0){
      canOrder = false;
    }
    if(isUDLVRDelivery && PackagesStored.length != 0){

      let OrderInfo = {
        "id": 0,
        "userId": 0,
        "firstname": "Jeremiah",
        "lastname": "Cruickshank",
        "email": "jeremiahv8@hotmail.com",
        "phone": "7173110",
        "address": "40A Brunton rd, St James",
        "country": "Trinidad and Tobago",
        "city": "Port of Spain",
        "grandtotal": 40,
        "paymentmethod": "Cash on Delivery",
        "isUDLVR": true,
        "products": [
          {
            "id": 0,
            "productId": 11
          }
        ],
        "packages": PackagesStored
      }
      console.log("____Send to CustomerA|API|CustomerB"); // << This is it!
      console.log(OrderInfo);

      console.log(cookies.get('packages'));
      console.log(process.env.SENDGRID_API_KEY);

      

      return;
    }

    if(canOrder){
      addToast("Order Placed! You will receive an email with your recept.", { appearance: "success", autoDismiss: true });
    }else{
      addToast("Your Order has Expires!", { appearance: "warning", autoDismiss: false });

      //location.href = "/other/cart";
    }

  }

  return (
    <LayoutNine>

      <div className="checkout-area space-mt--r130 space-mb--r130" style={{background: "white", marginTop:"56px", paddingTop: "56px", paddingBottom: "56px", minHeight: "100vh"}}>
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col>
                <div className="lezada-form">
                  <form className="checkout-form">
                    <div className="row row-40">
                      <div className="col-lg-7 space-mb--20">

                        {/* Billing Address */}
                        <div id="shipping-form" className="space-mb--40">
                          <h4 className="checkout-title">{pointA_heading}</h4>
                          <div className="row">
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>First Name*</label>
                              <input type="text" placeholder="Eg. Nikita" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Last Name*</label>
                              <input type="text" placeholder="Eg. Noray Name" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Email Address*</label>
                              <input type="email" placeholder="Eg. info@udlvr.com" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Phone Number*</label>
                              <input type="text" placeholder="Eg. +1 (868) 770-4246" />
                            </div>
                            <div className="col-12 space-mb--20">
                              <label>Address*</label>
                              <input type="text" placeholder="Eg. #230 Eastern Main Road, El Dorado, Saint George" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Country*</label>
                              <select>
                                {defaultoptions.countries.map(function(item, count) {
                                  return <option key={count}>{item.name}</option>
                                })}
                              </select>
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>City*</label>
                              <input type="text" placeholder="Eg. 'St James', 'Chaguanas' etc "/>
                            </div>
                          </div>
                        </div>

                        <App />
                        
                        {/* Credit Card 
                        <div id="shipping-form" className="space-mb--40">
                          <h4 className="checkout-title">Credit Card</h4>
                          <div className="row">
                            <div className="col-12 space-mb--20">
                              <label>Card Number*</label>
                              <input type="text" placeholder="Eg. 4929 4578 9561 4982" />
                            </div>

                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Expiry Date (MMYY)*</label>
                              <input type="text" placeholder="Eg. 0722" />
                            </div>
                            <div className="col-md-6 col-12 space-mb--20">
                              <label>Card CVV*</label>
                              <input type="text" placeholder="Eg. 213" />
                            </div>

                            
                          </div>
                        </div>
                        */}

                      </div>
                      <div className="col-lg-5">
                        <div className="row">

                          {/* Shipping Method 
                          <div className="col-12 space-mb--50" >
                            <h4 className="checkout-title">Shipping Method</h4>
                            <div className="checkout-payment-method">

                              {defaultoptions.shippingmethods.map(function(item, count) {
                                console.log(item);
                                  if(!item.enabled) return null;

                                  return <>
                                    <div className="single-method">
                                      <input
                                        type="radio"
                                        id={"shipping_" + item.id}
                                        name="shipping-method"
                                        defaultValue={item.id}
                                      />
                                      <label htmlFor={"shipping_" + item.id}>
                                        {item.name +" | "+ item.fee} 
                                      </label>
                                    </div>
                                  </>
                              })}
                            </div>
                          </div>
                          */}

                          {/* Cart Total */}
                          <div className="col-12 space-mb--50" >
                            <h4 className="checkout-title">Cart Total</h4>
                            <div className="checkout-cart-total">
                              <h4>
                                Product <span>Total</span>
                              </h4>
                              <ul>
                                {cartItems.map((product, i) => {
                                  const discountedPrice = getDiscountPrice(
                                    product.price,
                                    product.discount
                                  ).toFixed(2);

                                  cartTotalPrice +=
                                    discountedPrice * product.quantity;

                                  return (
                                    <li key={"carttotal_"+i}>
                                      {product.name} X {product.quantity}{" "}
                                      <span>${discountedPrice}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                              <p>
                                Sub Total{" "}
                                <span>${cartTotalPrice.toFixed(2)}</span>
                              </p>
                              <p style={ShippingFeeStyle_}>
                                Shipping Fee <span>{DeliveryFee ? 0 | DeliveryFee : "--"}</span>
                              </p>
                              <h4>
                                Grand Total{" "}
                                <span>${cartTotalPrice.toFixed(2)}</span>
                              </h4>
                            </div>
                          </div>
                          {/* Payment Method */}
                          <div className="col-12 space-mb--50">
                            <h4 className="checkout-title">Payment Method</h4>
                            <div className="checkout-payment-method">

                              {defaultoptions.paymentmethods.map(function(item, count) {
                                  function handleChange(id, e){
                                    if(id != 2){
                                      console.log("Hide Credit Card Form");
                                    }else{
                                      console.log("Show Credit Card Form");
                                    }

                                    
                                  }
                                  
                                  if(item.enabled) return <div className="single-method" key={"paymentmeth_"+count}>
                                      <input
                                        type="radio"
                                        id={"payment_" + item.id}
                                        name="payment-method"
                                        defaultValue={item.id}
                                        onChange={(e) => handleChange(item.id,e)}
                                      />
                                      <label htmlFor={"payment_" + item.id}>
                                        {item.name}
                                      </label>
                                    </div>
                              })}
                               <div className="single-method space-mt--40" >
                                <input type="checkbox" id="accept_terms" />
                                <label htmlFor="accept_terms">
                                  I’ve read and accept the terms &amp;
                                  conditions
                                </label>
                              </div>
                              <button onClick={PlaceOrder} className="lezada-button lezada-button--medium space-mt--20">
                                Place order
                              </button>
                            </div>
                          </div>



                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCash />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      No items found in cart to checkout
                    </p>
                    <Link
                      href="/shop/left-sidebar"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                    >
                      <a className="lezada-button lezada-button--medium">
                        Shop Now
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutNine>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

export default connect(mapStateToProps)(Checkout);

