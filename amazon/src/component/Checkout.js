
import React from 'react'
import { useStateValue } from '../StateProvider'
import styled from 'styled-components';
import Navbar from './Navbar';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';
function Checkout() {
 const [{basket},dispatch] = useStateValue();
 const removeFromBasket = (e,id)=>{
   e.preventDefault();
   dispatch({
    type: 'REMOVE_FROM_BASKET',
    id : id,
   })
 }
 const navigate = useNavigate();

  return (
   <Container>
     <Navbar/>
       <Main>
        <ShoppingCart>
            <h2>Shopping Cart</h2>

           {
            basket?.map(x=>(
             
              <Product>
                <Image>
                <img src={x.image} alt="image here" />
                </Image>
                <Description>
                    <h4>{x.descrition}</h4>
                    <p>{x.price}</p>
                    <button onClick={(e)=>removeFromBasket(e,x.id)}>Remove</button>
                </Description>
            </Product>

            ))
           }


          
        </ShoppingCart>
        <Subtotal>
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

  <button onClick={()=>navigate('/address')}>Proceed to checkout</button>
      
        </Subtotal>
       </Main>

   </Container>
  )
}
const Container = styled.div`
 width:100%;
 max-width:1550px;
 height: fit-content;
 margin:auto;
 background-color:rgb(234,237,237);
 position:relative;
`;
const Main =  styled.div`
   display:flex;
   padding:15px;

   @media only screen and (max-width:1200px){
    flex-direction:column;
   }
`;

const ShoppingCart = styled.div`
  padding:15px;

  background-color:#fff;
  flex:0.7;
 
  @media only screen and (max-width:1200px)
  {
    flex:none;

  }

  h2{
    font-weight:500;
    border-bottom:1px solid lightgray;
    padding-bottom:15px;
  }

`;
const Subtotal = styled.div`
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

export default Checkout