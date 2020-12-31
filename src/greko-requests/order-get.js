import { connect } from "react-redux";

const OrderGet = () => {   
    
    const [HasData, setHasData] = useState(false);
console.log("d");
    fetch("https://grekko.azurewebsites.net/order/get").then(response => response.json()).then((jsonData) => {
        // jsonData is parsed json object received from url
        //console.log(jsonData);

        setHasData(true);
    })
    .catch((error) => {
        // handle your errors here
        //console.error(error);

    });

    return <>{HasData}</>
};

//export default OrderGet;
const mapStateToProps = (state) => {
    return {
        
    };
};
  
  export default connect(mapStateToProps)(OrderGet);
  

