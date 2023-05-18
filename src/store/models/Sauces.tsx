import { SauceEnum } from "../../enums/SauceEnum";

export default interface Sauce {
    name: SauceEnum;
    freePumps:number;
    pricePerPump: number;
    maximumPump: number;
  }