import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice(
    {
        name:'cart',
        initialState:[],
        reducers:{
            addToCart:(state,action)=>{
                let exitItem = state.find((item)=>item.id===action.payload.id);
                if(exitItem){
                    exitItem.qnt+=1 
                }else{
                    state.push({...action.payload, qnt:1,})
                }
            },
            remove:(state,action)=>{
              return  state.filter((items)=>items.id!==action.payload)
            },

            incrementQnt:(state,action)=>{
                const item = state.find((item)=> item.id===action.payload);
                if(item){
                item.qnt+=1;
            }
        },

        decrementQnt:(state,action)=>{
            const item = state.find((item)=> item.id===action.payload);

            if(item && item.qnt > 1){
                item.qnt-=1;
            }else{
                return state.filter((item)=> item.id !==action.payload);
            }
        }

    },
    
})


export const {addToCart,remove,incrementQnt,decrementQnt} =cartSlice.actions;
export default cartSlice.reducer; 