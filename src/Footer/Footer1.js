import React from "react";
import veg1 from "../../src/ASSETS/veg1.jpg";
import "./Footer1.css";

const Footer1 = () => {
  return (
    <footer className="footer1">
      <div className="footer-container">
        <div className="footer-left">
          <img src={veg1} alt="Fresh Vegetables" className="footer-image" />
        </div>
        <div className="footer-right">
        <h1 className="footer-title">Harvested with Care, Delivered with Love</h1>
<p className="footer-text">
  ✅ Experience the goodness of farm-fresh vegetables, handpicked for quality and freshness.  
  <br />
  🌿 Nourish your body with nature’s best, because healthy eating starts with fresh choices! ✨
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer1;
