import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="landing-title">Paradise Nursery</h1>
            <div className="divider"></div>
            <p className="landing-subtitle">
              Where Greenery Meets Elegance - Premium Houseplants for Every Home
            </p>
            
            {/* AboutUs Component */}
            <AboutUs />

            {/* Get Started Button */}
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={() => setShowProductList(false)} />
      )}
    </div>
  );
}

export default App;
