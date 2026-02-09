import {createSlice} from '@reduxjs/toolkit'


const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,payload)=>{
            // alert("Product added to wishlist")
            if(state.find(item=>item.id==payload.payload.id)){
                alert("Product already exist in wishlist")
            }
            else{
                 state.push(payload.payload)
            }

            
        },
        removeFromWishlist:(state,payload)=>{
           return state.filter(item=>item.id!=payload.payload)
        }
    }
})

export default wishlistSlice.reducer
export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions