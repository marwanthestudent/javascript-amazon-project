import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
//import '../data/backend-practice.js'
//import '../data/cart-class.js'; just for practice


loadProductsFetch().then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
