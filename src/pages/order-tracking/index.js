import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";

import { useRouter } from 'next/router';
import { useState, useEffect } from "react";


import { withIronSession } from "next-iron-session";
import Cookies from 'universal-cookie';

import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'stage',
    headerName: 'Stage',
    width: 130,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', stage: "Adding to cart" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
//let loaded = false;


const OrderTracking = () => {

  //if(!loaded) return<></>;
  //loaded = true;

  const router = useRouter()
  const { email } = router.query;
  console.log(email);

  const [Email, setEmail] = useState(email); 
  const [IsLoggedIn, setIsLoggedIn] = useState(false); 

  const cookies = new Cookies();
  let user = cookies.get('user');
  //console.log(cookies.get('user2'));


  if(user != undefined){
    //setIsLoggedIn(true);
  }

  function handle(e){
    //setEmail(e.target.value)
  }


  function CustomerLogin(){
    
    let _UserId = 0;
    let _Email = "jeremiah.cruickshank@aegeantt.com";


    const user = {
      Id: _UserId,
      Email: _Email
    };
  
    //const cookies = new Cookies();
    cookies.set('user',user, { path: './' });

    console.log(cookies.get('user'));

  }

  const OrderTableStyle = {
    textAlign: "center",
    width: "calc(100% - 200px)",
    padding:"100px", 
    paddingTop:"25px", 
    margin:"auto 0",
    backgroundColor: "red"
  };

  if(user == undefined) return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Order Tracking"
        backgroundImage=""
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>Home</a>
            </Link>
          </li>

          <li>Order Tracking</li>
        </ul>
      </BreadcrumbOne>
      <div className="order-tracking-area space-mt--r130 space-mb--r130">
        <Container>
          <Row>
            <Col lg={6} md={10} className="ml-auto mr-auto">
              <div className="order-tracking-box">
                <p className="info-text space-mb--20">
                  To track your order please enter your Email Address in the box
                  below and press the "Track" button. This will give you a list of your orders.
                </p>
                <div className="lezada-form order-tracking-form">
                  <form>
                    <Row>
                      {/*}
                      <Col lg={12} className="space-mb--20">
                        <label htmlFor="orderId">Order ID</label>
                        <input
                          type="text"
                          id="orderId"
                          placeholder="Found in your order confirmation email"
                        />
                      </Col>
                      */}
                      <Col lg={12}>
                        <label htmlFor="orderEmail">Email</label>
                        <input
                          type="text"
                          name="email"
                          id="orderEmail"
                          placeholder="Email you used during checkout"
                          value={Email}
                          onChange={handle }
                        />
                      </Col>
                      <Col
                        lg={12}
                        className="col-lg-12 text-center space-mt--40"
                      >
                        <button className="lezada-button lezada-button--medium order-tracking-button">
                          track
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );

  if(user != undefined) return (<LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
      pageTitle="Order Tracking"
      backgroundImage=""
    >
      <ul className="breadcrumb__list">
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Home</a>
          </Link>
        </li>

        <li>Order Tracking</li>
      </ul>
      </BreadcrumbOne>
      <div className="order-tracking-area space-mt--r130 space-mb--r130" >
        <Container>
            <Row>
              <Col lg={12} md={12} className="ml-auto mr-auto">
                <div>Loading...</div>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
                </div>
              </Col>
          </Row>
        </Container>
        
      </div>

    </LayoutTwo>
  );
};

export default OrderTracking;
