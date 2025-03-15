import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import ProductDetails from "../components/ProductDetails"
import SalaryPage from '../components/SalaryPage'

function RouterConfig() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/product-details/:id' element={<ProductDetails />}></Route>
                <Route path='/product-salary' element={<SalaryPage></SalaryPage>}></Route>
            </Routes>
        </div>
    )
}

export default RouterConfig
