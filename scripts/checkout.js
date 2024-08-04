import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
//import '../data/backend-practice.js'
//import '../data/cart-class.js'; just for practice

async function loadPage(){
  console.log('load page');

  try {
    //throw 'error1';
    await loadProductsFetch(); 

  } catch(error){
    console.log('Unexpexted error. Please try again later');
  }
  
  renderOrderSummary();
  renderPaymentSummary();
 
}
loadPage();

/* 
loadProductsFetch().then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/