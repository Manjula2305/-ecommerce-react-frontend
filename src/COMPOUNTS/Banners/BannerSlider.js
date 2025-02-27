// BannerSlider.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BannerSlider.css';

const BannerSlider = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleShopMoreClick = () => {
        if (isLoggedIn) {
            navigate('/categories');
        } else {
            navigate('/login');
        }
    };

    const banners = [
        {
            id: 1,
            image: "https://media.istockphoto.com/id/1128687124/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=pjYffGgw3i6rCq9YzBSO1mJQDU-RJI5B1gk9YpDAkE4=",
            title: "Farm-Fresh Goodness, Just for You!",
            description: "Enjoy the freshest vegetables and fruits, handpicked for quality and taste. Eat healthy, stay fresh!" 
          },
        {
            id: 2,
            image: "https://media.istockphoto.com/id/184136023/photo/fresh-organic-strawberries.jpg?s=612x612&w=0&k=20&c=dxwHhhqGh3DPoy1f08_VOIHBS6SrKy0AZtROowKNk3o=",
            title: "Cherries and Berries",
            description: "Summer season is here, and I couldn’t be more delighted",
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Check if the component should be rendered based on the route
    if (location.pathname === '/' || location.pathname === '/home') { // Only render on / or /home
        return (
            <div className="bannerslide">
                <Slider {...settings}>
                    {banners.map((item) => (
                        <div className="imagecont" key={item.id}>
                            <img src={item.image} alt="banner" />
                            <div className="content">
                                <h1>{item.title}</h1>
                                <span>{item.description}</span>
                                <button onClick={handleShopMoreClick}>Shop More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }

    return null; // Don't render on other routes
};

export default BannerSlider;