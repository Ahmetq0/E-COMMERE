import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'
import BasketSlice  from './BasketSlice'

export const store = configureStore({
  reducer: {
    product : ProductSlice,
    basket : BasketSlice
  },
})