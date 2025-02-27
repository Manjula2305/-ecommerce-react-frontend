import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Import all your images here (MAKE SURE PATHS ARE CORRECT)
import pro1 from '../../ASSETS/pro1.jpg';
import pro2 from '../../ASSETS/pro2.jpg';
import pro3 from '../../ASSETS/pro3.jpg';
import pro4 from '../../ASSETS/pro4.jpg';
import pro5 from '../../ASSETS/pro5.jpg';
import pro6 from '../../ASSETS/pro6.jpg';
import pro7 from '../../ASSETS/pro7.jpg';
import pro8 from '../../ASSETS/pro8.jpg';
import pro9 from '../../ASSETS/pro9.jpg';
import pro10 from '../../ASSETS/pro10.jpg';

// Vegetables
import veg1 from '../../ASSETS/veg1.jpg';
import veg2 from '../../ASSETS/veg2.jpg';
import veg3 from '../../ASSETS/veg3.jpg';
import veg4 from '../../ASSETS/veg4.jpg';
import veg5 from '../../ASSETS/veg5.jpg';
import veg6 from '../../ASSETS/veg6.jpg';
import veg7 from '../../ASSETS/veg7.jpg';
import veg8 from '../../ASSETS/veg8.jpg';
import veg9 from '../../ASSETS/veg9.jpg';
import veg10 from '../../ASSETS/veg10.jpg';

// Cakes
import BlackForestCake from '../../ASSETS/BlackForestCake.jpg';
import RedVelvetCake from '../../ASSETS/RedVelvetCake.jpg';
import ChocolateLavaCake from '../../ASSETS/ChocolateLavaCake.jpg';
import CarrotCake from '../../ASSETS/CarrotCake.jpg';
import StrawberryShortcake from '../../ASSETS/StrawberryShortcake.jpg';
import GermanChocolateCake from '../../ASSETS/GermanChocolateCake.jpg';
import AppleCrumbleCake from '../../ASSETS/AppleCrumbleCake.jpg';
import HoneyCake1 from '../../ASSETS/HoneyCake1.jpg';

// Ice Cream
import Ice1 from '../../ASSETS/Ice1.jpg';
import Ice2 from '../../ASSETS/Ice2';
import Ice3 from '../../ASSETS/Ice3.jpg';
import Ice4 from '../../ASSETS/Ice4.jpg';
import Ice5 from '../../ASSETS/Ice5.jpg';
import Ice6 from '../../ASSETS/Ice6.jpg';
import Ice7 from '../../ASSETS/Ice7.jpg';
import Ice8 from '../../ASSETS/Ice8.jpg';
import Ice9 from '../../ASSETS/Ice9.jpg';
import Ice10 from '../../ASSETS/Ice10.jpg';

//chocolate
import choco1 from '../../ASSETS/choco1.jpg';
import choco4 from '../../ASSETS/choco4.jpg';
import choco5 from '../../ASSETS/choco5.jpg';
import choco6 from '../../ASSETS/choco6.jpg';
import choco7 from '../../ASSETS/choco7.webp';
import choco8 from '../../ASSETS/choco8.jpg';
import choco9 from '../../ASSETS/choco9.jpg';
import choco3 from '../../ASSETS/choco3.jpg';
import choco10 from '../../ASSETS/choco10.jpg';

//Sweet
import sweet1 from '../../ASSETS/sweet1.jpg';
import sweet2 from '../../ASSETS/sweet2.jpg';
import sweet3 from '../../ASSETS/sweet3.jpg';
import sweet4 from '../../ASSETS/sweet4.jpg';
import sweet5 from '../../ASSETS/sweet5.jpg';
import sweet6 from '../../ASSETS/sweet6.jpg';
import sweet7 from '../../ASSETS/sweet7.jpg';
import sweet8 from '../../ASSETS/sweet8.jpg';
import sweet9 from '../../ASSETS/sweet9.jpg';
import sweet10 from '../../ASSETS/sweet10.jpg';

import './AllProduct.css';

const AllProduct = ({ handleAddToCart }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const selectedCategory = queryParams.get('category');
    const [selectedWeights, setSelectedWeights] = useState({});

    const allProducts = [
        // Fruits
        { id: 1, productImage: pro1, productname: 'Cherry', weights: { '1 kg': 200, '2 kg': 380, '3 kg': 560 }, category: 'Fruits Session' },
        { id: 2, productImage: pro2, productname: 'Raspberry', weights: { '1 kg': 300, '2 kg': 580, '3 kg': 850 }, category: 'Fruits Session' },
        { id: 3, productImage: pro3, productname: 'Dragon Fruit', weights: { '1 each': 400, '2 each': 750 }, category: 'Fruits Session' },
        { id: 4, productImage: pro4, productname: 'Lychee Fruit', weights: { '1 kg': 250, '2 kg': 480 }, category: 'Fruits Session' },
        { id: 5, productImage: pro5, productname: 'Grapes', weights: { '1 kg': 320, '2 kg': 620 }, category: 'Fruits Session' },
        { id: 6, productImage: pro6, productname: 'Jackfruit', weights: { '1 kg': 100, '2 kg': 180, '3 kg': 250 }, category: 'Fruits Session' },
        { id: 7, productImage: pro7, productname: 'Guava', weights: { '1 kg': 60, '2 kg': 100, '3 kg': 150 }, category: 'Fruits Session' },
        { id: 8, productImage: pro8, productname: 'Watermelon', weights: { '1 kg': 70, '2 kg': 130, '3 kg': 160 }, category: 'Fruits Session' },
        { id: 9, productImage: pro9, productname: 'Mangoes', weights: { '1 kg': 65, '2 kg': 120, '3 kg': 170 }, category: 'Fruits Session' },
        { id: 10, productImage: pro10, productname: 'Banana', weights: { '1 kg': 50, '2 kg': 90, '3 kg': 180 }, category: 'Fruits Session' },

        // Vegetables
        { id: 11, productImage: veg1, productname: 'Potato', weights: { '1 kg': 50, '2 kg': 100, '3 kg': 180 }, category: 'Vegetables' },
        { id: 12, productImage: veg2, productname: 'Drumstick', weights: { '1 kg': 30, '2 kg': 60, '3 kg': 100 }, category: 'Vegetables' },
        { id: 13, productImage: veg3, productname: 'Lady Finger', weights: { '1 kg': 40, '2 kg': 75, '3 kg': 100 }, category: 'Vegetables' },
        { id: 14, productImage: veg4, productname: 'Carrot', weights: { '1 kg': 20, '2 kg': 40, '3 kg': 75 }, category: 'Vegetables' },
        { id: 15, productImage: veg5, productname: 'Tomato', weights: { '1 kg': 120, '2 kg': 200 }, category: 'Vegetables' },
        { id: 16, productImage: veg6, productname: 'Beans', weights: { '1 kg': 40, '2 kg': 80, '3 kg': 110 }, category: 'Vegetables' },
        { id: 17, productImage: veg7, productname: 'Brinjal', weights: { '1 kg': 60, '2 kg': 100, '3 kg': 150 }, category: 'Vegetables' },
        { id: 18, productImage: veg8, productname: 'Cabbage', weights: { '1 kg': 70, '2 kg': 130, '3 kg': 160 }, category: 'Vegetables' },
        { id: 19, productImage: veg9, productname: 'Beetroot', weights: { '1 kg': 50, '2 kg': 100, '3 kg': 180 }, category: 'Vegetables' },
        { id: 20, productImage: veg10, productname: 'Unripe Mangoes', weights: { '1 kg': 60, '2 kg': 100, '3 kg': 180 }, category: 'Vegetables' },

        //Cakes
        { id: 21, productImage: BlackForestCake, productname: 'Black Forest Cake', weights: { '1 kg': 500, '2 kg': 950, '3 kg': 1400, '4 kg': 1850 }, category: 'Cake' },
        { id: 22, productImage: RedVelvetCake, productname: 'Red Velvet Cake', weights: { '1 kg': 600, '2 kg': 1150, '3 kg': 1700, '4 kg': 2250 }, category: 'Cake' },
        { id: 23, productImage: ChocolateLavaCake, productname: 'Chocolate Lava Cake', weights: { '1 kg': 550, '2 kg': 1050, '3 kg': 1550, '4 kg': 2050 }, category: 'Cake' },
        { id: 24, productImage: CarrotCake, productname: 'Carrot Cake', weights: { '1 kg': 450, '2 kg': 850, '3 kg': 1250, '4 kg': 1650 }, category: 'Cake' },
        { id: 25, productImage: StrawberryShortcake, productname: 'Strawberry Shortcake', weights: { '1 kg': 500, '2 kg': 950, '3 kg': 1400, '4 kg': 1850 }, category: 'Cake' },
        { id: 26, productImage: GermanChocolateCake, productname: 'German Chocolate Cake', weights: { '1 kg': 580, '2 kg': 1100, '3 kg': 1620, '4 kg': 2140 }, category: 'Cake' },
        { id: 27, productImage: AppleCrumbleCake, productname: 'Apple Crumble Cake', weights: { '1 kg': 520, '2 kg': 1000, '3 kg': 1480, '4 kg': 1960 }, category: 'Cake' },
        { id: 28, productImage: HoneyCake1, productname: 'Honey Cake', weights: { '1 kg': 480, '2 kg': 920, '3 kg': 1360, '4 kg': 1800 }, category: 'Cake' },

        //Ice Cream
        { id: 29, productImage: Ice1, productname: 'Vanilla Ice Cream', weights: { '500ml': 150, '1L': 280, '2L': 500 }, category: 'Ice Cream' },
        { id: 30, productImage: Ice2, productname: 'Chocolate Ice Cream', weights: { '500ml': 160, '1L': 300, '2L': 550 }, category: 'Ice Cream' },
        { id: 31, productImage: Ice3, productname: 'Strawberry Ice Cream', weights: { '500ml': 140, '1L': 270, '2L': 490 }, category: 'Ice Cream' },
        { id: 32, productImage: Ice4, productname: 'Cookies and Cream Ice Cream', weights: { '500ml': 170, '1L': 320, '2L': 600 }, category: 'Ice Cream' },
        { id: 33, productImage: Ice5, productname: 'Mint Chocolate Chip Ice Cream', weights: { '500ml': 180, '1L': 340, '2L': 620 }, category: 'Ice Cream' },
        { id: 34, productImage: Ice6, productname: 'Butter Pecan Ice Cream', weights: { '500ml': 175, '1L': 330, '2L': 610 }, category: 'Ice Cream' },
        { id: 35, productImage: Ice7, productname: 'Rocky Road Ice Cream', weights: { '500ml': 190, '1L': 350, '2L': 650 }, category: 'Ice Cream' },
        { id: 36, productImage: Ice8, productname: 'Mango Ice Cream', weights: { '500ml': 155, '1L': 290, '2L': 520 }, category: 'Ice Cream' },
        { id: 37, productImage: Ice9, productname: 'Coffee Ice Cream', weights: { '500ml': 165, '1L': 310, '2L': 570 }, category: 'Ice Cream' },
        { id: 38, productImage: Ice10, productname: 'Pistachio Ice Cream', weights: { '500ml': 200, '1L': 370, '2L': 690 }, category: 'Ice Cream' },

        //chocolate
        { id: 39, productImage: choco1, productname: 'Dark Chocolate', weights: { '500ml': 150, '1L': 280, '2L': 500 }, category: 'Chocolate' },
        { id: 40, productImage: choco4, productname: 'Nuts Chocolate', weights: { '500ml': 140, '1L': 270, '2L': 490 }, category: 'Chocolate' },
        { id: 41, productImage: choco5, productname: 'Mint Chocolate', weights: { '500ml': 170, '1L': 320, '2L': 600 }, category: 'Chocolate' },
        { id: 42, productImage: choco6, productname: ' hazelnut chocolate', weights: { '500ml': 180, '1L': 340, '2L': 620 }, category: 'Chocolate' },
        { id: 43, productImage: choco7, productname: 'kitkat chocolate', weights: { '500ml': 175, '1L': 330, '2L': 610 }, category: 'Chocolate' },
        { id: 44, productImage: choco8, productname: 'Snickers', weights: { '500ml': 190, '1L': 350, '2L': 650 }, category: 'Chocolate' },
        { id: 45, productImage: choco9, productname: 'Dairy Milk', weights: { '500ml': 155, '1L': 290, '2L': 520 }, category: 'Chocolate' },
        { id: 46, productImage: choco3, productname: 'Ferrero Rocher Chocolate', weights: { '500ml': 150, '1L': 280, '2L': 500 }, category: 'Chocolate' },
        { id: 47, productImage: choco10, productname: 'Snickers ', weights: { '500ml': 150, '1L': 280, '2L': 500 }, category: 'Chocolate' },

        //sweet
        { id: 48, productImage: sweet1, productname: 'Gulab Jamun', weights: { '1 kg': 500, '2 kg': 1000, '3 kg': 1500 }, category: 'Sweet' },
        { id: 49, productImage: sweet2, productname: 'Baklava', weights: { '1 kg': 1500, '2 kg': 2800, '3 kg': 4000 }, category: 'Sweet' },
        { id: 50, productImage: sweet3, productname: 'Tiramisu', weights: { '1 kg': 1200, '2 kg': 2300, '3 kg': 3400 }, category: 'Sweet' },
        { id: 51, productImage: sweet4, productname: 'Rasgulla', weights: { '1 kg': 400, '2 kg': 800, '3 kg': 1200 }, category: 'Sweet' },
        { id: 52, productImage: sweet5, productname: 'Jalebi', weights: { '1 kg': 350, '2 kg': 650 }, category: 'Sweet' },
        { id: 53, productImage: sweet6, productname: 'Ladoo', weights: { '1 kg': 450, '2 kg': 900, '3 kg': 1300 }, category: 'Sweet' },
        { id: 54, productImage: sweet7, productname: 'Kaju Katli', weights: { '1 kg': 1200, '2 kg': 2300, '3 kg': 3400 }, category: 'Sweet' },
        { id: 55, productImage: sweet8, productname: 'Mysore Pak', weights: { '1 kg': 700, '2 kg': 1300, '3 kg': 1800 }, category: 'Sweet' },
        { id: 56, productImage: sweet9, productname: 'Modak', weights: { '1 kg': 800, '2 kg': 1500, '3 kg': 2200 }, category: 'Sweet' },
        { id: 57, productImage: sweet10, productname: 'Halwa', weights: { '1 kg': 600, '2 kg': 1100, '3 kg': 1600 }, category: 'Sweet' }
    ];

    const filteredProducts = selectedCategory
        ? allProducts.filter(product => product.category === selectedCategory)
        : allProducts;

    const handleAddToCartClick = (product) => {
        const selectedWeight = selectedWeights[product.id] || Object.keys(product.weights)[0];
        const price = product.weights[selectedWeight] || 0;

        // Ensure product object is not directly mutated
        const productToAdd = { ...product, price: price, selectedWeight: selectedWeight, productImage: product.productImage };

        handleAddToCart(productToAdd); // Pass the ENTIRE product
        alert(`${product.productname} added to cart!`);
    };

    return (
        <div className="allproducts-container">
            <div className="prev-button-container">
                <button className="prev-button" onClick={() => navigate('/categories')}>← Previous</button>
            </div>
            <h1><strong>{selectedCategory || 'All Products'}</strong></h1>
            <div className="products-container">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => {
                        const selectedWeight = selectedWeights[item.id] || Object.keys(item.weights)[0];
                        const price = item.weights[selectedWeight] || 0;
                        return (
                            <div key={item.id} className="product-card">
                                <div className="product-image-container">
                                    <img src={item.productImage} alt={item.productname} className="product-image" />
                                </div>
                                <h2 className="product-name">{item.productname}</h2>
                                <p className="product-price"><strong>Price:</strong> ₹{price.toFixed(2)}</p>

                                <select
                                    className="weight-selector"
                                    onChange={(e) => setSelectedWeights({ ...selectedWeights, [item.id]: e.target.value })}
                                    value={selectedWeight}
                                >
                                    {Object.keys(item.weights).map((weight) => (
                                        <option key={weight} value={weight}>{weight}</option>
                                    ))}
                                </select>

                                <button className="add-button" onClick={() => handleAddToCartClick(item)}>Add to Cart</button>
                            </div>
                        );
                    })
                ) : (
                    <p>No products found for this category.</p>
                )}
            </div>
        </div>
    );
};

export default AllProduct;