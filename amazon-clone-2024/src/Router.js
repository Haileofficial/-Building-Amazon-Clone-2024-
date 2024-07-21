

import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Orders from './Pages/Orders/Orders';
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import Auth from "./Pages/Auth/Auth";
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PeuzXRprfbkXrbfK622JnyXz3bWPOjvo310qhMYPy6SPSDpCJF3icvsMH1iF33O8gxGdM6yhqOAA7fpkglBEwWv00iUCfau1g');
function Routing() {
  return (
    <Router>
      <Routes>
          <Route path="/" element= {<Landing/>}/>
          <Route path="/auth" element= {<Auth/>}/>
          <Route path="/Payments" element= {
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
            }/>
          <Route path="/Orders" element= {<Orders/>}/>
          <Route path="/category/:categoryName" element= {<Results/>}/>
          <Route path="/products/:productId" element= {<ProductDetail/>}/>
          <Route path="/Cart" element= {<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default Routing;




