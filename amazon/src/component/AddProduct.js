// import { Container } from '@mui/system'
// import axios from '../axios';
import React, { useState } from 'react'
import styled from 'styled-components'

function AddProduct() {

 const [title,setTitle] = useState("");
 const [imageURL,setImageURL] = useState("");
 const [price,setPrice] = useState(0);
 const [description,setDescription] = useState("");
 
  const addProduct = async(e)=>{
    e.preventDefault();
    const result = await fetch("http://localhost:5000/add-product",{
          method:'post',
          body:JSON.stringify({
              title,
              imageURL,
              price,
              description
          }),
          headers:{
             "Content-Type" : "application/json"
          }
      });

      setImageURL("");
      setPrice(0);
      setDescription("");
      setTitle("");
    
  }

  return (
        <Container>
            
          
            <Logo>
            <img src="./amazon_logo.png" alt="" />
        </Logo>
        <FormContainer>
         <h1>Add Product</h1>
          
            <InputContainer>
            <p>Title</p>
            <input type="text" placeholder="" onChange={(e)=>{
              setTitle(e.target.value)
            }} value={title} />
            </InputContainer>

            <InputContainer>
            <p>ImageURL</p>
            <input type="text" placeholder=""
            onChange={(e)=>{
              setImageURL(e.target.value)
            }} value={imageURL}
             />
            </InputContainer>

            <InputContainer>
            <p>Price</p>
            <input type="text" placeholder="" 

onChange={(e)=>{
              setPrice(e.target.value)
            }} value={price}
            />
            </InputContainer>

            <InputContainer>
            <p>Description</p>
            <input type="text" placeholder="" 
             onChange={(e)=>{
              setDescription(e.target.value)
            }} value={description}

            />
            </InputContainer>

            
           <Button onClick={addProduct}>Add Product</Button>
         
        </FormContainer>
           

        </Container>
    )
}

const  Container = styled.div`
width:40%;
min-width:450px;
height:fit-content;
padding:15px;
margin:auto;
display:flex;
flex-direction:column;
align-items:center; 
`;

const Logo = styled.div`
 width:120px;
 margin-bottom:20px;
  img{
    width:100%;
  }
`;

const FormContainer = styled.div`
  border:1px solid lightgray; 
  width:55%;
  height:fit-content;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding: 15px;

  h1{
    font-size:28px;
    font-weight:600;
    line-height:33px;
    align-self:flex-start;
    margin-bottom:10px;
  }
`;

const InputContainer = styled.div`
width:100%;
padding:10px;
 p{
    font-size:14px;
    font-weight:600;
 }
 input{
    width:95%;
    height:33px;
    padding-left: 5px;
     border-radius:5px;
     border:1px solid lightgray;
     margin-top:5px;

     &:hover{
        border:1px solid orange;
     }
 }
`;

const Button = styled.button`
  width:70%;
  height:35px;
  background-color:#f3b414;
  border-radius:10px;
  outline:none;
  margin-top:30px;
`;

const InfoText = styled.p`
 font-size:12px;
 width:100%;
 word-wrap:normal;
 margin-left:20px;

  span{
     color:#426bc0;
  }

`;

const SignUpButton = styled.button`
   border:1px solid black;
  width:55%;
   height:35px;
   font-size:12px;
   margin-top:20px;

   &:hover{
    background-color:#dfdfdf;
     border:1px solid grey;
   }
`;


export default AddProduct