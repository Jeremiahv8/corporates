import { connect } from "react-redux";


let IsLive = false;
const OrderTransactionProcessing = ({ order }) => {    
    fetch("https://grekko.azurewebsites.net/order/get", method="POST", body={data}).then(response => response.json()).then((jsonData) => {
        // jsonData is parsed json object received from url
        console.log(jsonData);
    })
    .catch((error) => {
        // handle your errors here
        console.error(error);
    });

    return (
        <></>
    );
};

export default OrderTransactionProcessing;

