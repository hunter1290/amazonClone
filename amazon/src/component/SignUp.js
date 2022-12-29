
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const SignUp =  ()=>{
   
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
  
    const navigate = useNavigate();

    const createUSer = async(e)=>{
       e.preventDefault();
      const res = await fetch('http://localhost:5000/signup-user',{
        method:'POST',
        body: JSON.stringify({
          name,email,password
        }),
        headers:{
          "Content-Type" : "application/json"
       }
      })
      setEmail("");
      setName("");
      setPassword("");
       localStorage.setItem('USER',name)
      navigate('/')
    }

    return(
        <Container>
        <Logo>
            <img src="./amazon_logo.png" alt="" />
        </Logo>
        
        <FormContainer>
         <h3>Sign-Up</h3>
          
            <InputContainer>
            <p>Email</p>
            <input type="email" placeholder="example@example.com" 

              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              value={email}
            />
            </InputContainer>

            <InputContainer>
            <p>Name</p>
            <input type="text" placeholder="Random Random" 

onChange={(e)=>{
                setName(e.target.value)
              }}
              value={name}
            />
            </InputContainer>

            <InputContainer>
            <p>Password</p>
            <input type="password" placeholder="*******" 
          
          onChange={(e)=>{
                setPassword(e.target.value)
              }}
              value={password}
            />
            </InputContainer>
            <SignUpButton onClick={createUSer}>Create Account in Amazon</SignUpButton>
          
        </FormContainer>
        <LoginButton  onClick={(e)=>{navigate('/login')}}>Back to Login</LoginButton>

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
  height:500px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding: 15px;

  h3{
    font-size:28px;
    font-weight:400;
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

const LoginButton = styled.button`
  width:55%;
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
   height:5vh;
  width:55%;
   font-size:12px;
   margin-top:20px;

   &:hover{
    background-color:#dfdfdf;
     border:1px solid grey;
   }
`;
export default SignUp
