import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider'
import Navbar from './Navbar'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import {CardElement,useElements,useStripe} from '@stripe/react-stripe-js'


function Payment() {
    const  [{address,basket}] = useStateValue();
    
    const [clientSecret,setClientSecret] = useState('');
    const elements = useElements();


  return (
      <Container>
         <Navbar/>
         
          <Main>
            <ReviewContainer>
               <h2>Review Your Order</h2>
               
                <AddressContainer>
                    <h5>Shipping Address</h5>
                     <div>
                        <p>{address.fullName}</p>
                        <p>Phone : {address.phone}</p>
                        <p>{address.flat}</p>
                        <p>{address.area}</p>
                        <p>{address.city}</p>
                        <p>{address.landmark}</p>
                        <p>{address.state}</p>
                     </div>
                </AddressContainer>
       
               <PaymentContainer>
                <h5> Payment Method</h5>
                  <p>Card Details</p>
                  <div>
                    {/* Card ELement */}
                    <CardElement/>
                  </div>

               </PaymentContainer>


               <OrderContainer>

                 <h5>Your Order</h5>

                   <div>
                   {
            basket?.map(x=>(
             
              <Product>
                <Image>
                <img src={x.image} alt="image here" />
                </Image>
                <Description>
                    <h4>{x.descrition}</h4>
                    <p>{x.price}</p>
                </Description>
            </Product>

            ))
           }

                   </div>

               </OrderContainer>


            </ReviewContainer>
              
           <SubTotal> 
           <CurrencyFormat
    renderText={(value)=>(
      <>
        <p>
          Subtotal({basket.length} items ) :
          <strong> {value} </strong>
        </p>
        <small>
          <input type="checkbox"/>
          <span>This order Contains a gift </span>
        </small>
      </>
      
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType='text'
    thousandSeparator={true}
    prefix={"₹ "}

    
    
  />
  <button >Place Your Order</button>

      
          </SubTotal>  
            
            </Main>

      </Container>
  )
}

const Container  = styled.div`
  width:100%;
  height:fit-content;
  max-width:1800px;
  background-color:rgb(234,237,237);
`;
const Main = styled.div`
 padding:15px;
 display:flex;

   @media only screen and (max-width:1200px)
   {
     flex-direction:column;
   }
`;
const ReviewContainer = styled.div`
 background-color:#fff;
 flex:0.7;
 padding:15px;
 h2{
    font-weight:500;
    border-bottom:1px solid lightgray;
    padding-bottom:15px;
 }
`;
const SubTotal = styled.div`
 flex:0.3;
  margin-left:10px;
  flex:0.3;
 background-color:#fff;
 margin-left:15px;
 height:200px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;

 @media only screen and (max-width:1200px){
  flex:none;
  margin-top:20px;
 }

 p{
     font-size:20px;
 }
 small{
 display:flex;
 align-items:center;
margin-top:10px;
  span{
    margin-left:10px;
  }
   
 }
 button{
  height:40px;
  width:65%;
  margin-top:20px;
  background-color:#ffd814;
  border-radius:8px;
 }
`;
const AddressContainer = styled.div`
 margin-top:20px;
 div{
    margin-top:10px;
    margin-left:10px;
     p{
        font-size:14px;
        margin-top:4px;
     }

 }
`;

const PaymentContainer = styled.div`
 margin-top:15px;
   div{
    margin-top:15px;
    margin-left:15px;
     p{
        font-size:14px;
     }
   }
`;


const  OrderContainer = styled.div`
   margin-top:15px;
`;


const Product = styled.div`
  display:flex;
  align-item:center;

`;
const Image = styled.div`
  flex:0.3;
  img{
    width:100%;
  }

`;
const Description = styled.div`
  flex:0.7;

  h4{
    font-weight:600;
    font-size:18px;
  }
  p{
    font-weight:600;
    margin-top:10px;
  }
  button{
    background-color:transparent;
    color:#1384b4;
    border:none;
    outline:none;
    margin-top:10px;
   cursor:pointer;
    &:hover{
        text-decoration:underline;

    }
  }
`;
export default Payment