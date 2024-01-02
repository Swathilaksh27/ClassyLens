import React, { useState } from 'react';
import './LandingPage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "./About.css"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the arrow components outside the LandingPage component
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "blue" }}
            onClick={onClick}
        />
    );
};

function LandingPage() {
    const email = localStorage.getItem("email");
    const [showUserDetails, setShowUserDetails] = useState(false);

    const handleAccountClick = () => {
        setShowUserDetails(!showUserDetails);
    };

    const logout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("token");
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <div>
            <Navbar />
            <div className="account-container" onClick={handleAccountClick}>
                <div className={`account-icon-container${showUserDetails ? ' active' : ''}`}>
                    <AccountCircleIcon className="account-icon" />
                    {showUserDetails && (
                        <div className="user-details">
                            <p>{email}</p>
                            <Link to="/">
                                <button onClick={logout}>Logout</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="banner-container">
            <div className="text-center">
            <h1 className="clear">Welcome to Classy Lens</h1>
            <h4 className="quote">See the world through a different lens.</h4>
            </div>
            </div>
    
            
                    
            
            
            <div><Footer /></div>
        </div>
    );
}

export default LandingPage;
