import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">

            <div className="header-title-container">
                <h1 className="header-title noselect">Gerda Lekstein</h1>
                <div className="header-title-sub noselect">
                    <p>Digital</p>
                    <p>Artist</p>
                </div>
            </div>

            <div className="navigation noselect">
                <NavLink to="/" className="nav-item" activeClassName="nav-item-active" exact={true}>Gallery</NavLink>
                <NavLink to="/about" className="nav-item" activeClassName="nav-item-active">About</NavLink>
                <NavLink to="/shop" className="nav-item" activeClassName="nav-item-active">Shop</NavLink>
                <NavLink to="/contact" className="nav-item" activeClassName="nav-item-active">Commissions</NavLink>
            </div>

        </div>
    )
}

export default Header
