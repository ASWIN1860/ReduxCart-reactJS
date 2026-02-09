import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProductThunk=createAsyncThunk("products/fetchProductThunk",async()=>{
    const response=await axios.get("https://dummyjson.com/products")
    localStorage.setItem("products",JSON.stringify(response.data.products))
    return response.data
})


const productSlice=createSlice({
    name:"products",
    initialState:{
        products:[],
        allProducts:[],
        pending:false,
        error:""
    },
    reducers:{

        searchProducts:(state,payload)=>{
            if(payload.payload !=""){
                 state.products=state.allProducts.filter(item=>item.title.toLowerCase().includes(payload.payload.toLowerCase()))
            }
            else{
                state.products=state.allProducts
            }
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchProductThunk.pending,(state,pyload)=>{
            state.pending=true
            state.products=[]
            state.error=""
        }),
        builder.addCase(fetchProductThunk.fulfilled,(state,payload)=>{
            
            console.log(payload.payload.products);
            
            state.pending=false
            state.products=payload.payload.products
            state.allProducts=state.products
            state.error=""
        }),
        builder.addCase(fetchProductThunk.rejected,(state,payload)=>{
            state.pending=false
            state.products=[]
            state.error="Something wend wrong!!!"
        })
    }

})

export default productSlice.reducer;
export const {searchProducts}=productSlice.actions