import React, { useState } from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/BasketSlice";
import { productTitleSearch } from "../redux/ProductSlice";


function Header() {
    const [isNight, setIsNight] = useState(false);

    const { product } = useSelector((store) => store.basket)
    const { searchText } = useSelector((store) => store.product)


    const dispacth = useDispatch();
    const navigate = useNavigate();


    const toggleTheme = () => {
        setIsNight(!isNight);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        dispacth(productTitleSearch(value));
    };


    return (
        <div className={`header ${isNight ? "night" : "day"}`}>
            <div className="name_and_logo_page">
                <img className="logo" src="./src/images/logo.png" alt="Logo" onClick={() => navigate("/")} />
                <h3>Ahmet A.Ş</h3>
            </div>
            <div className="search_and_logo">
                <input className="search" value={searchText} type="text" placeholder="Birşeyler Giriniz" onChange={handleSearchChange} required />
                {dispacth(productTitleSearch())}
                {isNight ? (
                    <FaMoon className="react_logo" onClick={toggleTheme} />
                ) : (
                    <CiSun className="react_logo" onClick={toggleTheme} />
                )}
                <Badge badgeContent={product.length} color="primary">
                    <CiShoppingBasket onClick={() => dispacth(setDrawer())} className="react_logo" />
                </Badge>

            </div>
        </div>
    );
}

export default Header;
