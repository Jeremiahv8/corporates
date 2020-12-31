import { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Countdown from "react-countdown";
import { HeaderTwo } from "../../components/Header";
import Renderer from "../../components/Countdown/Renderer";
import { SubscribeEmail } from "../../components/Newsletter";


import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

import { useHistory, Redirect } from "react-router-dom";


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Link from "next/link";

//import redirect from 'react-router-dom' 
//import { useHistory } from "react-router-dom";


import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Power from '@material-ui/icons/Power';










let IsLoggedIn = true;

let hasEmail = true;
const cookies = new Cookies();

let emailUpdated = false;


let user_Email = "";


const EmailLogin = (props) => {

  const router = useRouter();

  const [Greeting, setGreeting] = useState("Enter your email to Get Started");

  

  

  
  if(cookies.get('GrekoAPI_UserId') == undefined || cookies.get('GrekoAPI_UserId') == "" || cookies.get('GrekoAPI_UserId') == "undefined"){
    IsLoggedIn = false;
  }

 
  if(!IsLoggedIn){
    /*
    //cookies.set('GrekoAPI_UserId',"", { path: './' });
    //cookies.set('email',"", { path: './' });
    cookies.set('firstname',"", { path: './' });
    cookies.set('lastname',"", { path: './' });
    cookies.set('contact',"", { path: './' });
    cookies.set('address',"", { path: './' });
    */
  }

  if(IsLoggedIn){
    if(cookies.get('email') == undefined || cookies.get('email') == "" || cookies.get('email') == "undefined"){
      hasEmail = false;
    }
  }
  if(cookies.get('email') == undefined || cookies.get('email') == "" || cookies.get('email') == "undefined"){
    hasEmail = false;
  }
  
  let Email_PLUG = false;

  let Email_temp = "";



  let hasUserId = true;
  if(cookies.get('GrekoAPI_UserId') == undefined || cookies.get('GrekoAPI_UserId') == "" || cookies.get('GrekoAPI_UserId') == "undefined"){
    hasUserId = false;
  }


  if(hasEmail && hasUserId){
    emailUpdated = true;
    //cookies.set('email',Email, { path: './' });
    //setEmail_PLUG(true);
    Email_PLUG = true;

    Email_temp = cookies.get('email');

    user_Email = cookies.get('email');
    //setEmail(Email_temp);


  }
  const [Email, setEmail] = useState(Email_temp);


  console.log("LoggedIn: "+ IsLoggedIn);
  console.log("hasEmail: "+ hasEmail);
  console.log("hasEmail: -Email_temp"+ Email_temp);
  console.log("GrekoAPI_UserId: '"+ cookies.get('GrekoAPI_UserId') +"'");
  console.log("Email_PLUG: "+ Email_PLUG);


  const itemSlug = "delivery-service";

  

  function handle(e){
    //const value = e.target.value;
    e.preventDefault();

    //  validate
    if(Email == ""){
      e.preventDefault();
      return;
    }

    //cookies.set('email',Email, { path: './' });
    console.log("Pre: "+ cookies.get('email'));

    if(hasUserId){
      //router.push("/my-account");
      console.log("ALREADY LOGGED IN");
    }


    login(Email);
    //e.preventDefault();
    //return true;
  }


  function GrekoAPI_ErrorHandler(info){
    console.log("ERROR");
    //console.log(info);
    return;
  }
  function GrekoAPI_handler(info){
    console.log("SUCCESS");
    console.log(info);
    
    //console.log(result);
    if(info.status == 2424){
      if(!hasUserId){
        console.log("Password ERROR");
        console.log("END");
        return;
      }
      
      //router.push("/shop/delivery-service");
      router.push("/shop/[slug]", "/shop/delivery-service");
      return;
    }

    if(info.status == 1000 ){

      console.log("info_");
      console.log(info);
      console.log(info.result._id);

      if(info.result._id == undefined || info.result._id == "undefined" || info.result._id == ""){
        console.log("ID ERROR");
        console.log("END");
        return;
      }

      cookies.set('GrekoAPI_UserId', info.result._id, { path: '/' });
      cookies.set('email', info.result.email , { path: '/' });
      console.log("END");


      //href={`/shop/[slug]?slug=${product.slug}`}

      //router.push({ path: `/shop/[slug]?slug=${itemSlug}` }) // -> /user/123


      //router.push("/shop/delivery-service");
      router.push("/shop/[slug]", "/shop/delivery-service");

      //router.push({ name: 'shop', params: { itemSlug } }) // -> /user/123
      //router.push({ path: `/shop/${itemSlug}` }) // -> /user/123

      //router.push(`/shop/[slug]?slug=${itemSlug}`);
      return;

      //cookies.set('GrekoAPI_UserId', UserId, { path: '/' });
      //cookies.set('email', UserId, { path: '/' });
    }

    return;
    if(info.status == 1000){
      console.log(info.result.email);
      console.log(info.result._id);
      let UserId = info.result._id;
      cookies.set('GrekoAPI_UserId', UserId, { path: '/' });
      console.log(cookies.get("GrekoAPI_UserId"))
      console.log("END");
      return;
    }
  }
  function login(Email){
    const data = {
      email: Email
    };
    console.log("XX___:");
    console.log("email:"+Email);
    fetch("https://greko-api-dev.herokuapp.com/user/create?email="+ Email,
    {
        headers: {
          'Content-Type': 'application/json',
        },
    })
    .then(data => data.json())
    .then(function(info){ GrekoAPI_handler(info) })
    .catch(function(info){ GrekoAPI_ErrorHandler(info) })
  }


  const handleKeyDown = (e) => {
    
    
    if (e.key === 'Enter') {
      e.preventDefault();
      return;
      //console.log('do validate')
      if(Email == ""){
        e.preventDefault();
        console.log("Email ERROR");
        console.log("END");
        return;
      }

      e.preventDefault();
      //console.log("END");
      //console.log("END");
      login(Email);
    }
  }
  return (
    <Fragment>
      <HeaderTwo />
      <div
        className="coming-soon-area bg-coming-soon"
        style={{
          backgroundImage: `url(${
            "https://filemanager.aegeantt.com/cdn/UDLVR/UDLVR-Coming-Soon-Background-1920x1080-revision-3b-e1586276645773.jpg"
          })`, backgroundSize: "cover"
        }}
      >
        <div style={{background: "rgba(255,255,255,.90)", width: "100vw", height: "100vh", position: "absolute"}}></div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="coming-soon-content">
                <div className="subscription-form subscription-form--comingsoon">
                  <h4 className="coming-soon-subtitle space-mb--10">
                    Delivery Just For You
                  </h4>
                  <h2 className="coming-soon-title space-mb--40">
                    {Greeting}
                  </h2>

                  {Email_PLUG ? (
                      <div style={{width:"25px",height:"25px",transform: "translate(-5px, -5px)"}}>
                        <Power className="plugStyle"/>
                      </div>
                    ) : (
                      <>
                      
                      </>
                    )}
                  <form noValidate autoComplete="off" width="1000" >
                    {/*
                    <FormControlLabel
                      control={<Checkbox icon={<Power />} checkedIcon={<Power />} value={Email_PLUG} name="checkedH" onChange={(e) => setEmail_PLUG(e.target.value)}/>}
                      label=""
                    />
                    */}
                    
                    
                    <TextField onKeyDown={handleKeyDown} inputRef={input => input && input.focus()} autoFocus disabled={Email_PLUG} style={{maxWidth: "400px", width: "100%"}} id="email" label="Email" 
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={Email_PLUG ? user_Email : Email} 
                        type="email" onChange={(e) => setEmail(e.target.value)} required />


                    {/*hasEmail && hasUserId ? (
                      <TextField  style={{width: "400px"}} id="email" label="Email" 
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={user_Email} 
                        type="email" onChange={(e) => setEmail(e.target.value)} required />
                    ) : (
                      <>
                      <TextField disabled style={{width: "400px"}} id="email" label="Email" 
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={user_Email} 
                        type="email" onChange={(e) => setEmail(e.target.value)} required />
                      </>
                      )*/}


                    <div style={{display: "inline-block", transform: "translate(0px, 10px)"}}>
                      
                        <Button onClick={handle}>
                          Get Started
                        </Button>
                    </div>
                  </form>


                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default EmailLogin;
