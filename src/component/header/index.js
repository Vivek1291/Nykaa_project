import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SearchComponent from '../SearchComponent';

// Css
import '../../css/header/header.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <div id="main-header">
                    <header id="nav-header">
                        <div id="nav" className="flex-container">
                            <span className="material-icons menu-icon">menu</span>
                            <Link to="/"  className="nykaa-logo" > <img src="static/images/NykaaLogoSvg.svg" alt=""/></Link>
                            <div className="left-container flex-container">
                                <ul>
                                    <li><Link to="/">Categories</Link></li>
                                    <li><Link to="/">Brands</Link></li>
                                    <li><Link to="/">Saloon/Spa</Link></li>
                                    <li><Link to="/" className="offer">Offer</Link></li>
                                </ul>
                            </div>
                            <SearchComponent />
                            <div className="right-container">
                                <ul>
                                    <li className="account-icon-container">
                                        <Link to="/">
                                            <div><span className="account-icon"></span></div>
                                            <div>Sign In/Up</div>
                                        </Link>
                                    </li>
                                    <li><span className="cart-icon"></span></li>
                                    <li><span className="material-icons more-icon">more_vert</span></li>
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>
                <div id="sub-header">
                    <ul className="">
                        <li><Link to="/">Make Up</Link></li>
                        <li><Link to="/">Skin</Link></li>
                        <li><Link to="/">Hair</Link></li>
                        <li><Link to="/">Bath &amp; Body</Link></li>
                        <li><Link to="/">Herbal</Link></li>
                        <li><Link to="/">Fragrance</Link></li>
                        <li><Link to="/">Mom &amp; baby</Link></li>
                        <li><Link to="/">Wellness</Link></li>
                        <li><Link to="/">Gifts</Link></li>
                        <li><Link to="/" className="active">Men's Store</Link></li>
                        <li><Link to="/">LUXE</Link></li>
                        <li><Link to="/">Glam&amp;Fit</Link></li>
                        <li><Link to="/">Pop-up</Link></li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;