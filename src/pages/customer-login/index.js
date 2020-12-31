import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";

import loginpageData from '../../data/general/login-page.json';

import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';

let IsLogginValid = true;
const LoginRegister = () => {


  const router = useRouter()
  const { email } = router.query;
  console.log(email);

  const [Email, setEmail] = useState(email); 
  const [IsLoggedIn, setIsLoggedIn] = useState(false); 

  const cookies = new Cookies();
  let user = cookies.get('user');

  
  if(user != undefined){
    if(user.userid != undefined){
      IsLogginValid = false;
    }
    
  }
  if(user == undefined){
    IsLogginValid = false;
    
  }
  
  //console.log(cookies.get('user2'));

  function submitEmail(){
    console.log("Login");
    
    // IsLogginValid == false (case)
    if(!IsLogginValid){

    }


    // IsLogginValid == true (case)
    if(IsLogginValid){
      router.push("/my-account");
    }
    
    

  }

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Customer Login"
        backgroundImage=""
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>Home</a>
            </Link>
          </li>

          <li>Customer Login</li>
        </ul>
      </BreadcrumbOne>
      <div className="login-area space-mt--r130 space-mb--r130">
        <Container>
          <Row style={{justifyContent: "center"}}>
            <Col lg={6} className="space-mb-mobile-only--50">
              <div className="lezada-form login-form">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Login</h2>
                        <p>{loginpageData.tagline}</p>
                      </div>
                    </Col>
                    
                    <Col lg={12} className="space-mb--60">
                      <input
                        type="email"
                        placeholder="Email address"
                        value={Email}
                        required
                      />
                    </Col>
                    
                    {/*
                    <Col lg={12} className="space-mb--60">
                      <input type="password" placeholder="Password" required />
                    </Col>
                    */}
                    <Col lg={12} className="space-mb--30" style={{textAlign: "center"}}>
                      <button className="lezada-button lezada-button--medium" onClick={submitEmail}>
                        Next
                      </button>
                    </Col>
                    
                    {/*
                    <Col>
                      <input type="checkbox" />{" "}
                      <span className="remember-text">Remember me</span>
                      <a href="#" className="reset-pass-link">
                        Lost your password?
                      </a>
                    </Col>
                    */}
                  </Row>
                </form>
              </div>
            </Col>
            {/*
            <Col lg={6}>
              <div className="lezada-form login-form--register">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Register</h2>
                        <p>If you don’t have an account, register now!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="regEmail">
                        Email Address <span className="required">*</span>{" "}
                      </label>
                      <input type="text" id="regEmail" required />
                    </Col>
                    <Col lg={12} className="space-mb--50">
                      <label htmlFor="regPassword">
                        Password <span className="required">*</span>{" "}
                      </label>
                      <input type="password" id="regPassword" required />
                    </Col>
                    <Col lg={12} className="text-center">
                      <button className="lezada-button lezada-button--medium">
                        register
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            */}

          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default LoginRegister;
