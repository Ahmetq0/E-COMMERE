import React, { useEffect } from 'react'
import "../css/Product.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductDetails from './ProductDetails';

function ProductCard({ product }) {

    const { image, title, price, id } = product;

    const navigate = useNavigate();


    const { productdata } = useSelector((store) => store.product)

    useEffect(() => {
        productdata && productdata.map((products) => {
            if (products.id == id) {
                return <ProductDetails key={products.id} product={products} />
            }
        })
    }, [])


    return (
        <div className="product-card">
            <img src={image} alt="" />
            <p style={{ height: "100px" }}>{title}</p>
            <h3>{price}₺</h3>
            <div>
                <button className='button' onClick={() => navigate("/product-details/" + id)}>Detayına Git</button>
            </div>

        </div>
    )
}

export default ProductCard
