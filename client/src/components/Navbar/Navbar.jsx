import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Cart from "../Cart/Cart";

import "./Navbar.scss";

const Navbar = () => {
    const products = useSelector((state) => state.cart.products);
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="images/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">
                            Women
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">
                            Men
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">
                            Children
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">
                        LAMA
                    </Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            About
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            Contact
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            Stores
                        </Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div
                            className="cartIcon"
                            onClick={() => setOpen(!open)}
                        >
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    );
};

export default Navbar;
