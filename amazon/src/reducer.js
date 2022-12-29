import { useState } from "react";

export const initialState ={
    basket:[],
    user:null,
    address:{},
}

 export const getBasketTotal = (basket)=>
  basket.reduce((amount,item)=>parseInt(item.price) + parseInt(amount),0);

const reducer = (state,action)=>{

   
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
        case "SET_USER":
            return state;
        case "REMOVE_FROM_BASKET":
             
               const index = state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
               );
               let newBasket = [...state.basket];
               
               if(index>=0)
               {
                newBasket.splice(index,1)

               }else{
                console.warn(`
                Cannot remove product with 
                 ${index}
                `
                )
               }
            
               return{
                ...state, 
                basket: newBasket,
               }
        
        case 'SET_ADDRESS':
            
            return{
                ...state,
                address:{...action.item},
            }


               
        default:
            return state
    }
};

export default reducer