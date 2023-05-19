import React, { ChangeEvent } from 'react';
import SearchAppBar from '../../components/SearchAppBar';
import './CalculatePage.scss';
import DrinkOrders from '../../store/models/DrinkOrders';
import Sizes from '../../store/models/Sizes';
import {TemperatureEnum } from '../../enums/TemperatureEnum';
import { SizeEnum } from '../../enums/SizeEnum';
import Optionals from '../../store/models/DrinkOptionals';
import Temperatures from '../../store/models/Temperatures';
import { DrinkEnum } from '../../enums/DrinkEnum';
import { DrinkOptionalEnum} from '../../enums/OptionalDrinkEnum';
import Sauces from '../../store/models/Sauces';
import { SauceEnum } from '../../enums/SauceEnum';
import Foods from '../../store/models/Foods';
import { FoodEnum } from '../../enums/FoodEnum';
import Drinks from '../../store/models/Drinks';
import DrinkOptionals from '../../store/models/DrinkOptionals';
import DrinkOrderForm from '../../components/DrinkOrderForm';
import FoodOrderForm from '../../components/FoodOrderForm';
class Calculate{
  static drinkOrder:DrinkOrders;
  static drinkOrders:DrinkOrders[] = [];
  static drink:Drinks;
  static size:Sizes;
  static temperature: Temperatures
  static drinkOptionals:DrinkOptionals[] = [];
  saveDrinkOrder(): void{
    Calculate.drinkOrders.push(new DrinkOrders(Calculate.drink, Calculate.size, Calculate.temperature, Calculate.drinkOptionals))
  }
  static calculatePrice(): number {      
      return 0;
    }
};
function handleTemperatureChange(event: ChangeEvent<HTMLSelectElement>): void {
  throw new Error('Function not implemented.');
}

function handleSizeChange(event: ChangeEvent<HTMLSelectElement>): void {
  throw new Error('Function not implemented.');
}

function handleWhippedCreamChange(event: ChangeEvent<HTMLInputElement>): void {
  throw new Error('Function not implemented.');
}
const CalculatePage: React.FC = () => {
  Calculate.drinkOrder.temperature.name = TemperatureEnum.HOT
  Calculate.drinkOrder.size.name = SizeEnum.S
  let temperatures:Temperatures[] = 
  [{name: TemperatureEnum.HOT,price: 0},
    {name: TemperatureEnum.COLD,price: 0},
    {name: TemperatureEnum.BLENDED,price: 1}];
    let drinks:Drinks[] = 
  [{name: DrinkEnum.COFFEE,price: 2},
    {name: DrinkEnum.MILKTEA,price: 2.25}];
  let sizes:Sizes[] = [{name: SizeEnum.S, price: 0}, 
    {name: SizeEnum.M, price: 0.5},
    {name: SizeEnum.L, price: 1},
    {name: SizeEnum.XL, price: 1.5}];
  let drinkOptionals:Optionals[] = [{name: DrinkOptionalEnum.MILK, price: 0.5, isChoosen: false}, {name: DrinkOptionalEnum.WHIPPED_CREAM, price: 0.5, isChoosen: false}]
  let sauces:Sauces[] = [{name: SauceEnum.CHOCOLATE, freePumps: 2, pricePerPump: 0.5, maximumPump: 6}]
  let foods:Foods[] = [{name: FoodEnum.SANDWICH,price: 3},
    {name: FoodEnum.BAGEL,price: 3}];
    return (
      <div>
        <h2>Order Form</h2>
        <div>
          <label>
            Drink Type:
            <select value={Calculate.drinkOrder.temperature.name} onChange={handleTemperatureChange}>
              {temperatures.forEach(element => {
                <option value={element.name}>{element.name}</option>
              })}
            </select>
          </label>
        </div>
        <div>
          <label>
            Size:
            <select value={Calculate.drinkOrder.size.name} onChange={handleSizeChange}>
              <option value="S">S</option>
              <option value="M">M</option>
              {Calculate.drinkOrder.temperature.name !== "HOT" && <option value="L">L</option>}
            </select>
          </label>
        </div>
        <div>
          {drinkOptionals.forEach(e=>{
            return <label>
            {e.name}
            <input
              type="checkbox"
              checked={Calculate.drinkOrder.drinkOptionals.includes(i=>i.name===e.name)}
              onChange={handleWhippedCreamChange}
            />
            {/* {order.whippedCream === "with" ? "with" : "without"} */}
          </label> 
          })}
        </div>
        <div>
          <h3>Total Price: ${Calculate.calculatePrice()}</h3>
        </div>
      </div>
    );
};

export default CalculatePage;
