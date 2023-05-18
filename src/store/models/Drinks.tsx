import { DrinkEnum } from "../../enums/DrinkEnum";
import Temperatures from "./Temperatures";

export default interface Drinks {
    name: DrinkEnum;
    price: number;
  }