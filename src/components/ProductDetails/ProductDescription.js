import { useState, Fragment, useEffect } from "react";
import { IoIosHeartEmpty, IoIosShuffle } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { ProductRating } from "../Product";
import { getProductCartQuantity } from "../../lib/product";


//import productCustomizations_ from "../../data/general/product-customizations.json";
import OrderScheme from "../../data/general/order-get-scheme.json";


import Cookies from 'universal-cookie';
import { LeakAddTwoTone } from "@material-ui/icons";
const cookies = new Cookies();


let IsLoggedIn = false;


let Packages = new Array();
  const Package_Scheme = { 
    CustomerName: "",
    PackageName: "",
    CustomerEmail: "",
    CustomerAddress: "",
    CustomerContact: "",
    PaymentType: "",
    PackageCost: 0,
    MerchantName: "",
    MerchantEmail: "",
    MerchantAddress: "",
    MerchantContact: "",
    Stage: ""
  };

  let All_Packages = new Array();
  let Package_0 = Object.assign({}, Package_Scheme);
  let Package_1 = Object.assign({}, Package_Scheme);
  let Package_2 = Object.assign({}, Package_Scheme);
  let Package_3 = Object.assign({}, Package_Scheme);
  let Package_4 = Object.assign({}, Package_Scheme);
  let Package_5 = Object.assign({}, Package_Scheme);
  let Package_6 = Object.assign({}, Package_Scheme);
  let Package_7 = Object.assign({}, Package_Scheme);
  let Package_8 = Object.assign({}, Package_Scheme);
  let Package_9 = Object.assign({}, Package_Scheme);

const ProductDescription = ({
  product,
  productPrice,
  discountedPrice,
  cartItems,
  wishlistItem,
  compareItem,
  addToast,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare
}) => {
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );


  const [ShowAlert, setShowAlert] = useState(false);
  function closeAlert(){
    console.log("CLOSED");
  } 

  let hasUserId = false;
  if(cookies.get('GrekoAPI_UserId') != undefined || cookies.get('GrekoAPI_UserId') != "" || cookies.get('GrekoAPI_UserId') != "undefined"){
    hasUserId = true;
  }
  let hasEmail = false;
  if(cookies.get('email') != undefined || cookies.get('email') != "" || cookies.get('email') != "undefined"){
    hasEmail = true;
  }

  if(hasEmail && hasUserId){
    IsLoggedIn = true;
  }

  const dropoffinputStyle = {
    border: "0px",
    borderBottom: "2px solid #ccc"
  }
  const dropofffieldStyle = {
    display: "grid",
    marginBottom: "20px"
  }
  const dropofffieldStyle_split = {
    display: "grid",
    marginBottom: "20px",
    width: "47%"
  }
  const dropoffAddress = {
    marginBottom: "20px",
    border: "1px solid rgba(0,0,0,.25)",
    padding: "20px",
    marginLeft: "0px",
    marginRight: "0px"
  }

  const dropoffsplit = {
    display: "flex",
    justifyContent: "space-between"
  };

  const PaymentTypeStyle = {
    width: "100%",
    border: "0px",
    borderBottom: "2px solid rgba(0,0,0,.25)"
  };

  
  //const [Packages, setPackages] = useState(OrderScheme.Packages);
  const [SinlgeDeliveryCost, setSinlgeDeliveryCost] = useState(40);

  const DefaultPaymentMethod = "Cash on Delivery";


  const [IsService, setIsService] = useState(false);


  //  user
  const user_GrekoAPI_UserId = cookies.get('GrekoAPI_UserId');
  const user_Firstname = cookies.get('firstname');
  const user_Lastname = cookies.get('lastname');
  const user_Email = cookies.get('email');
  const user_Contact = cookies.get('contact');
  const user_Address = cookies.get('address');
  const user_City = cookies.get('city');
  let user_Name_ = "";

  if(user_Firstname != undefined){
    user_Name_ = user_Firstname;
    if(user_Lastname != undefined){
      user_Name_ += " "+ user_Lastname;
    }
  }


  //  Merchant Set
  const [_0_MerchantName, set_0_MerchantName] = useState(user_Name_);
  const [_0_MerchantContact, set_0_MerchantContact] = useState(user_Contact);
  const [_0_MerchantEmail, set_0_MerchantEmail] = useState(user_Email);
  const [_0_MerchantAddress, set_0_MerchantAddress] = useState(user_Address);
  const [_0_MerchantCity, set_0_MerchantCity] = useState(user_City);

  function userEmailChanged(e){
    e.preventDefault();
    //set_0_MerchantEmail(value);

    //console.log("COOKIES SET")
  }

  const DefaultPackageName = "UDLVR Box";
  //  PackageName Set
  const [_0_PackageName, set_0_PackageName] = useState(DefaultPackageName);
  const [_1_PackageName, set_1_PackageName] = useState(DefaultPackageName);
  const [_2_PackageName, set_2_PackageName] = useState(DefaultPackageName);
  const [_3_PackageName, set_3_PackageName] = useState(DefaultPackageName);
  const [_4_PackageName, set_4_PackageName] = useState(DefaultPackageName);

  const [_5_PackageName, set_5_PackageName] = useState(DefaultPackageName);
  const [_6_PackageName, set_6_PackageName] = useState(DefaultPackageName);
  const [_7_PackageName, set_7_PackageName] = useState(DefaultPackageName);
  const [_8_PackageName, set_8_PackageName] = useState(DefaultPackageName);
  const [_9_PackageName, set_9_PackageName] = useState(DefaultPackageName);

  //  CustomerName Set
  const [_0_CustomerName, set_0_CustomerName] = useState("");
  const [_1_CustomerName, set_1_CustomerName] = useState("");
  const [_2_CustomerName, set_2_CustomerName] = useState("");
  const [_3_CustomerName, set_3_CustomerName] = useState("");
  const [_4_CustomerName, set_4_CustomerName] = useState("");

  const [_5_CustomerName, set_5_CustomerName] = useState("");
  const [_6_CustomerName, set_6_CustomerName] = useState("");
  const [_7_CustomerName, set_7_CustomerName] = useState("");
  const [_8_CustomerName, set_8_CustomerName] = useState("");
  const [_9_CustomerName, set_9_CustomerName] = useState("");

  //  Customer Contact Set
  const [_0_CustomerContact, set_0_CustomerContact] = useState("");
  const [_1_CustomerContact, set_1_CustomerContact] = useState("");
  const [_2_CustomerContact, set_2_CustomerContact] = useState("");
  const [_3_CustomerContact, set_3_CustomerContact] = useState("");
  const [_4_CustomerContact, set_4_CustomerContact] = useState("");

  const [_5_CustomerContact, set_5_CustomerContact] = useState("");
  const [_6_CustomerContact, set_6_CustomerContact] = useState("");
  const [_7_CustomerContact, set_7_CustomerContact] = useState("");
  const [_8_CustomerContact, set_8_CustomerContact] = useState("");
  const [_9_CustomerContact, set_9_CustomerContact] = useState("");

  //  Customer Address Set
  const [_0_CustomerAddress, set_0_CustomerAddress] = useState("");
  const [_1_CustomerAddress, set_1_CustomerAddress] = useState("");
  const [_2_CustomerAddress, set_2_CustomerAddress] = useState("");
  const [_3_CustomerAddress, set_3_CustomerAddress] = useState("");
  const [_4_CustomerAddress, set_4_CustomerAddress] = useState("");

  const [_5_CustomerAddress, set_5_CustomerAddress] = useState("");
  const [_6_CustomerAddress, set_6_CustomerAddress] = useState("");
  const [_7_CustomerAddress, set_7_CustomerAddress] = useState("");
  const [_8_CustomerAddress, set_8_CustomerAddress] = useState("");
  const [_9_CustomerAddress, set_9_CustomerAddress] = useState("");

  //  Customer Email Set
  const [_0_CustomerEmail, set_0_CustomerEmail] = useState("");
  const [_1_CustomerEmail, set_1_CustomerEmail] = useState("");
  const [_2_CustomerEmail, set_2_CustomerEmail] = useState("");
  const [_3_CustomerEmail, set_3_CustomerEmail] = useState("");
  const [_4_CustomerEmail, set_4_CustomerEmail] = useState("");

  const [_5_CustomerEmail, set_5_CustomerEmail] = useState("");
  const [_6_CustomerEmail, set_6_CustomerEmail] = useState("");
  const [_7_CustomerEmail, set_7_CustomerEmail] = useState("");
  const [_8_CustomerEmail, set_8_CustomerEmail] = useState("");
  const [_9_CustomerEmail, set_9_CustomerEmail] = useState("");

  //  PaymentType Set
  const [_0_PaymentType, set_0_PaymentType] = useState(DefaultPaymentMethod);
  const [_1_PaymentType, set_1_PaymentType] = useState(DefaultPaymentMethod);
  const [_2_PaymentType, set_2_PaymentType] = useState(DefaultPaymentMethod);
  const [_3_PaymentType, set_3_PaymentType] = useState(DefaultPaymentMethod);
  const [_4_PaymentType, set_4_PaymentType] = useState(DefaultPaymentMethod);

  const [_5_PaymentType, set_5_PaymentType] = useState(DefaultPaymentMethod);
  const [_6_PaymentType, set_6_PaymentType] = useState(DefaultPaymentMethod);
  const [_7_PaymentType, set_7_PaymentType] = useState(DefaultPaymentMethod);
  const [_8_PaymentType, set_8_PaymentType] = useState(DefaultPaymentMethod);
  const [_9_PaymentType, set_9_PaymentType] = useState(DefaultPaymentMethod);

  //  PackageCost Set
  const [_0_PackageCost, set_0_PackageCost] = useState(0);
  const [_1_PackageCost, set_1_PackageCost] = useState(0);
  const [_2_PackageCost, set_2_PackageCost] = useState(0);
  const [_3_PackageCost, set_3_PackageCost] = useState(0);
  const [_4_PackageCost, set_4_PackageCost] = useState(0);

  const [_5_PackageCost, set_5_PackageCost] = useState(0);
  const [_6_PackageCost, set_6_PackageCost] = useState(0);
  const [_7_PackageCost, set_7_PackageCost] = useState(0);
  const [_8_PackageCost, set_8_PackageCost] = useState(0);
  const [_9_PackageCost, set_9_PackageCost] = useState(0);


  //  Cost With Delivery Set
  const [_0_PackageCostWithDelivery, set_0_PackageCostWithDelivery] = useState(SinlgeDeliveryCost);
  const [_1_PackageCostWithDelivery, set_1_PackageCostWithDelivery] = useState(SinlgeDeliveryCost);
  const [_2_PackageCostWithDelivery, set_2_PackageCostWithDelivery] = useState(SinlgeDeliveryCost);
  const [_3_PackageCostWithDelivery, set_3_PackageCostWithDelivery] = useState(SinlgeDeliveryCost);
  const [_4_PackageCostWithDelivery, set_4_PackageCostWithDelivery] = useState(SinlgeDeliveryCost);

  

  
  

  
  let MaxPackages = quantityCount;
  
    for(let i=0; i<MaxPackages; i++){
      Packages[i] = Package_Scheme;
    }


    /*
    console.log("-- 2s");
    console.log(_0_CustomerName);
    console.log(_1_CustomerName);

    console.log(Packages[0].CustomerName);
    console.log(Packages[1].CustomerName);

    
    Package_0.CustomerName = "A";




    Package_1.CustomerName = "B";




    All_Packages = [];
    All_Packages.push(Package_0);
    All_Packages.push(Package_1);
    All_Packages.push(Package_2);
    All_Packages.push(Package_3);
    All_Packages.push(Package_4);
    All_Packages.push(Package_5);
    All_Packages.push(Package_6);
    All_Packages.push(Package_7);
    All_Packages.push(Package_8);
    All_Packages.push(Package_9);

    //  Add Merchant too all packages in list
    for(let i=0; i<MaxPackages; i++){
      All_Packages[i].MerchantName = "_0_MerchantName";
      All_Packages[i].MerchantContact = _0_MerchantContact;
      All_Packages[i].MerchantEmail = _0_MerchantEmail;
      All_Packages[i].MerchantAddress = _0_MerchantAddress;
      All_Packages[i].MerchantCity = _0_MerchantCity;

      All_Packages[i].Stage = "Requesting";
    }


    console.log(All_Packages);
    */




    





    if(product.category.service != undefined){
      //console.log("h");
    }

    function updateCosts(set,setWithDelivery,value){
      set(Number(value).toString());
      setWithDelivery(+value+SinlgeDeliveryCost);
      //console.log("costwithW: "+ (+value+SinlgeDeliveryCost) );
    }
  

  function addToCart_Pre(){
    if(!product.multistop){
      addToCart(
        product,
        addToast,
        quantityCount,
        selectedProductColor,
        selectedProductSize
      )
      return <></>;
    }

    // Add Packages
    Package_0.CustomerName = _0_CustomerName;
    Package_0.PackageName = _0_PackageName;
    Package_0.CustomerEmail = _0_CustomerEmail;
    Package_0.CustomerContact = _0_CustomerContact;
    Package_0.CustomerAddress = _0_CustomerAddress;
    Package_0.PackageCost = parseInt(_0_PackageCost).toFixed(2);
    Package_0.PaymentType = _0_PaymentType;

    if(Packages.length > 1){
      Package_1.CustomerName = _1_CustomerName;
      Package_1.PackageName = _1_PackageName;
      Package_1.CustomerEmail = _1_CustomerEmail;
      Package_1.CustomerContact = _1_CustomerContact;
      Package_1.CustomerAddress = _1_CustomerAddress;
      Package_1.PackageCost = parseInt(_1_PackageCost).toFixed(2);
      Package_1.PaymentType = _1_PaymentType;
    }
    

    if(Packages.length > 2){
      Package_2.CustomerName = _2_CustomerName;
      Package_2.PackageName = _2_PackageName;
      Package_2.CustomerEmail = _2_CustomerEmail;
      Package_2.CustomerContact = _2_CustomerContact;
      Package_2.CustomerAddress = _2_CustomerAddress;
      Package_2.PackageCost = parseInt(_2_PackageCost).toFixed(2);
      Package_2.PaymentType = _2_PaymentType;
    }
    if(Packages.length > 3){
      Package_3.CustomerName = _3_CustomerName;
      Package_3.PackageName = _3_PackageName;
      Package_3.CustomerEmail = _3_CustomerEmail;
      Package_3.CustomerContact = _3_CustomerContact;
      Package_3.CustomerAddress = _3_CustomerAddress;
      Package_3.PackageCost = parseInt(_3_PackageCost).toFixed(2);
      Package_3.PaymentType = _3_PaymentType;
    }
    if(Packages.length > 4){
      Package_4.CustomerName = _4_CustomerName;
      Package_4.PackageName = _4_PackageName;
      Package_4.CustomerEmail = _4_CustomerEmail;
      Package_4.CustomerContact = _4_CustomerContact;
      Package_4.CustomerAddress = _4_CustomerAddress;
      Package_4.PackageCost = parseInt(_4_PackageCost).toFixed(2);
      Package_4.PaymentType = _4_PaymentType;
    }
    if(Packages.length > 5){
      Package_5.CustomerName = _5_CustomerName;
      Package_5.PackageName = _5_PackageName;
      Package_5.CustomerEmail = _5_CustomerEmail;
      Package_5.CustomerContact = _5_CustomerContact;
      Package_5.CustomerAddress = _5_CustomerAddress;
      Package_5.PackageCost = parseInt(_5_PackageCost).toFixed(2);
      Package_5.PaymentType = _5_PaymentType;
    }
    if(Packages.length > 6){
      Package_6.CustomerName = _6_CustomerName;
      Package_6.PackageName = _6_PackageName;
      Package_6.CustomerEmail = _6_CustomerEmail;
      Package_6.CustomerContact = _6_CustomerContact;
      Package_6.CustomerAddress = _6_CustomerAddress;
      Package_6.PackageCost = parseInt(_6_PackageCost).toFixed(2);
      Package_6.PaymentType = _6_PaymentType;
    }
    if(Packages.length > 7){
      Package_7.CustomerName = _7_CustomerName;
      Package_7.PackageName = _7_PackageName;
      Package_7.CustomerEmail = _7_CustomerEmail;
      Package_7.CustomerContact = _7_CustomerContact;
      Package_7.CustomerAddress = _7_CustomerAddress;
      Package_7.PackageCost = parseInt(_7_PackageCost).toFixed(2);
      Package_7.PaymentType = _7_PaymentType;
    }
    if(Packages.length > 8){
      Package_8.CustomerName = _8_CustomerName;
      Package_8.PackageName = _8_PackageName;
      Package_8.CustomerEmail = _8_CustomerEmail;
      Package_8.CustomerContact = _8_CustomerContact;
      Package_8.CustomerAddress = _8_CustomerAddress;
      Package_8.PackageCost = parseInt(_8_PackageCost).toFixed(2);
      Package_8.PaymentType = _8_PaymentType;
    }
    if(Packages.length > 9){
      Package_9.CustomerName = _9_CustomerName;
      Package_9.PackageName = _9_PackageName;
      Package_9.CustomerEmail = _9_CustomerEmail;
      Package_9.CustomerContact = _9_CustomerContact;
      Package_9.CustomerAddress = _9_CustomerAddress;
      Package_9.PackageCost = parseInt(_9_PackageCost).toFixed(2);
      Package_9.PaymentType = _9_PaymentType;
    }

    //console.log(Packages[0].CustomerName);


//////////////////////////////////////////////////////////////////
    //Package_0.CustomerName = "A";




    //Package_1.CustomerName = "B";




    All_Packages = [];
    All_Packages.push(Package_0);
    All_Packages.push(Package_1);
    All_Packages.push(Package_2);
    All_Packages.push(Package_3);
    All_Packages.push(Package_4);
    All_Packages.push(Package_5);
    All_Packages.push(Package_6);
    All_Packages.push(Package_7);
    All_Packages.push(Package_8);
    All_Packages.push(Package_9);

    //  Add Merchant too all packages in list
    for(let i=0; i<MaxPackages; i++){
      All_Packages[i].MerchantName = _0_MerchantName;
      All_Packages[i].MerchantContact = _0_MerchantContact;
      All_Packages[i].MerchantEmail = _0_MerchantEmail;
      All_Packages[i].MerchantAddress = _0_MerchantAddress;
      All_Packages[i].MerchantCity = _0_MerchantCity;

      All_Packages[i].Stage = "Requesting";
    }

    Packages = [];
    for(let i=0; i<MaxPackages; i++){
      Packages[i] = All_Packages[i];
    }
    console.log(All_Packages);
    console.log(Packages);

    //return;
//////////////////////////////////////////////////////////////////




    /*
    //  Add Merchant too all packages in list
    for(let i=0; i<MaxPackages; i++){
      Packages[i].MerchantName = _0_MerchantName;
      Packages[i].MerchantContact = _0_MerchantContact;
      Packages[i].MerchantEmail = _0_MerchantEmail;
      Packages[i].MerchantAddress = _0_MerchantAddress;
      Packages[i].MerchantCity = _0_MerchantCity;

      Packages[i].Stage = "Requesting";
    }
    */

    let Firstname_temp = _0_MerchantName;
    Firstname_temp = _0_MerchantName.substr(0,_0_MerchantName.indexOf(' '));
    let Lastname_temp = _0_MerchantName.substr(_0_MerchantName.indexOf(' ')+1);
    if(Firstname_temp == undefined) Firstname_temp = "";
    if(Lastname_temp == undefined) Lastname_temp = "";
    let Email_temp = _0_MerchantEmail;
    let Contact_temp = _0_MerchantContact;
    let Address_temp = _0_MerchantAddress;
    let City_temp = _0_MerchantCity;


    cookies.set('email',Email_temp, { path: './' });
    cookies.set('firstname',Firstname_temp, { path: './' });
    cookies.set('lastname',Lastname_temp, { path: './' });
    cookies.set('contact',Contact_temp, { path: './' });
    cookies.set('cisy',City_temp, { path: './' });

   
    //console.log(Packages);
    //console.log(Packages[0]);
    //console.log(Packages.length);


    //return;

    //  validate 
    let PackageCostMin = 30;
    let IsFieldsEmpty = true;
      let IsPackageOverCostMin = true;
    for(let i=0; i<MaxPackages; i++){
      if(Packages[i].CustomerName == "") IsFieldsEmpty = false;
      if(Packages[i].PackageName == "") IsFieldsEmpty = false;
      //if(Packages[i].CustomerEmail == "") IsFieldsEmpty = false;
      if(Packages[i].CustomerContact == "") IsFieldsEmpty = false;
      if(Packages[i].PaymentType == "") IsFieldsEmpty = false ;
      if(Packages[i].PackageCost === "") IsFieldsEmpty = false;
      if(Packages[i].PackageCost < PackageCostMin || Packages[i].PaymentType == "None") IsPackageOverCostMin = false;
      if(Packages[i].MerchantName == "") IsFieldsEmpty = false;
      if(Packages[i].MerchantContactNumber == "") IsFieldsEmpty = false;
      if(Packages[i].MerchantEmail == "") IsFieldsEmpty = false;
      if(Packages[i].MerchantAddress == "") IsFieldsEmpty = false;
      if(Packages[i].MerchantCity == "") IsFieldsEmpty = false;
    }

    
    if(!IsFieldsEmpty){
      //console.log(Packages[i].PackageName);
      //  Packages Missing info
      addToast("Please fill out all fields", { appearance: "warning", autoDismiss: true });
      return;
    }

    
    //  function addData(Email, firstname, lastname, address, contact){

   //console.log()
    //  Package Cost too low
    if(!IsPackageOverCostMin){
      addToast("Minimum package cost is $60.00", { appearance: "warning", autoDismiss: true });
      return;
    }
    
    let TotalPackageCost = 0;
    let DeliveryCost = SinlgeDeliveryCost * MaxPackages;
    for(let i=0; i<MaxPackages; i++){
      
    }

    //  Set Delivery user
    let orderData = {
      MerchantId: user_GrekoAPI_UserId,
      Email: "info@udlvr.com",
      Firstname: "UDLVR",
      Lastname: "Ltd",
      Contact: "+1 (868) 770-4246",
      Address: "#230 Eastern Main Road, El Dorado, Saint George",
      Cost: 0,
      Packages: Packages
    };


    //PackageScheme.CustomerName = 
    console.log(orderData);
    console.log( JSON.stringify(orderData) );

  

    //login(user_Email);
    if(IsLoggedIn) addToast("Request Sent", { appearance: "success", autoDismiss: true });

    if(IsLoggedIn){
      addToast("Your delivery request was sent, you will be contacted shortly", { appearance: "success", autoDismiss: false });

    }


    createOrder(user_GrekoAPI_UserId, user_Email, orderData);
    
    
    return;

    //let PackagesStored = cookies.get('packages');

    //return;
    console.log("PackagesStored");
    console.log(PackagesStored);
    if(PackagesStored.length > 0){
      addToast("You already have a delivery in your cart", { appearance: "warning", autoDismiss: true });
      return;
    } 

    //return;

    addToCart(
      product,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    )
    
  }

  
  console.log("LoggedIn: "+ IsLoggedIn);
  console.log("Email: "+ user_Email);
  console.log("GrekoAPI_UserId: "+ user_GrekoAPI_UserId);

  //  Greko API
  function addData(Email, firstname, lastname, address, contact){
    let data = {
      email: Email,
      firstname: firstname,
      lastname: lastname,
      address: address,
      contact: contact,
    };
    console.log("email:"+Email);
    fetch("https://greko-api-dev.herokuapp.com/user/update",
    {
        headers: {
          'Content-Type': 'application/json',
        },
    })
    .then(data => data.json())
    .then(function(info){ GrekoAPI_handler(info) })
    .catch(function(info){ GrekoAPI_ErrorHandler(info) })
  }
  

  
  function GrekoAPI_ErrorHandler(info){
    console.log("ERROR");
    console.log(info);
    console.log(info.message);
    //console.log(info.status);

    //  already exist
    if(info.status == 2424){

    }
  }
  function GrekoAPI_handler(info){
    console.log("SUCCESS");
    console.log(info);
  }

  function createOrder(user_GrekoAPI_UserId, user_Email, orderData){
    const data = orderData;
    const email = user_Email;
    const _id = user_GrekoAPI_UserId;

    console.log("createOrder_");
    console.log(data);
    fetch("https://greko-api-dev.herokuapp.com/order/create",//?_id="+ user_GrekoAPI_UserId +"&email="+ user_Email,
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    })
    .then(data => data.json())
    .then(function(info){ createOrder_handler(info) })
    .catch(function(info){ console.log(info) })
  }

  function createOrder_handler(info){
    console.log("SUCCESS");
    console.log(info);

    //  PackageName Set
    set_0_PackageName("");
    set_1_PackageName("");
    set_2_PackageName("");
    set_3_PackageName("");
    set_4_PackageName("");

    set_5_PackageName("");
    set_6_PackageName("");
    set_7_PackageName("");
    set_8_PackageName("");
    set_9_PackageName("");

    //  CustomerName Set
    set_0_CustomerName("");
    set_1_CustomerName("");
    set_2_CustomerName("");
    set_3_CustomerName("");
    set_4_CustomerName("");

    set_5_CustomerName("");
    set_6_CustomerName("");
    set_7_CustomerName("");
    set_8_CustomerName("");
    set_9_CustomerName("");

    //  Customer Contact Set
    set_0_CustomerContact("");
    set_1_CustomerContact("");
    set_2_CustomerContact("");
    set_3_CustomerContact("");
    set_4_CustomerContact("");

    set_5_CustomerContact("");
    set_6_CustomerContact("");
    set_7_CustomerContact("");
    set_8_CustomerContact("");
    set_9_CustomerContact("");

    //  Customer Address Set
    set_0_CustomerAddress("");
    set_1_CustomerAddress("");
    set_2_CustomerAddress("");
    set_3_CustomerAddress("");
    set_4_CustomerAddress("");

    set_5_CustomerAddress("");
    set_6_CustomerAddress("");
    set_7_CustomerAddress("");
    set_8_CustomerAddress("");
    set_9_CustomerAddress("");

    //  Customer Email Set
    set_0_CustomerEmail("");
    set_1_CustomerEmail("");
    set_2_CustomerEmail("");
    set_3_CustomerEmail("");
    set_4_CustomerEmail("");

    set_5_CustomerEmail("");
    set_6_CustomerEmail("");
    set_7_CustomerEmail("");
    set_8_CustomerEmail("");
    set_9_CustomerEmail("");

    //  PaymentType Set
    set_0_PaymentType(DefaultPaymentMethod);
    set_1_PaymentType(DefaultPaymentMethod);
    set_2_PaymentType(DefaultPaymentMethod);
    set_3_PaymentType(DefaultPaymentMethod);
    set_4_PaymentType(DefaultPaymentMethod);

    set_5_PaymentType(DefaultPaymentMethod);
    set_6_PaymentType(DefaultPaymentMethod);
    set_7_PaymentType(DefaultPaymentMethod);
    set_8_PaymentType(DefaultPaymentMethod);
    set_9_PaymentType(DefaultPaymentMethod);

    //  PackageCost Set
    set_0_PackageCost(0);
    set_1_PackageCost(0);
    set_2_PackageCost(0);
    set_3_PackageCost(0);
    set_4_PackageCost(0);

    set_5_PackageCost(0);
    set_6_PackageCost(0);
    set_7_PackageCost(0);
    set_8_PackageCost(0);
    set_9_PackageCost(0);

    //  Cost With Delivery Set
    set_0_PackageCostWithDelivery(SinlgeDeliveryCost);
    set_1_PackageCostWithDelivery(SinlgeDeliveryCost);
    set_2_PackageCostWithDelivery(SinlgeDeliveryCost);
    set_3_PackageCostWithDelivery(SinlgeDeliveryCost);
    set_4_PackageCostWithDelivery(SinlgeDeliveryCost);
  }

  let IsPartner = false;
  const Partners = [
    "udlvr.com",
    "supibox.com",
    "aegeantt.com"
  ];

  
  let email = user_Email + "";
  console.log("email_");
  console.log(email);
  let NameAndDomain = email.split("@");
  let domain = NameAndDomain[1];


  IsPartner = Partners.includes(domain);

  console.log(domain);

  console.log("Is Partner?");
  console.log(IsPartner);


  if(IsPartner){

  } 
  
  return (

    
    <div className="product-content">
      {product.rating && product.rating > 0 ? (
        <div className="product-content__rating-wrap d-block d-sm-flex space-mb--20">
          <div className="product-content__rating space-mr--20">
            <ProductRating ratingValue={product.rating} />
          </div>
          <div className="product-content__rating-count">
            <a href="#">( {product.ratingCount} customer reviews )</a>
          </div>
        </div>
      ) : (
        ""
      )}
      <h2 className="product-content__title space-mb--20">{product.name}</h2>
      <div className="product-content__price space-mb--20">
        {product.discount > 0 ? (
          <Fragment>
            <span className="main-price discounted">${productPrice}</span>
            <span className="main-price">${discountedPrice}</span>
          </Fragment>
        ) : (
          <>

          <span className="main-price">{IsPartner ? "[Contact for Price]" : "$"+ productPrice } </span>
          </>
        )}
      </div>
      <div className="product-content__description space-mb--30">
        <p>{product.shortDescription}</p>
      </div>

      {product.variation ? (
        <div className="product-content__size-color">
          <div className="product-content__size space-mb--20">
            <div className="product-content__size__title">Size</div>
            <div className="product-content__size__content">
              {product.variation &&
                product.variation.map((single) => {
                  return single.color === selectedProductColor
                    ? single.size.map((singleSize, i) => {
                        return (
                          <Fragment key={i}>
                            <input
                              type="radio"
                              value={singleSize.name}
                              checked={
                                singleSize.name === selectedProductSize
                                  ? "checked"
                                  : ""
                              }
                              id={singleSize.name}
                              onChange={() => {
                                setSelectedProductSize(singleSize.name);
                                setProductStock(singleSize.stock);
                                setQuantityCount(1);
                              }}
                            />
                            <label htmlFor={singleSize.name}>
                              {singleSize.name}
                            </label>
                          </Fragment>
                        );
                      })
                    : "";
                })}
            </div>
          </div>
          <div className="product-content__color space-mb--20">
            <div className="product-content__color__title">Color</div>
            <div className="product-content__color__content">
              {product.variation.map((single, i) => {
                
                return (
                  <Fragment key={i}>
                    <input
                      type="radio"
                      value={single.color}
                      name="product-color"
                      id={single.color}
                      checked={
                        single.color === selectedProductColor ? "checked" : ""
                      }
                      onChange={() => {
                        setSelectedProductColor(single.color);
                        setSelectedProductSize(single.size[0].name);
                        setProductStock(single.size[0].stock);
                        setQuantityCount(1);
                      }}
                    />
                    <label
                      htmlFor={single.color}
                      style={{ backgroundColor: single.colorCode }}
                    ></label>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {product.affiliateLink ? (
        <div className="product-content__quality">
          <div className="product-content__cart btn-hover">
            <a
              href={product.affiliateLink}
              rel="noopener noreferrer"
              target="_blank"
              className="lezada-button lezada-button--medium"
            >
              Buy Now
            </a>
          </div>
        </div>
      ) : (
        <Fragment>
          <div className="product-content__quantity space-mb--40" style={{display: "block"}}>
            <div className="product-content__quantity__title">{product.multistop ? "Pickup Location" : ""}</div>
            <div className="product-content__button-wrapper " style={{position: "relative", maxHeight: "500px", overflow: "auto", marginBottom: "50px"}}>
              <br></br>
              <div style={dropoffAddress} >
                <h6>Account Information </h6><br></br>
                <div className="DropoffField" >
                  <div className="DropoffSplit" >
                    <div className="DropoffField_Split">
                      <label>Your Name*</label>
                      <input style={dropoffinputStyle} type="text" name={"firstname"} placeholder="Eg. Supibox" 
                        value={_0_MerchantName} onChange={(e) => set_0_MerchantName(e.target.value)}
                      />
                    </div>
                    <div className="DropoffField_Split">
                      <label>Your Contact*</label>
                      <input style={dropoffinputStyle} type="text" name={"contact"} placeholder="Eg. +1 (868) 770-4246" 
                        value={_0_MerchantContact} onChange={(e) => set_0_MerchantContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Your Email*</label>
                    <input disabled style={dropoffinputStyle} type="text" name={"email"} placeholder="Eg. info@supibox.com" autoComplete="off"
                      value={user_Email} onChange={(e) => userEmailChanged(e)}
                    />
                  </div>
                  <div className="DropoffSplit" >
                    <div className="DropoffField_Split">
                      <label>Your Address*</label>
                      <input style={dropoffinputStyle} type="text" name={"address"} placeholder="Eg. 130 Eastern main rd, El Dorado"
                        value={_0_MerchantAddress} onChange={(e) => set_0_MerchantAddress(e.target.value)}
                      />
                    </div>

                    <div className="DropoffField_Split">
                      <label>Your City*</label>
                      <input style={dropoffinputStyle} type="text" name={"city"} placeholder="Eg. Arima"
                        value={_0_MerchantCity} onChange={(e) => set_0_MerchantCity(e.target.value)}
                      />
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          


          

          <div className="product-content__quantity space-mb--40">
            <div className="product-content__quantity__title">{product.multistop ? "Dropoff Points" : "Quantity"}</div>
            <div className="cart-plus-minus">
              <button
                onClick={() =>
                  setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                }
                className="qtybutton"
              >
                -
              </button>
              <input
                className="cart-plus-minus-box"
                type="text"
                value={quantityCount}
                readOnly
              />
              <button
                onClick={() =>
                  setQuantityCount(
                    quantityCount < productStock - productCartQty
                      ? quantityCount + 1
                      : quantityCount
                  )
                }
                className="qtybutton"
              >
                +
              </button>
            </div>

          </div>

          <div className="product-content__button-wrapper " style={{position: "relative", maxHeight: "500px", overflow: "auto", marginBottom: "50px"}}>
              
              
              {product.multistop && Packages.map(function(item, count) {
                

                 if(count == 0) return <div style={dropoffAddress} key={"dropoffKey_"+count}>
                  <h6>Package Information #{count+1}</h6><br></br>
                  
                  <div style={dropofffieldStyle} style={{display: "none"}}>
                    <label>Package Name*</label>
                    <input style={dropoffinputStyle} type="text" name={"pn"+count} placeholder="Eg. Supibox Delivery"
                      value={_0_PackageName} 
                      onChange={(e) => set_0_PackageName(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Name*</label>
                      <input style={dropoffinputStyle} key={"cn"+count} type="text" name={"CustomerNameDA_"+count} placeholder="Eg. Jacob Felix" 
                        value={_0_CustomerName} onChange={(e) => set_0_CustomerName(e.target.value)}
                      />
                    </div>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Contact*</label>
                      <input style={dropoffinputStyle} type="text" name={"cp"+count} placeholder="Eg. 717-3110" 
                        value={_0_CustomerContact} onChange={(e) => set_0_CustomerContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Address*</label>
                    <input style={dropoffinputStyle} type="text" name={"ca"+count} placeholder="Eg. 130 Eastern main rd, El Dorado"
                      value={_0_CustomerAddress} 
                      onChange={(e) => set_0_CustomerAddress(e.target.value) }
                    />
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Email (Optional)</label>
                    <input style={dropoffinputStyle} type="text" name={"ce"+count} placeholder="Eg. jeremiahv8@hotmail.com"
                      value={_0_CustomerEmail}
                      //value={"i Package"} 
                      onChange={(e) => set_0_CustomerEmail(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <div className="col-md-12 col-12 space-mb--20">
                          <label>Payment Service*</label>
                          <select style={PaymentTypeStyle} value={_0_PaymentType} onChange={(e) => set_0_PaymentType(e.target.value)} name={"PaymentMethodDA_"+count}>
                            <option onChange={(e) => set_0_PaymentType("None")}>{"None"}</option>
                            <option onChange={(e) => set_0_PaymentType("Cash on Delivery")}>{"Cash on Delivery"}</option>
                            <option onChange={(e) => set_0_PaymentType("Online")}>{"Online"}</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 space-mb--20">
                        <label>Package Cost</label> 
                        <input style={dropoffinputStyle} placeholder="Eg. $340,60" type="number" name={"cost"+count}
                          value={_0_PackageCost} onChange={(e) => set_0_PackageCost(e.target.value)} 
                        />
                      </div>
                  </div>
                </div> 


                if(count == 1) return <div style={dropoffAddress} key={"dropoffKey_"+count}>
                <h6>Package Information #{count+1}</h6><br></br>
                <div style={dropofffieldStyle} style={{display: "none"}}>
                  <label>Package Name*</label>
                  <input style={dropoffinputStyle} type="text" name={"pn"+count} placeholder="Eg. Supibox Delivery"
                    value={_1_PackageName} onChange={(e) => set_1_PackageName(e.target.value)}
                  />
                </div>
                <div style={dropoffsplit}>
                  <div style={dropofffieldStyle_split}>
                    <label>Receiver's Name*</label>
                    <input style={dropoffinputStyle} key={"cn"+count} type="text" name={"CustomerNameDA_"+count} placeholder="Eg. Jacob Felix" 
                      value={_1_CustomerName} onChange={(e) => set_1_CustomerName(e.target.value)}
                    />
                  </div>
                  <div style={dropofffieldStyle_split}>
                    <label>Receiver's Contact*</label>
                    <input style={dropoffinputStyle} type="text" name={"cp"+count} placeholder="Eg. 717-3110" 
                      value={_1_CustomerContact} onChange={(e) => set_1_CustomerContact(e.target.value)}
                    />
                  </div>
                </div>
                <div style={dropofffieldStyle}>
                  <label>Receiver's Address*</label>
                  <input style={dropoffinputStyle} type="text" name={"ca"+count} placeholder="Eg. 130 Eastern main rd, El Dorado"
                    value={_1_CustomerAddress} onChange={(e) => set_1_CustomerAddress(e.target.value)}
                  />
                </div>
                <div style={dropofffieldStyle}>
                  <label>Receiver's Email*</label>
                  <input style={dropoffinputStyle} type="text" name={"ce"+count} placeholder="Eg. jeremiahv8@hotmail.com"
                    value={_1_CustomerEmail} onChange={(e) => set_1_CustomerEmail(e.target.value)}
                  />
                </div>
                <div style={dropoffsplit}>
                  <div style={dropofffieldStyle_split}>
                    <div className="col-md-12 col-12 space-mb--20">
                        <label>Payment Method*</label>
                        <select style={PaymentTypeStyle} value={_1_PaymentType} onChange={(e) => set_1_PaymentType(e.target.value)} name={"PaymentMethodDA_"+count}>
                          <option onChange={(e) => set_1_PaymentType("None")}>{"None"}</option>
                          <option onChange={(e) => set_1_PaymentType("Cash on Delivery")}>{"Cash on Delivery"}</option>
                          <option onChange={(e) => set_1_PaymentType("Online")}>{"Online"}</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 space-mb--20">
                      <label>Package Cost</label> 
                      <input style={dropoffinputStyle} placeholder="Eg. $340,60" type="number" name={"cost"+count}
                        value={_1_PackageCost} onChange={(e) => set_1_PackageCost(e.target.value)} 
                      />
                    </div>
                  </div>
                </div> 

                if(count == 2) return <div style={dropoffAddress} key={"dropoffKey_"+count}>
                  <h6>Package Information #{count+1}</h6><br></br>
                  
                  <div style={dropofffieldStyle} style={{display: "none"}}>
                    <label>Package Name*</label>
                    <input style={dropoffinputStyle} type="text" name={"pn"+count} placeholder="Eg. Supibox Delivery"
                      value={_2_PackageName} 
                      onChange={(e) => set_2_PackageName(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Name*</label>
                      <input style={dropoffinputStyle} key={"cn"+count} type="text" name={"CustomerNameDA_"+count} placeholder="Eg. Jacob Felix" 
                        value={_2_CustomerName} onChange={(e) => set_2_CustomerName(e.target.value)}
                      />
                    </div>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Contact*</label>
                      <input style={dropoffinputStyle} type="text" name={"cp"+count} placeholder="Eg. 717-3110" 
                        value={_2_CustomerContact} onChange={(e) => set_2_CustomerContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Address*</label>
                    <input style={dropoffinputStyle} type="text" name={"ca"+count} placeholder="Eg. 130 Eastern main rd, El Dorado"
                      value={_2_CustomerAddress} 
                      onChange={(e) => set_2_CustomerAddress(e.target.value) }
                    />
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Email (Optional)</label>
                    <input style={dropoffinputStyle} type="text" name={"ce"+count} placeholder="Eg. jeremiahv8@hotmail.com"
                      value={_2_CustomerEmail}
                      //value={"i Package"} 
                      onChange={(e) => set_2_CustomerEmail(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <div className="col-md-12 col-12 space-mb--20">
                          <label>Payment Method*</label>
                          <select style={PaymentTypeStyle} value={_2_PaymentType} onChange={(e) => set_2_PaymentType(e.target.value)} name={"PaymentMethodDA_"+count}>
                            <option onChange={(e) => set_2_PaymentType("None")}>{"None"}</option>
                            <option onChange={(e) => set_2_PaymentType("Cash on Delivery")}>{"Cash on Delivery"}</option>
                            <option onChange={(e) => set_2_PaymentType("Online")}>{"Online"}</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 space-mb--20">
                        <label>Package Cost</label> 
                        <input style={dropoffinputStyle} placeholder="Eg. $340,60" type="number" name={"cost"+count}
                          value={_2_PackageCost} onChange={(e) => set_2_PackageCost(e.target.value)} 
                        />
                      </div>
                  </div>
                </div> 

                if(count == 3) return <div style={dropoffAddress} key={"dropoffKey_"+count}>
                  <h6>Package Information #{count+1}</h6><br></br>
                  
                  <div style={dropofffieldStyle} style={{display: "none"}}>
                    <label>Package Name*</label>
                    <input style={dropoffinputStyle} type="text" name={"pn"+count} placeholder="Eg. Supibox Delivery"
                      value={_3_PackageName} 
                      onChange={(e) => set_3_PackageName(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Name*</label>
                      <input style={dropoffinputStyle} key={"cn"+count} type="text" name={"CustomerNameDA_"+count} placeholder="Eg. Jacob Felix" 
                        value={_3_CustomerName} onChange={(e) => set_3_CustomerName(e.target.value)}
                      />
                    </div>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Contact*</label>
                      <input style={dropoffinputStyle} type="text" name={"cp"+count} placeholder="Eg. 717-3110" 
                        value={_3_CustomerContact} onChange={(e) => set_3_CustomerContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Address*</label>
                    <input style={dropoffinputStyle} type="text" name={"ca"+count} placeholder="Eg. 130 Eastern main rd, El Dorado"
                      value={_3_CustomerAddress} 
                      onChange={(e) => set_3_CustomerAddress(e.target.value) }
                    />
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Email (Optional)</label>
                    <input style={dropoffinputStyle} type="text" name={"ce"+count} placeholder="Eg. jeremiahv8@hotmail.com"
                      value={_3_CustomerEmail}
                      //value={"i Package"} 
                      onChange={(e) => set_3_CustomerEmail(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <div className="col-md-12 col-12 space-mb--20">
                          <label>Payment Method*</label>
                          <select style={PaymentTypeStyle} value={_3_PaymentType} onChange={(e) => set_3_PaymentType(e.target.value)} name={"PaymentMethodDA_"+count}>
                            <option onChange={(e) => set_3_PaymentType("None")}>{"None"}</option>
                            <option onChange={(e) => set_3_PaymentType("Cash on Delivery")}>{"Cash on Delivery"}</option>
                            <option onChange={(e) => set_3_PaymentType("Online")}>{"Online"}</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 space-mb--20">
                        <label>Package Cost</label> 
                        <input style={dropoffinputStyle} placeholder="Eg. $340,60" type="number" name={"cost"+count}
                          value={_3_PackageCost} onChange={(e) => set_3_PackageCost(e.target.value)} 
                        />
                      </div>
                  </div>
                </div> 



                if(count == 4) return <div style={dropoffAddress} key={"dropoffKey_"+count}>
                  <h6>Package Information #{count+1}</h6><br></br>

                  <div style={dropofffieldStyle} style={{display: "none"}}>
                    <label>Package Name*</label>
                    <input style={dropoffinputStyle} type="text" name={"pn"+count} placeholder="Eg. Supibox Delivery"
                      value={_4_PackageName} 
                      onChange={(e) => set_4_PackageName(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Name*</label>
                      <input style={dropoffinputStyle} key={"cn"+count} type="text" name={"CustomerNameDA_"+count} placeholder="Eg. Jacob Felix" 
                        value={_4_CustomerName} onChange={(e) => set_4_CustomerName(e.target.value)}
                      />
                    </div>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Contact*</label>
                      <input style={dropoffinputStyle} type="text" name={"cp"+count} placeholder="Eg. 717-3110" 
                        value={_4_CustomerContact} onChange={(e) => set_4_CustomerContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Address*</label>
                    <input style={dropoffinputStyle} type="text" name={"ca"+count} placeholder="Eg. 130 Eastern main rd, El Dorado"
                      value={_4_CustomerAddress} 
                      onChange={(e) => set_4_CustomerAddress(e.target.value) }
                    />
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Email (Optional)</label>
                    <input style={dropoffinputStyle} type="text" name={"ce"+count} placeholder="Eg. jeremiahv8@hotmail.com"
                      value={_4_CustomerEmail}
                      //value={"i Package"} 
                      onChange={(e) => set_4_CustomerEmail(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <div className="col-md-12 col-12 space-mb--20">
                          <label>Payment Service*</label>
                          <select style={PaymentTypeStyle} value={_4_PaymentType} onChange={(e) => set_4_PaymentType(e.target.value)} name={"PaymentMethodDA_"+count}>
                            <option onChange={(e) => set_4_PaymentType("None")}>{"None"}</option>
                            <option onChange={(e) => set_4_PaymentType("Cash on Delivery")}>{"Cash on Delivery"}</option>
                            <option onChange={(e) => set_4_PaymentType("Online")}>{"Online"}</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 space-mb--20">
                        <label>Package Cost</label> 
                        <input style={dropoffinputStyle} placeholder="Eg. $340,60" type="number" name={"cost"+count}
                          value={_4_PackageCost} onChange={(e) => set_4_PackageCost(e.target.value)} 
                        />
                      </div>
                  </div>
                </div> 

                if(count == 5) return <div style={dropoffAddress} key={"dropoffKey_"+count}>
                  <h6>Package Information #{count+1}</h6><br></br>

                  <div style={dropofffieldStyle} style={{display: "none"}}>
                    <label>Package Name*</label>
                    <input style={dropoffinputStyle} type="text" name={"pn"+count} placeholder="Eg. Supibox Delivery"
                      value={_5_PackageName} 
                      onChange={(e) => set_5_PackageName(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Name*</label>
                      <input style={dropoffinputStyle} key={"cn"+count} type="text" name={"CustomerNameDA_"+count} placeholder="Eg. Jacob Felix" 
                        value={_5_CustomerName} onChange={(e) => set_5_CustomerName(e.target.value)}
                      />
                    </div>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Contact*</label>
                      <input style={dropoffinputStyle} type="text" name={"cp"+count} placeholder="Eg. 717-3110" 
                        value={_5_CustomerContact} onChange={(e) => set_5_CustomerContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Address*</label>
                    <input style={dropoffinputStyle} type="text" name={"ca"+count} placeholder="Eg. 130 Eastern main rd, El Dorado"
                      value={_5_CustomerAddress} 
                      onChange={(e) => set_5_CustomerAddress(e.target.value) }
                    />
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Email (Optional)</label>
                    <input style={dropoffinputStyle} type="text" name={"ce"+count} placeholder="Eg. jeremiahv8@hotmail.com"
                      value={_5_CustomerEmail}
                      //value={"i Package"} 
                      onChange={(e) => set_5_CustomerEmail(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <div className="col-md-12 col-12 space-mb--20">
                          <label>Payment Service*</label>
                          <select style={PaymentTypeStyle} value={_5_PaymentType} onChange={(e) => set_5_PaymentType(e.target.value)} name={"PaymentMethodDA_"+count}>
                            <option onChange={(e) => set_5_PaymentType("None")}>{"None"}</option>
                            <option onChange={(e) => set_5_PaymentType("Cash on Delivery")}>{"Cash on Delivery"}</option>
                            <option onChange={(e) => set_5_PaymentType("Online")}>{"Online"}</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 space-mb--20">
                        <label>Package Cost</label> 
                        <input style={dropoffinputStyle} placeholder="Eg. $340,60" type="number" name={"cost"+count}
                          value={_5_PackageCost} onChange={(e) => set_5_PackageCost(e.target.value)} 
                        />
                      </div>
                  </div>
                </div> 

                if(count == 6) return <div style={dropoffAddress} key={"dropoffKey_"+count}>
                  <h6>Package Information #{count+1}</h6><br></br>

                  <div style={dropofffieldStyle} style={{display: "none"}}>
                    <label>Package Name*</label>
                    <input style={dropoffinputStyle} type="text" name={"pn"+count} placeholder="Eg. Supibox Delivery"
                      value={_6_PackageName} 
                      onChange={(e) => set_6_PackageName(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Name*</label>
                      <input style={dropoffinputStyle} key={"cn"+count} type="text" name={"CustomerNameDA_"+count} placeholder="Eg. Jacob Felix" 
                        value={_6_CustomerName} onChange={(e) => set_6_CustomerName(e.target.value)}
                      />
                    </div>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Contact*</label>
                      <input style={dropoffinputStyle} type="text" name={"cp"+count} placeholder="Eg. 717-3110" 
                        value={_6_CustomerContact} onChange={(e) => set_6_CustomerContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Address*</label>
                    <input style={dropoffinputStyle} type="text" name={"ca"+count} placeholder="Eg. 130 Eastern main rd, El Dorado"
                      value={_6_CustomerAddress} 
                      onChange={(e) => set_6_CustomerAddress(e.target.value) }
                    />
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Email (Optional)</label>
                    <input style={dropoffinputStyle} type="text" name={"ce"+count} placeholder="Eg. jeremiahv8@hotmail.com"
                      value={_6_CustomerEmail}
                      //value={"i Package"} 
                      onChange={(e) => set_6_CustomerEmail(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <div className="col-md-12 col-12 space-mb--20">
                          <label>Payment Service*</label>
                          <select style={PaymentTypeStyle} value={_6_PaymentType} onChange={(e) => set_6_PaymentType(e.target.value)} name={"PaymentMethodDA_"+count}>
                            <option onChange={(e) => set_6_PaymentType("None")}>{"None"}</option>
                            <option onChange={(e) => set_6_PaymentType("Cash on Delivery")}>{"Cash on Delivery"}</option>
                            <option onChange={(e) => set_6_PaymentType("Online")}>{"Online"}</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 space-mb--20">
                        <label>Package Cost</label> 
                        <input style={dropoffinputStyle} placeholder="Eg. $340,60" type="number" name={"cost"+count}
                          value={_6_PackageCost} onChange={(e) => set_6_PackageCost(e.target.value)} 
                        />
                      </div>
                  </div>
                </div> 


                if(count == 7) return <div style={dropoffAddress} key={"dropoffKey_"+count}>
                  <h6>Package Information #{count+1}</h6><br></br>

                  <div style={dropofffieldStyle} style={{display: "none"}}>
                    <label>Package Name*</label>
                    <input style={dropoffinputStyle} type="text" name={"pn"+count} placeholder="Eg. Supibox Delivery"
                      value={_7_PackageName} 
                      onChange={(e) => set_7_PackageName(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Name*</label>
                      <input style={dropoffinputStyle} key={"cn"+count} type="text" name={"CustomerNameDA_"+count} placeholder="Eg. Jacob Felix" 
                        value={_7_CustomerName} onChange={(e) => set_7_CustomerName(e.target.value)}
                      />
                    </div>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Contact*</label>
                      <input style={dropoffinputStyle} type="text" name={"cp"+count} placeholder="Eg. 717-3110" 
                        value={_7_CustomerContact} onChange={(e) => set_7_CustomerContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Address*</label>
                    <input style={dropoffinputStyle} type="text" name={"ca"+count} placeholder="Eg. 130 Eastern main rd, El Dorado"
                      value={_7_CustomerAddress} 
                      onChange={(e) => set_7_CustomerAddress(e.target.value) }
                    />
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Email (Optional)</label>
                    <input style={dropoffinputStyle} type="text" name={"ce"+count} placeholder="Eg. jeremiahv8@hotmail.com"
                      value={_7_CustomerEmail}
                      //value={"i Package"} 
                      onChange={(e) => set_7_CustomerEmail(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <div className="col-md-12 col-12 space-mb--20">
                          <label>Payment Service*</label>
                          <select style={PaymentTypeStyle} value={_7_PaymentType} onChange={(e) => set_7_PaymentType(e.target.value)} name={"PaymentMethodDA_"+count}>
                            <option onChange={(e) => set_7_PaymentType("None")}>{"None"}</option>
                            <option onChange={(e) => set_7_PaymentType("Cash on Delivery")}>{"Cash on Delivery"}</option>
                            <option onChange={(e) => set_7_PaymentType("Online")}>{"Online"}</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 space-mb--20">
                        <label>Package Cost</label> 
                        <input style={dropoffinputStyle} placeholder="Eg. $340,60" type="number" name={"cost"+count}
                          value={_7_PackageCost} onChange={(e) => set_7_PackageCost(e.target.value)} 
                        />
                      </div>
                  </div>
                </div> 


                if(count == 8) return <div style={dropoffAddress} key={"dropoffKey_"+count}>
                  <h6>Package Information #{count+1}</h6><br></br>

                  <div style={dropofffieldStyle} style={{display: "none"}}>
                    <label>Package Name*</label>
                    <input style={dropoffinputStyle} type="text" name={"pn"+count} placeholder="Eg. Supibox Delivery"
                      value={_8_PackageName} 
                      onChange={(e) => set_8_PackageName(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Name*</label>
                      <input style={dropoffinputStyle} key={"cn"+count} type="text" name={"CustomerNameDA_"+count} placeholder="Eg. Jacob Felix" 
                        value={_8_CustomerName} onChange={(e) => set_8_CustomerName(e.target.value)}
                      />
                    </div>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Contact*</label>
                      <input style={dropoffinputStyle} type="text" name={"cp"+count} placeholder="Eg. 717-3110" 
                        value={_8_CustomerContact} onChange={(e) => set_8_CustomerContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Address*</label>
                    <input style={dropoffinputStyle} type="text" name={"ca"+count} placeholder="Eg. 130 Eastern main rd, El Dorado"
                      value={_8_CustomerAddress} 
                      onChange={(e) => set_8_CustomerAddress(e.target.value) }
                    />
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Email (Optional)</label>
                    <input style={dropoffinputStyle} type="text" name={"ce"+count} placeholder="Eg. jeremiahv8@hotmail.com"
                      value={_8_CustomerEmail}
                      //value={"i Package"} 
                      onChange={(e) => set_8_CustomerEmail(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <div className="col-md-12 col-12 space-mb--20">
                          <label>Payment Service*</label>
                          <select style={PaymentTypeStyle} value={_8_PaymentType} onChange={(e) => set_8_PaymentType(e.target.value)} name={"PaymentMethodDA_"+count}>
                            <option onChange={(e) => set_8_PaymentType("None")}>{"None"}</option>
                            <option onChange={(e) => set_8_PaymentType("Cash on Delivery")}>{"Cash on Delivery"}</option>
                            <option onChange={(e) => set_8_PaymentType("Online")}>{"Online"}</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 space-mb--20">
                        <label>Package Cost</label> 
                        <input style={dropoffinputStyle} placeholder="Eg. $340,60" type="number" name={"cost"+count}
                          value={_8_PackageCost} onChange={(e) => set_8_PackageCost(e.target.value)} 
                        />
                      </div>
                  </div>
                </div> 
              
              
                if(count == 9) return <div style={dropoffAddress} key={"dropoffKey_"+count}>
                  <h6>Package Information #{count+1}</h6><br></br>

                  <div style={dropofffieldStyle} style={{display: "none"}}>
                    <label>Package Name*</label>
                    <input style={dropoffinputStyle} type="text" name={"pn"+count} placeholder="Eg. Supibox Delivery"
                      value={_9_PackageName} 
                      onChange={(e) => set_9_PackageName(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Name*</label>
                      <input style={dropoffinputStyle} key={"cn"+count} type="text" name={"CustomerNameDA_"+count} placeholder="Eg. Jacob Felix" 
                        value={_9_CustomerName} onChange={(e) => set_9_CustomerName(e.target.value)}
                      />
                    </div>
                    <div style={dropofffieldStyle_split}>
                      <label>Receiver's Contact*</label>
                      <input style={dropoffinputStyle} type="text" name={"cp"+count} placeholder="Eg. 717-3110" 
                        value={_9_CustomerContact} onChange={(e) => set_9_CustomerContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Address*</label>
                    <input style={dropoffinputStyle} type="text" name={"ca"+count} placeholder="Eg. 130 Eastern main rd, El Dorado"
                      value={_9_CustomerAddress} 
                      onChange={(e) => set_9_CustomerAddress(e.target.value) }
                    />
                  </div>
                  <div style={dropofffieldStyle}>
                    <label>Receiver's Email (Optional)</label>
                    <input style={dropoffinputStyle} type="text" name={"ce"+count} placeholder="Eg. jeremiahv8@hotmail.com"
                      value={_9_CustomerEmail}
                      //value={"i Package"} 
                      onChange={(e) => set_9_CustomerEmail(e.target.value)}
                    />
                  </div>
                  <div style={dropoffsplit}>
                    <div style={dropofffieldStyle_split}>
                      <div className="col-md-12 col-12 space-mb--20">
                          <label>Payment Service*</label>
                          <select style={PaymentTypeStyle} value={_9_PaymentType} onChange={(e) => set_9_PaymentType(e.target.value)} name={"PaymentMethodDA_"+count}>
                            <option onChange={(e) => set_9_PaymentType("None")}>{"None"}</option>
                            <option onChange={(e) => set_9_PaymentType("Cash on Delivery")}>{"Cash on Delivery"}</option>
                            <option onChange={(e) => set_9_PaymentType("Online")}>{"Online"}</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 space-mb--20">
                        <label>Package Cost</label> 
                        <input style={dropoffinputStyle} placeholder="Eg. $340,60" type="number" name={"cost"+count}
                          value={_9_PackageCost} onChange={(e) => set_9_PackageCost(e.target.value)} 
                        />
                      </div>
                  </div>
                </div> 
                
              
              
              })}
          </div>



          <div className="product-content__button-wrapper d-flex align-items-center">
          
            <div className="product-content__button-wrapper d-flex align-items-center">
              <button
                onClick={() =>
                  addToCart_Pre()
                }
                disabled={productCartQty >= productStock}
                className="lezada-button lezada-button--medium product-content__cart space-mr--10"
              >
                {IsService ? "Add To Cart" : "Request"}
              </button>
            </div>
          

            

            <button
              className={`product-content__wishlist space-mr--10 ${
                wishlistItem !== undefined ? "active" : ""
              }`}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={
                wishlistItem !== undefined
                  ? () => deleteFromWishlist(product, addToast)
                  : () => addToWishlist(product, addToast)
              }
            >
              <IoIosHeartEmpty />
            </button>

            <button
              className={`product-content__compare space-mr--10 ${
                compareItem !== undefined ? "active" : ""
              }`}
              title={
                compareItem !== undefined
                  ? "Added to compare"
                  : "Add to compare"
              }
              onClick={
                compareItem !== undefined
                  ? () => deleteFromCompare(product, addToast)
                  : () => addToCompare(product, addToast)
              }
            >
              <IoIosShuffle />
            </button>
          </div>

          {/*
          <div className="product-content__other-info space-mt--50">
            <table>
              <tbody>
                <tr className="single-info">
                  <td className="title">SKU: </td>
                  <td className="value">{product.sku}</td>
                </tr>
                <tr className="single-info">
                  <td className="title">Categories: </td>
                  <td className="value">
                    {product.category &&
                      product.category.map((item, index, arr) => {
                        return (
                          <Link
                            href="/shop/left-sidebar"
                            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                            key={index}
                          >
                            <a>
                              {item + (index !== arr.length - 1 ? ", " : "")}
                            </a>
                          </Link>
                        );
                      })}
                  </td>
                </tr>
                <tr className="single-info">
                  <td className="title">Tags: </td>
                  <td className="value">
                    {product.tag &&
                      product.tag.map((item, index, arr) => {
                        return (
                          <Link
                            href="/shop/left-sidebar"
                            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                            key={index}
                          >
                            <a>
                              {item + (index !== arr.length - 1 ? ", " : "")}
                            </a>
                          </Link>
                        );
                      })}
                  </td>
                </tr>
                <tr className="single-info">
                  <td className="title">Share on: </td>
                  <td className="value">
                    <ul className="social-icons">
                      <li>
                        <a href="https://www.twitter.com">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com">
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com">
                          <FaYoutube />
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
                    */}

        </Fragment>
        
      )}
    </div>
  );
};

export default ProductDescription;
