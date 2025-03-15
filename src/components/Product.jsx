import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductData } from '../redux/ProductSlice';
import ProductCard from './ProductCard';

function Product() {

    const discpacth = useDispatch();

    const { productdata } = useSelector(state => state.product);
    console.log(productdata);

    useEffect(() => {
        discpacth(GetProductData())
    }, [discpacth])


    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }}>
            {
                productdata && productdata.map((products) => {
                    return <ProductCard key={products.id} product={products} />
                })
            }
        </div>
    )
}

export default Product
