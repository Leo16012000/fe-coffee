import React from 'react';
import CoffeeOrderForm from '../../components/CoffeeOrderForm';
import SearchAppBar from '../../components/SearchAppBar';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>Welcome to Coffee House</h1>
        <p>Discover the finest coffee in town</p>
      </div>
      <div className="featured-section">
        <h2>Featured Items</h2>
        <div className="item-card">
          <img src="/images/latte.jpg" alt="Latte" />
          <h3>Latte</h3>
          <p>A smooth and creamy espresso-based drink</p>
        </div>
        <div className="item-card">
          <img src="/images/cappuccino.jpg" alt="Cappuccino" />
          <h3>Cappuccino</h3>
          <p>A classic Italian favorite with a perfect balance of espresso and milk</p>
        </div>
        <div className="item-card">
          <img src="/images/mocha.jpg" alt="Mocha" />
          <h3>Mocha</h3>
          <p>A delicious blend of espresso, chocolate, and steamed milk</p>
        </div>
        <CoffeeOrderForm/>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Coffee House. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
