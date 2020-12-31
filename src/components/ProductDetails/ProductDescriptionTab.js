import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import React, { Component, useState } from 'react';

import { DataGrid } from '@material-ui/data-grid';


import Cookies from 'universal-cookie';
const cookies = new Cookies();





import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


import TablePagination from '@material-ui/core/TablePagination';


import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


let rows = [];
/*
let rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
*/
let AdminScreen = "";

const ProductDescriptionTab = ({ product }) => {

  let hasUserId = false;
  if(cookies.get('GrekoAPI_UserId') != undefined || cookies.get('GrekoAPI_UserId') != "" || cookies.get('GrekoAPI_UserId') != "undefined"){
    hasUserId = true;
  }
  let hasEmail = false;
  if(cookies.get('email') != undefined || cookies.get('email') != "" || cookies.get('email') != "undefined"){
    hasEmail = true;
  }

  let IsLoggedIn = false;

  if(hasEmail && hasUserId){
    IsLoggedIn = true;
  }

  //  user
  const user_GrekoAPI_UserId = cookies.get('GrekoAPI_UserId');
  const user_Email = cookies.get('email');


  const [API_Status, setAPI_Status] = useState("");


  const [PageNumber, setPageNumber] = useState(2);
  const [RowsPerPage, setRowsPerPage] = useState(10);

  const [TotalOrders, setTotalOrders] = useState(0);
  
  

  const columns = [
    { field: '_id', headerName: 'ID', width: 70 },
    { field: 'PackageName', headerName: 'Package Name', width: 130 },
    { field: 'Stage', headerName: 'Stage', width: 130 },

    { field: 'MerchantName', headerName: 'Merchant Name', width: 130 },
    { field: 'MerchantAddress', headerName: 'Merchant Address', width: 130 },
    { field: 'MerchantContact', headerName: 'Merchant Contact', width: 130 },

    { field: 'CustomerName', headerName: 'Customer Name', width: 130 },
    { field: 'CustomerAddress', headerName: 'Customer Address', width: 130 },
    { field: 'CustomerContact', headerName: 'Customer Contact', width: 130 },
    /*
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
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
    */
  ];


  



  getOrders(user_GrekoAPI_UserId, user_Email);


  
  

  function getOrders(user_GrekoAPI_UserId, user_Email){
    
    const data = {
      "MerchantId": user_GrekoAPI_UserId,
      "Email": user_Email
    };


    //console.log("createOrder_");
    //console.log(data);

    //return;

    fetch("https://greko-api-dev.herokuapp.com/order/get-all/",
    {
        
    })
    .then(data => data.json())
    .then(function(info){ getOrders_handler(info) })
    .catch(function(info){ getOrders_Errorhandler(info) })
  }

  function getOrders_handler(info){
    
    //console.log("SUCCESS");

    //console.log(info.result);

    let rows_temp = info.result;
    //console.log("_postprocessed");
    //console.log(rows_temp);

    

    //rows = [];
    if( info.status != 1000){
      console.log("Not Perfect ERROR");
      console.log(info.status);
      return;
      /*  
      for(let i=(PageNumber*RowsPerPage); i<RowsPerPage; i++){
        let Package = info.result[i].Packages;

        // The name on the forst package is be the same as on all packages of a order
        let MerchantName = Package[0].MerchantName;

        console.log(Package);
        console.log(MerchantName);
        //continue;
        
        rows_temp[i] = {
          MerchantName
        };
      }
      */
    }
    
    


    //console.log("__Status");



    rows = [];
    //rows = rows_temp;

    let temp_max = ((PageNumber*RowsPerPage) + RowsPerPage);//((PageNumber*RowsPerPage) + RowsPerPage) > TotalOrders ? TotalOrders : ((PageNumber*RowsPerPage) + RowsPerPage);
    if(rows_temp.length < ((PageNumber*RowsPerPage) + RowsPerPage)){
      temp_max = rows_temp.length;
    }

    for(let i=(PageNumber*RowsPerPage); i<temp_max; i++){
      let NoOfCompleted = 0;

      for(let a=0; a<rows_temp[i].Packages.length; a++){
        if(rows_temp[i].Packages[a].Stage == "Delivered") NoOfCompleted += 1;  
      }
      rows_temp[i].NoOfCompleted = NoOfCompleted;

      rows[i-(PageNumber*RowsPerPage)] = rows_temp[i];
    }

    



    //rows.reverse();
    //console.log((PageNumber*RowsPerPage)+" - "+temp_max);
    //console.log(rows_temp);
    
    
    //console.log("rows_");
    //console.log(rows);








    //console.log("END");
    setTotalOrders(info.result.length);

    setAPI_Status(info.status);
    //console.log(API_Status);
  }
  function getOrders_Errorhandler(info){
    //console.log("ERROR");
    //console.log(info);

  }




  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    //console.log("__row");
    //console.log(row);
    

    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">{row.Packages[0].MerchantName}</TableCell>
          <TableCell >{row.Packages[0].MerchantContact}</TableCell>
          <TableCell >{row.Packages[0].MerchantEmail}</TableCell>
          <TableCell>{row.Packages[0].MerchantAddress}</TableCell>
          <TableCell align="center">{row.NoOfCompleted == row.Packages[0].length ? "Completed" : (row.NoOfCompleted / row.Packages.length) * 100 +"%" }</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Packages
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Customer</TableCell>
                      <TableCell>Contact</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>Package Cost</TableCell>
                      <TableCell align="center">Stage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.Packages.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.CustomerName}</TableCell>
                        <TableCell>{item.CustomerContact}</TableCell>
                        <TableCell>{item.CustomerEmail}</TableCell>
                        <TableCell>{item.CustomerAddress}</TableCell>
                        <TableCell>${item.PackageCost}</TableCell>
                        <TableCell align="center">
                        <div>
                          <FormControl className={classes.formControl}>
                            <Select defaultValue={item.Stage} id="grouped-select">
                              <MenuItem value={item.Stage}><em>Requesting</em></MenuItem>
                              <MenuItem value={1}>Picking Up</MenuItem>
                              <MenuItem value={2}>Delivering</MenuItem>
                              <MenuItem value={"Delivered"}>Delivered</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        </TableCell>

                        {/*}
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {Math.round(historyRow.amount * row.price * 100) / 100}
                        </TableCell>
                        */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
 

  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
      width: '100%',
    },
    container: {
      //maxHeight: 625,
      minHeight: 625,
      height: "calc(100vh - 315px)",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  const classes = useStyles();

  function handleChangePage(e, newPage){
    console.log(newPage);
    setPageNumber(newPage);
    console.log(PageNumber);


    setAPI_Status(1001);


  }
  function handleChangeRowsPerPage(e, newRowsPerPage){
    //console.log(newRowsPerPage);
    //setRowsPerPage(newRowsPerPage);
    //console.log(RowsPerPage); 
  }


  if(IsLoggedIn && (user_Email == "manager@udlvr.com" || user_Email == "administrator@udlvr.com" || user_Email == "dev@udlvr.com") ){
    AdminScreen = "Manager";
  }


  let IsEmployee = false;
  let email = user_Email + "";
  //console.log("email_");
  //console.log(email);
  let NameAndDomain = email.split("@");
  let USER_domain = NameAndDomain[1];

  //console.log("USER_domain_");
  //console.log(USER_domain);

  //  Anyone with a udlvr.com domain Has Access
  let AppDomain = "udlvr.com";
  if(USER_domain == AppDomain) AdminScreen = "Manager";
  console.log("AdminScreen_");
  console.log(AdminScreen);

  return (
    <div className="product-description-tab space-pt--r100 space-mt--r100 border-top--grey" style={{paddingBottom: "0px",paddingTop: "50px" , marginBottom: "0px", marginTop: "50px"}} >

      <Tab.Container defaultActiveKey={"Live"}>
        <Nav
          variant="pills"
          className="product-description-tab__navigation text-center justify-content-center space-mb--50"  
        >
          
          <Nav.Item>
            <Nav.Link eventKey="Live">{""}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Manager">{AdminScreen}</Nav.Link>
          </Nav.Item>
          
          {/*
          <Nav.Item>
            <Nav.Link eventKey="merchant">
              Merchant
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="additionalInfo">
              Finance
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews">
              Live Chat {product.ratingCount ? `(${product.ratingCount})` : ""}
            </Nav.Link>
          </Nav.Item>
          */}
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="Community" style={{position: "relative"}}>

          </Tab.Pane>
        </Tab.Content>
        <Tab.Content>
          <Tab.Pane eventKey="Manager" style={{position: "relative"}}>
            <div className="product-description-tab__details" className={classes.root}>
              {product.fullDescription}
              {"Status: "+ API_Status}
              

              <TableContainer component={Paper} className={classes.container}>
                <Table stickyHeader aria-label="sticky table">

                {/*<Table aria-label="collapsible table">*/}
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>Merchant</TableCell>
                      <TableCell >Contact</TableCell>
                      <TableCell >Address</TableCell>
                      <TableCell >Email</TableCell>
                      <TableCell align="center">Progress</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, count) => (
                      <Row key={count+"_"+row.name} row={row} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10]}
                component="div"

                count={TotalOrders}
                rowsPerPage={RowsPerPage}
                page={PageNumber}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
              {/*
              <div style={{ height: 575, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
              </div>
              */}
            </div>
            <div className="XSX" style={{width:"100%",height:"100%",background:"white",position:"absolute", top:"0",zIndex:"2",display: "none"}}></div>
          </Tab.Pane>
          <Tab.Pane eventKey="additionalInfo">
            <div className="product-description-tab__additional-info">
              <table className="shop-attributes">
                <tbody>
                  <tr>
                    <th>Size</th>
                    <td>
                      <p>L, M, S, XS</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Color</th>
                    <td>
                      <p>Black, Blue, Brown</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="reviews">
            <div className="product-description-tab__review">
              <h2 className="review-title space-mb--20">
                {product.ratingCount ? product.ratingCount : ""} reviews on{" "}
                {product.name}
              </h2>
              {/*=======  single review  =======*/}
              <div className="single-review">
                <div className="single-review__image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/user/user1.jpeg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-review__content">
                  {/*=======  rating  =======*/}
                  <div className="single-review__rating">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                  </div>

                  {/*=======  username and date  =======*/}
                  <p className="username">
                    Scott James <span className="date">/ April 5, 2020</span>
                  </p>

                  {/*=======  message  =======*/}
                  <p className="message">
                    Thanks for always keeping your HTML themes up to date. Your
                    level of support and dedication is second to none.
                  </p>
                  {/*=======  End of message  =======*/}
                </div>
              </div>
              {/*=======  End of single review  =======*/}
              {/*=======  single review  =======*/}
              <div className="single-review">
                <div className="single-review__image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/user/user2.jpeg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-review__content">
                  {/*=======  rating  =======*/}
                  <div className="single-review__rating">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                  </div>
                  {/*=======  End of rating  =======*/}
                  {/*=======  username and date  =======*/}
                  <p className="username">
                    Owen Christ <span className="date">/ April 7, 2020</span>
                  </p>
                  {/*=======  End of username and date  =======*/}
                  {/*=======  message  =======*/}
                  <p className="message">
                    I didn’t expect this poster to arrive folded. Now there are
                    lines on the poster and one sad Ninja.
                  </p>
                  {/*=======  End of message  =======*/}
                </div>
              </div>
              {/*=======  End of single review  =======*/}
              {/*=======  single review  =======*/}
              <div className="single-review">
                <div className="single-review__image">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/user/user3.jpeg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-review__content">
                  {/*=======  rating  =======*/}
                  <div className="single-review__rating">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                  </div>
                  {/*=======  End of rating  =======*/}
                  {/*=======  username and date  =======*/}
                  <p className="username">
                    Edna Watson <span className="date">/ April 5, 2020</span>
                  </p>
                  {/*=======  End of username and date  =======*/}
                  {/*=======  message  =======*/}
                  <p className="message">
                    Can’t wait to start mixin’ with this one!
                    Irba-irr-Up-up-up-up-date your theme!
                  </p>
                  {/*=======  End of message  =======*/}
                </div>
              </div>
              {/*=======  End of single review  =======*/}
              <h2 className="review-title space-mb--20">Add a review</h2>
              <p className="text-center">
                Your email address will not be published. Required fields are
                marked *
              </p>
              {/*=======  review form  =======*/}
              <div className="lezada-form lezada-form--review">
                <form>
                  <div className="row">
                    <div className="col-lg-6 space-mb--20">
                      <input type="text" placeholder="Name *" required />
                    </div>
                    <div className="col-lg-6 space-mb--20">
                      <input type="email" placeholder="Email *" required />
                    </div>
                    <div className="col-lg-12 space-mb--20">
                      <span className="rating-title space-mr--20">
                        YOUR RATING
                      </span>
                      <span className="product-rating">
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                      </span>
                    </div>
                    <div className="col-lg-12 space-mb--20">
                      <textarea
                        cols={30}
                        rows={10}
                        placeholder="Your review *"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-12 text-center">
                      <button
                        type="submit"
                        className="lezada-button lezada-button--medium"
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/*=======  End of review form  =======*/}
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ProductDescriptionTab;
