import React, { useEffect,useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Navbar from "./Navbar";


const Home = ({basket,setBasket})=>{
    const [products,setProducts] = useState(null);

      const getProduct = async()=>{
        const data = await fetch('http://localhost:5000/get-product');
        const Jdata =await data.json();
        console.log(Jdata);
         setProducts(Jdata);
      }

      useEffect(()=>{
        if(!products)
        {
            getProduct();
        }
      },[])

    return(
        <Container>
             <Navbar basket={basket}/>
            <Banner>
               <img src="./banner.jpg" alt="" />  
               <img src="./mobile_banner.jpg" alt="" /> 
            </Banner>
            <Main>
              {
                 products&&products.map((x)=>
                <Card id={x._id} basket ={basket} setBasket={setBasket} image = {x.imageURL} price={x.price} title={x.title} descrition={x.descrition}/>)
              }

            </Main>
        </Container>
    )
}

const Container = styled.div`
 width:100%;
 max-width:1550px;
 background-color:rgb(234,237,237);
 heigth:fit-content;
`;
const Banner = styled.div`
  width:100%;
  img{
    width:100%;
    -webkit-mask-image:linear-gradient(
        to bottom ,
        rgba(0,0,0,2),
        rgba(0,0,0,0.95),
        rgba(0,0,0,0.85),
        rgba(0,0,0,0.75),
        rgba(0,0,0,0.55),
        rgba(0,0,0,0)
    );
    &:nth-child(2){
        display:none;
    }
     
     @media only screen and (max-width:767px)
    {
        &:nth-child(1)
        {
            display:none;
        }
        &:nth-child(2)
        {
            display:block;
            -webkit-mask-image:none;
        }
    }
  }
`;
const Main = styled.div`
 display:grid;
 justify-content:center;
 place-items:center;
 width:100%;
 grid-auto-rows:420px 420px;
 grid-template-columns:repeat(4,240px);
 grid-gap:20px;
 
 ${'' /* mobile */}
 @media only screen and (max-width:767px)
    {
     grid-template-columns:repeat(2,50%);
     grid-gap:0;  
    }
    
    ${'' /* tablet */}
    @media only screen and (min-width:767px) and (max-width:1200px)
    {
     grid-template-columns:repeat(3,30%);
     grid-gap:0;  
    }

    @media only screen and (min-width:767px)
    {
     margin:top:-130px;
     padding:10px 0px; 
    }

`;
export default Home;