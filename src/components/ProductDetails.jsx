import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/ProductSlice';
import "../css/ProductDetails.css"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, productCalculate, productTitleSearch } from '../redux/BasketSlice';


function ProductDetails() {

    const { id } = useParams();
    const { productdata, selectedproducts } = useSelector(state => state.product);
    const [number, setNumber] = useState(0);


    const ProductNumberCalculator = () => {
        setNumber(number + 1)
    }


    const ProductNumberExtraction = () => {
        setNumber(number - 1)
    }

    const { image, title, price, description } = selectedproducts;

    const dispacth = useDispatch();


    const AddBasket = () => {
        const payload = {
            number,
            id,
            title,
            price,
            image,
            description,
        }

        console.log(number)

        dispacth(addToBasket(payload))
        dispacth(productCalculate(price, number))
        dispacth(productTitleSearch(title))

    }

    useEffect(() => {
        getProductsById();
    }, [])


    const getProductsById = () => {
        productdata && productdata.map((product) => {
            if (product.id == id) {
                dispacth(setSelectedProduct(product))
            }
        })
    }


    return (
        <div className='product_details'>
            <div className="details_image">
                <img src={image} alt="" />
            </div>
            <div className="">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{price}$</p>
                <div className="counter_section">
                    <CiCirclePlus className='logo' onClick={ProductNumberCalculator} /> {number} <CiCircleMinus className='logo' onClick={ProductNumberExtraction} />
                </div>
                <div className="details_button">
                    <button
                        onClick={AddBasket}
                    >Buy</button>
                </div>
            </div>
        </div>
    );

}

export default ProductDetails
