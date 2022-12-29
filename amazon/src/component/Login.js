import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 import styled from "styled-components";
const Login = ()=>{
     const navigate = useNavigate();
      const [email,setEmail] = useState("");
       const [password,setPassword] = useState("");


      const LoginUser = async(e)=>{
         e.preventDefault();
                const res = await fetch("http://localhost:5000/login-user",{
                  method:'post',
                  body:JSON.stringify({
                    email,password
                  }),
                  headers:{
                    "Content-Type" : "application/json"
                 }
                })

                const data = await res.json();
                console.log(data);
                
                if(data.message!="NO USER FOUND")
                {
                  localStorage.setItem("USER",data.name);
                  setEmail("");
                  setPassword("");
                  navigate("/");
                }
                else{
                  alert("NO USER FOUND");
                  navigate("/login");
                }
                
      }

    return(
        <Container>
        <Logo>
            <img src="./amazon_logo.png" alt="" />
        </Logo>
        
        <FormContainer>
         <h3>Sign-In</h3>
          
            <InputContainer>
            <p>Email</p>
            <input type="email" placeholder="example@example.com" 

              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
            </InputContainer>

            <InputContainer>
            <p>Password</p>
            <input type="password" placeholder="*******"
              
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
             />
            </InputContainer>
           <LoginButton onClick={LoginUser}>Login</LoginButton>
           <InfoText>
            By Continuing, you agree to Amazon's  
             <span> Conditons of Use </span>
             and 
            <span> Privacy Notice</span>
            .
           </InfoText>
        </FormContainer>
        <SignUpButton onClick={(e)=>{navigate('/signup')}
          }>Create Account in Amazon</SignUpButton>

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
  height:400px;
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

export default Login