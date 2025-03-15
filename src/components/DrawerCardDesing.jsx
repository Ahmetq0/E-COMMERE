import React from 'react'
import "../css/Drawer.css"
import { useDispatch } from 'react-redux';
import { removeToBasket } from '../redux/BasketSlice';

function DrawerCardDesing({ products }) {

    const dispacth = useDispatch();


    const { title, image, number, id, price } = products;

    return (
        <div className="">
            <div className='drawer_section'>
                <img src={image} alt="" />
                <h3 className='title'>Ürün Adi : {title}</h3>
                <h3>Sayisi: {number}</h3>
                <h3>Fiyat : {price}</h3>
                <button onClick={() => dispacth(removeToBasket(id, number))}>Sil</button>
            </div>
        </div>
    )
}

export default DrawerCardDesing
