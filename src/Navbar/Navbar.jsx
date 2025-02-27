import React from 'react'; // Remove useState and useEffect
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../ASSETS/logo.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ cartquantity, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    alert("Logout Successfully");
  };

  return (
    <nav>
      <div className="container1">
        <img src={logo} alt="logo" className="logo" />
        <div className="Searchbar">
          <input type="text" placeholder="Search for Products" className="Search" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="button-group">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/categories')}>Categories</button>
          <button onClick={() => navigate('/cart')}>
            {cartquantity > 0 ? `Go to Cart(${cartquantity})` : 'Go to Cart'}
          </button>
          <button onClick={() => navigate('/previous-orders')}>My Order (0)</button>
        </div>
        <div className="subcontainer1">
          <div className="Cart">
            <span className="qty">{cartquantity}</span> {/* Use the prop */}
            🛒
          </div>
          <Link to="/contact">
            {/* Contact Link */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
          {isLoggedIn ? (
            <button className="login-logout-button" onClick={handleLogout}>
              LOGOUT
            </button>
          ) : (
            <button className="login-logout-button" onClick={handleLogin}>
              LOGIN
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;