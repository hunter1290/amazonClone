import React, { useState } from 'react'
import styled from 'styled-components'
import { Rating } from '@mui/material';
import StarRating from './StarRating';
import { useStateValue } from '../StateProvider';

function Card({title,price,image,descrition,id}) {
   
     const [{basket},dispatch] = useStateValue();
   
     const addToBasket = (e)=>{
  
        e.preventDefault();
        dispatch({
         type:'ADD_TO_BASKET',
         item:{
            title,
            price,
            image,
            descrition,
         },
        });

   
     }
   
   return (
   <Container>
      <Image>
             <img src={image} alt=""/>
      </Image>
      <Descrition>
         <h5>{title}</h5>
         {descrition}
        <StarRating/>
        <p>₹{price}</p>
      </Descrition>
      <Button onClick={addToBasket}>Add to Cart</Button>
   </Container>
  )
}

const Container  = styled.div`
 width:100%;
 height:100%;
 display:flex;
 flex-direction:column;
 background-color:#fff;
 z-index:10;
 padding-bottom:3px;
`;
const Image = styled.div`
 width:100%;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 margin-top:20px;
 flex:0.3;
   img{
    width:180px;
    height:200px;
   }
`;
const Descrition = styled.div`
 width:90%;
 margin:auto;
 display:flex;
 flex-direction:column;
 justify-content: space-evenly;
 flex:0.7;

 h5{
    font-size:15px;
    font-weight:600;

 }
 p{
    font-weight:600;

 }
`;
const Button = styled.button`
  width:100%;
 height:33px;
 background-color:#fa8900;
 border-radius:10px;
 cursor:pointer;
 margin-right:10px;
`;
export default Card