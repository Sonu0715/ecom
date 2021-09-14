import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
            <nav>
                <ul className="left">
                    <li><Link to="/">PeopleShop</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="cart">
                        <span className="shoppingCart">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </span>
                        <span className="cartCount">0</span>
                    </Link>
                    </li>
                </ul>
            </nav>

    )
}

export default Nav
