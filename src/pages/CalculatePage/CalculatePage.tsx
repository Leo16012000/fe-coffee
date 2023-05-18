import React from 'react';
import SearchAppBar from '../../components/SearchAppBar';
import './CalculatePage.scss';
import DrinkOrders from '../../store/models/DrinkOrders';
import Sizes from '../../store/models/Sizes';
import {TemperatureEnum } from '../../enums/TemperatureEnum';
import { SizeEnum } from '../../enums/SizeEnum';
import Optionals from '../../store/models/DrinkOptionals';
import Temperatures from '../../store/models/Temperatures';
import { DrinkEnum } from '../../enums/DrinkEnum';
import { OptionalEnum } from '../../enums/OptionalDrinkEnum';
import Sauces from '../../store/models/Sauces';
import { SauceEnum } from '../../enums/SauceEnum';
import Foods from '../../store/models/Foods';
import { FoodEnum } from '../../enums/FoodEnum';
import Drinks from '../../store/models/Drinks';
import DrinkOptionals from '../../store/models/DrinkOptionals';
import DrinkOrderForm from '../../components/DrinkOrderForm';
import FoodOrderForm from '../../components/FoodOrderForm';
// class Calculate{
//   static drinkOrders:DrinkOrders[] = [];
//   static drink:Drinks;
//   static size:Sizes;
//   static temperature: Temperatures
//   static drinkOptionals:DrinkOptionals[] = [];
//   saveDrinkOrder(): void{
//     let drinkOrder:DrinkOrders = 
//     new DrinkOrders(Calculate.drink, Calculate.size, Calculate.temperature, Calculate.drinkOptionals)
//   }
//   calculatePrice(): number {      
//       return totalPrice;
//     }
// };
const CalculatePage: React.FC = () => {
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
  let optionals:Optionals[] = [{name: OptionalEnum.MILK, price: 0.5}]
  let sauces:Sauces[] = [{name: SauceEnum.CHOCOLATE, freePumps: 2, pricePerPump: 0.5, maximumPump: 6}]
  let foods:Foods[] = [{name: FoodEnum.SANDWICH,price: 3},
    {name: FoodEnum.BAGEL,price: 3}];
  return (
    <div className="homepage">
      <div className="form">
        <DrinkOrderForm/>
        <FoodOrderForm/>
      </div>
    </div>
  );
};

export default CalculatePage;
