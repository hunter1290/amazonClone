
import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import styled from 'styled-components';
import SignUp from './component/SignUp';
import Login from './component/Login';
import { useState } from 'react';
import Checkout from './component/Checkout';
import Address from './component/Address';
import Payment from './component/Payment';
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import AddProduct from './component/AddProduct';
 

const promise = loadStripe(
  'pk_test_51LxY8ySHQk2RUqWuOIbprSS7NjYZ6PFJRGa1LM7qF0NbcPUFESxttYlxUzEPlcltGzCA9SkSwY9h8ZNIw3zJnURq00YdJ4EsCj'
)


function App() {

  
  return (
   < Router>
    <Container>
       <Routes>
         <Route path= "/" element={<Home />}/>
         <Route path= "/signup" element={<SignUp/>}/>
         <Route path= "/login" element={<Login/>}/>
         <Route path = "/checkout" element={<Checkout/>}/>
         <Route path = "/address" element={<Address/>}/>
         <Route path = "/payment" element={
         <Elements stripe={promise}
         
         ><Payment/></Elements>  }/>
         <Route path = "/addproduct" element={<AddProduct/>}/>
          


       </Routes>
    </Container>
    </ Router>
  );
}

const Container = styled.div`
 width: 100vw;
`;

export default App;
