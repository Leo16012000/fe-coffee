import DrinkOptionals from "./DrinkOptionals";
import Drinks from "./Drinks";
import Size from "./Sizes";
import Temperatures from "./Temperatures";

export default class DrinkOrders{
    constructor(drink:Drinks,size:Size,temperature:Temperatures,drinkOptionals:DrinkOptionals[]){
      this.drink = drink,
      this.size = size,
      this.temperature = temperature,
      this.drinkOptionals = drinkOptionals
    }
    drink!: Drinks;
    size!: Size;
    temperature!: Temperatures;
    drinkOptionals!: DrinkOptionals[]
  }