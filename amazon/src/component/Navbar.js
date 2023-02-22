import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";


const Navbar = ()=>{
   
  const [{basket}] = useStateValue();
  const navigate = useNavigate();
  const [guest,setGuest] = useState("")
    const user = ()=>{
      
            setGuest( localStorage.getItem('USER'));
    }

   const Logout = (e)=>{
    localStorage.setItem("USER","-1");
    window.location.reload();
   }
      
 
    useEffect(()=>{
       if(localStorage.getItem("USER")!="-1")
       user();
       else 
       setGuest("");
    })

  

    return(
        <Container>
            <Inner>
                <Logo>
                    <img src="./amazon_logo1.png" alt="" />
                </Logo>
                <SearchBar>
                    <input type="text" placeholder="Search......."/>
                     <SearchIcon onClick={()=>navigate('/addproduct')}> <img src="./searchIcon.png" alt="" /> </SearchIcon>
                </SearchBar>
                 {
                                       !guest? <MainButton onClick={e=>navigate('/login')}>Login</MainButton>:  <RightContainer>


<NavButtons>
 <p style={{margin:"0px"}}>hello</p>
  <p style={{margin:"0px"}} onClick={Logout}>{guest}, ...Logout</p>
  
</NavButtons> 


<NavButtons>
 <p style={{margin:"0px"}}>return</p>
  <p style={{margin:"0px"}}>& order</p>
</NavButtons> 

 <BasketButton onClick={()=>navigate('/checkout')}>
  <img src="./basket-icon.png" alt="" />
  <p>{basket.length}</p>
 </BasketButton>
</RightContainer>
                 }
            </Inner>
           
            <MobileSearchBar>
                    <input type="text" placeholder="Search......."/>
                     <SearchIcon onClick={()=>navigate('/addproduct')}> <img src="./searchIcon.png" alt="" /> </SearchIcon>
                </MobileSearchBar>

        </Container>
    )
}

const Container = styled.div`
  width:100%;
  heigth:60px;
  background-color:#131921;
  display:flex;
  align-items:center;
  position:relative;
  right:8px;

  @media only screen and (max-width: 767px)
  {
      height:120px;
      flex-direction:column;
  } 
`;
const Inner = styled.div`
width:100%;
display:flex;
align-items:center;
@media only screen and (max-width: 767px)
{
    justify-content:space-between;
} 
`;
const MainButton = styled.button`
 display:flex;
  align-item:center;
  justify-content:center;
  margin-right:15px;
 width:auto;
  height:35px;
  background-color:#f3b414;
  padding-top:5px;
  border-radius:5px;
  outline:none;
 
`;


const Logo = styled.div`
 margin-left:20px;
 cursor:pointer;
  img{
    width:100px;
    margin-top:10px;
  }
`;
const SearchBar = styled.div`
  height:35px;
  flex:1;
  margin: 0px 15px;
  display:flex;
  align-items:center;
    input{
     
        flex:1;
        width:100%;
        height:100%;
        border:none;
        border-radius:5px 0px 0px 5px;
        padding-left:5px;
    }
    
    @media only screen and (max-width: 767px)
    {
        display:none;
    } 

`;

 const MobileSearchBar = styled.div`
     height:35px;
     width:90%;
     display:flex;
     align-items:center;
     padding:10px;
     input{
        flex:1;
        width:100%;
        height:100%;
        border:none;
        border-radius:5px 0px 0px 5px;
        &::placeholder{
             padding-left:10px;
        }
     }
     @media only screen and (min-width: 767px)
     {
         display:none;
     } 
 `;

const SearchIcon = styled.div`
  background-color : #febd69;
   heigth:100%;
   width:40px;
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:0px 5px 5px 0px;
   cursor:pointer;
   img{
       width:25px;
       heigth:35px;
       padding:6px 6px 6px 6px;
   }
`;
const RightContainer = styled.div`
  display:flex;
  align-items:center;
  width:fit-content;
  justify-content:space-around;
  height:100%;
  padding:5px 15px;
`;
const NavButtons = styled.div`
   color: #fff;
   padding:5px;
   height:80%;
   display: flex;
   flex-direction:column;
   justify-content:center;
   cursor:pointer;
   margin-right:15px;
   p{
       &:nth-child(1){
        font-size:12px;
      }
      &:nth-child(2){
        font-size:14px;
        font-weight:600;
      }
   }
`;
const BasketButton = styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
  height:90%;
  img{
    width:30px;
    margin-right:10px;
  }
  p{
    color:#fff;
    font-weight:500;
  }
`;
export default Navbar;
