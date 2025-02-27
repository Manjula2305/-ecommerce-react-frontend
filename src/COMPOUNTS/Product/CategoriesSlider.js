import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoriesSlider.css';

import prologo1 from '../../ASSETS/prologo1.jpg';
import prologo2 from '../../ASSETS/prologo2.jpg';
import prologo3 from '../../ASSETS/prologo3.jpg';
import prologo5 from '../../ASSETS/prologo5.jpg';
import prologo6 from '../../ASSETS/prologo6.jpg';
import prologo7 from '../../ASSETS/prologo7.jpg';
import prologo8 from '../../ASSETS/prologo8.jpg';
import prologo9 from '../../ASSETS/prologo9.jpg';

const CategoriesSlider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [navigate]);

  const categories = [
    { id: 1, categoryImage: prologo1, categoryName: 'Fruits Session' },
    { id: 2, categoryImage: prologo2, categoryName: 'Vegetables' },
    { id: 3, categoryImage: prologo3, categoryName: 'Cake' },
    { id: 4, categoryImage: prologo5, categoryName: 'Sweet' },
    { id: 5, categoryImage: prologo7, categoryName: 'Ice Cream' },
    { id: 6, categoryImage: prologo8, categoryName: 'Chocolate' },
    { id: 7, categoryImage: prologo9, categoryName: 'Mixture Snacks' },
    { id: 8, categoryImage: prologo6, categoryName: 'Biscuit' },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/allproducts?category=${encodeURIComponent(categoryName)}`); // Corrected route
  };

  return (
    <div className="categories_slider">
      <h2 className="categories-title">Categories</h2> {/* Added title */}
      <button className="prev-btn" onClick={() => navigate('/')}>
        ← Previous
      </button>

      <div className="categories-container">
        {categories.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => handleCategoryClick(item.categoryName)}
          >
            <div className="category-image-wrapper">
              <img src={item.categoryImage} alt={item.categoryName} />
            </div>
            <div className="category-content">
              <h3>{item.categoryName}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSlider;