import { createSlice } from '@reduxjs/toolkit'

const getBasketFromToStorge = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"))
    }
    return [];
}

const initialState = {
    product: getBasketFromToStorge(),
    drawer: false,
    productAmount: 0,
    searchText: ""
}


const writeFromBasketToStorge = (basket) => {
    localStorage.clear();
    localStorage.setItem("basket", JSON.stringify(basket))
}


export const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const productFind = state.product && state.product.find((product) => product.id === action.payload.id)
            if (productFind) {
                const ExtractionProduct = state.product.filter((product) => product.id != action.payload.id)
                // Filter İle Productı İd İle Bulup Sildik
                productFind.number += action.payload.number;
                // Yeni Payload Ettiğimiz Değeri Reduxtaki Değerin Üstüne Ekledik
                state.product = [...ExtractionProduct, productFind]
                // State Producta Setledik
                writeFromBasketToStorge(state.product)
                // Yeni Product İşlem Yapması İçin Fonksiyona Gönderdik
            }
            else {
                state.product = [...state.product, action.payload]
                writeFromBasketToStorge(state.product)
            }
        },
        removeToBasket: (state, action) => {
            const productFind = state.product && state.product.find((product) => product.id === action.payload.id)
            state.product.filter((product) => product.id != action.payload.id)
            productFind.number -= action.payload.number;
            writeFromBasketToStorge(state.product)

        },
        setDrawer: (state) => {
            state.drawer = !state.drawer
        },
        productCalculate: (state) => {
            state.productAmount = 0
            state.product && state.product.map((products) => {
                state.productAmount += products.price * products.number;
            })
        },
    }

})

export const { addToBasket, removeToBasket, setDrawer, productCalculate} = BasketSlice.actions;

export default BasketSlice.reducer;
