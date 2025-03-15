import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import DrawerCardDesing from '../components/DrawerCardDesing';


export const initialState = {
    productdata: [],
    selectedproducts: {},
    loading: false,
    searchText: ""
}

export const GetProductData = createAsyncThunk("products", async () => {
    try {
        const api = await axios.get("https://fakestoreapi.com/products");
        console.log("API'den gelen veri:", api.data);
        return api.data;
    } catch (error) {
        console.error("API hatası:", error);
        return [];
    }
});


export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedproducts = action.payload
        },
        productTitleSearch: (state) => {
            state.productdata && state.productdata.map((products) => {
                if (products.title === state.searchText) {
                    console.log(state.searchText)
                    return <DrawerCardDesing key={products.id} products={products} />
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetProductData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(GetProductData.fulfilled, (state, action) => {
            state.loading = false
            state.productdata = action.payload
        })
    }
})

export const { setSelectedProduct, productTitleSearch } = ProductSlice.actions;

export default ProductSlice.reducer;
