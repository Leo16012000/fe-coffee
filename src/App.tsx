import React, { useState, ChangeEvent } from 'react';
import './App.scss';
import CoffeeOrderForm from './components/CoffeeOrderForm';
import SearchAppBar from './components/SearchAppBar';
import HomePage from './pages/HomePage/HomePage';

interface CoffeeOrder {
  drinkType: string;
  size: string;
  whippedCream: boolean;
}

const App: React.FC = () => {
  // const [order, setOrder] = useState<CoffeeOrder>({
  //   drinkType: '',
  //   size: '',
  //   whippedCream: false,
  // });
  // const [price, setPrice] = useState<number>(0);

  // const handleOptionChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
  //   const { name, value, type } = event.target;
  //   const optionValue = type === 'checkbox' ? true : value;

  //   setOrder((prevOrder) => ({
  //     ...prevOrder,
  //     [name]: optionValue,
  //   }));
  // };

  // const calculatePrice = (): void => {
  //   // Implement your price calculation logic here based on the order
  //   // You can use the calculatePrice1 function as an example
  //   let totalPrice = 0;

  //   // Perform the necessary calculations based on the selected options in the order object
  //   // and update the totalPrice accordingly

  //   setPrice(totalPrice);
  // };

  // const handleBuy = (): void => {
  //   // Perform any actions needed when the user clicks on the "Buy" button
  //   // This function can be customized based on your requirements
  //   alert(`Thank you for your purchase! Your total price is $${price.toFixed(2)}.`);
  // };

  // return (
  //   <div className="coffee-shop">
  //     <h2>Coffee Shop</h2>
  //     <div className="order-form">
  //       <label>
  //         Drink Type:
  //         <select name="drinkType" value={order.drinkType} onChange={handleOptionChange}>
  //           <option value="">Select a drink type</option>
  //           <option value="hot">Hot Coffee</option>
  //           <option value="cold">Cold Coffee</option>
  //           <option value="blended">Blended Coffee</option>
  //           <option value="milk tea">Milk Tea</option>
  //         </select>
  //       </label>
  //       <label>
  //         Size:
  //         <select name="size" value={order.size} onChange={handleOptionChange}>
  //           <option value="">Select a size</option>
  //           <option value="S">Small</option>
  //           <option value="M">Medium</option>
  //           {(order.drinkType === 'cold' || order.drinkType === 'blended') && <option value="L">Large</option>}
  //           <option value="XL">Extra Large</option>
  //         </select>
  //       </label>
  //       {order.drinkType === 'hot' && (
  //         <div>
  //           <label>
  //             Whipped Cream:
  //             <input
  //               type="checkbox"
  //               name="whippedCream"
  //               checked={order.whippedCream}
  //               onChange={handleOptionChange}
  //             />
  //           </label>
  //         </div>
  //       )}
  //       <button className="calculate-price-btn" onClick={calculatePrice} disabled={!order.drinkType || !order.size}>
  //         Calculate Price
  //       </button>
  //     </div>
  //     {price > 0 && (
  //       <div className="order-summary">
  //         <h3>Total Price: ${price.toFixed(2)}</h3>
  //         <button className="buy-btn" onClick={handleBuy}>
  //           Buy
  //         </button>
  //       </div>
  //     )}
  //   </div>
  // );
  return<><HomePage/></>
};

export default App;
