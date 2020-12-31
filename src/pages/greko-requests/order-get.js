import Cookies from 'universal-cookie';

const cookies = new Cookies();

let hasData = false;
function handle(response){
    //if(hasData) return;
    hasData = true;
    console.log("_ Requested Data _");
    console.log(response);

    
    cookies.set('orders', response, { path: './' });
    console.log(cookies.get('orders'));
}
const OrderGet = () => {
    fetch("https://grekko.azurewebsites.net/order/get",
    {
        method: "GET",
        headers: new Headers({Accept: "application/json"})
    }
    ).then(res => res.json()).then(response => handle(response))
    .catch(error => console.log(error));

    return <></>
};

  
export default OrderGet;
  

