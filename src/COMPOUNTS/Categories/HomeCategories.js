import React from 'react';
import './HomeCategories.css';
import img2 from '../../ASSETS/img2.jpg';   // Fruits
import img3 from '../../ASSETS/img3.jpg';   // Grilled Chicken
import img4 from '../../ASSETS/img4.jpg';   // Dry Fruits
import img5 from '../../ASSETS/img5.jpg';   // Dairy Products

const categories = [
  { 
      img: img2, 
      title: 'Fresh Vegetables', 
      description: 'Get farm-fresh vegetables delivered to your doorstep' 
  },
  { 
      img: img3, 
      title: 'Healthy Fruits', 
      description: 'Buy fresh and juicy fruits for a healthy lifestyle.' 
  },
  { 
      img: img4, 
      title: 'Premium Dry Fruits', 
      description: 'Boost your health with high-quality dry fruits.' 
  },
  { 
      img: img5, 
      title: 'Dairy & Milk Products', 
      description: 'Get fresh dairy products, milk, and cheese.' 
  }
];

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      {categories.map((item, index) => (
        <div key={index} className='container'>
          <img src={item.img} alt={item.title} />
          <div className='content'>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeCategories;
