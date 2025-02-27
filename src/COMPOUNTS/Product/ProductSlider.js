import React from 'react';
import './ProductSlider.css';
import CategoriesSlider from './CategoriesSlider';
import AllProduct from './AllProduct';


const ProductSlider = () => {
  return (
    <div className='productslider'>
      <CategoriesSlider />
      <AllProduct/>
    </div>
  );
};

export default ProductSlider;
