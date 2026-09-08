import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './App.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night and removes toxins like formaldehyde.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Resilient houseplant that filters carbon monoxide and xylene.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg",
          description: "Elegant white blooms that break down toxic gases like ammonia.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114421_1280.jpg",
          description: "Lush green fronds that add natural humidity and purify indoor air.",
          cost: "$14"
        },
        {
          name: "ZZ Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/14/19/58/zz-plant-5917804_1280.jpg",
          description: "Low-maintenance glossy plant thriving in low light environments.",
          cost: "$20"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2017/05/08/13/15/aloe-vera-2295368_1280.jpg",
          description: "Purifies air of benzene while providing soothing gel for burns.",
          cost: "$10"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80",
          description: "Calming floral fragrance known to reduce anxiety and stress.",
          cost: "$22"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?auto=format&fit=crop&w=600&q=80",
          description: "Sweet, exotic fragrance promoting peaceful rest and relaxation.",
          cost: "$25"
        },
        {
          name: "Rosemary",
          image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80",
          description: "Pine-like herbal aroma that improves focus and memory retention.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
          description: "Refreshing mint scent ideal for teas, drinks, and culinary dishes.",
          cost: "$12"
        },
        {
          name: "Lemon Balm",
          image: "https://images.unsplash.com/photo-1596073413225-300dd1d416c2?auto=format&fit=crop&w=600&q=80",
          description: "Zesty citrus smell that brightens mood and deters pests.",
          cost: "$14"
        },
        {
          name: "Eucalyptus",
          image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80",
          description: "Fresh invigorating scent supporting healthy respiratory pathways.",
          cost: "$18"
        }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Echinacea",
          image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80",
          description: "Coneflower traditionally used to boost immunity and fight colds.",
          cost: "$16"
        },
        {
          name: "Peppermint",
          image: "https://images.unsplash.com/photo-1603569283847-be29b8e3bf1d?auto=format&fit=crop&w=600&q=80",
          description: "Natural digestive aid relieving stomach discomfort and headaches.",
          cost: "$13"
        },
        {
          name: "Chamomile",
          image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80",
          description: "Soothing herb renowned for bedtime relaxation and digestion.",
          cost: "$15"
        },
        {
          name: "Calendula",
          image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
          description: "Marigold blossom infused in creams for skin healing and repair.",
          cost: "$14"
        },
        {
          name: "Gotu Kola",
          image: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=600&q=80",
          description: "Revered herb in Ayurvedic medicine for cognitive vitality.",
          cost: "$19"
        },
        {
          name: "Thyme",
          image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=80",
          description: "Antimicrobial herb packed with antioxidants and essential oils.",
          cost: "$11"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand" onClick={onHomeClick}>
          <img
            src="https://cdn.pixabay.com/photo/2016/04/02/19/41/logo-1303613_1280.png"
            alt="Paradise Nursery Logo"
            className="navbar-logo"
          />
          <div className="navbar-title">
            <h3>Paradise Nursery</h3>
            <p>Where Greenery Meets Elegance</p>
          </div>
        </div>

        <div className="navbar-links">
          <span className="nav-link" onClick={onHomeClick}>
            Home
          </span>
          <span className="nav-link" onClick={() => setShowCart(false)}>
            Plants
          </span>
          <div className="cart-icon-container" onClick={() => setShowCart(true)}>
            <svg
              className="cart-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="cart-count">{totalCartCount}</span>
          </div>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="product-grid-container">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="product-list-grid">
                {categoryObj.plants.map((plant, plantIdx) => {
                  const added = isPlantInCart(plant.name);
                  return (
                    <div key={plantIdx} className="product-card">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="product-image"
                      />
                      <div className="product-info">
                        <h3 className="product-title">{plant.name}</h3>
                        <p className="product-price">{plant.cost}</p>
                        <p className="product-description">{plant.description}</p>
                        <button
                          className="add-to-cart-btn"
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                        >
                          {added ? "Added to Cart" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
