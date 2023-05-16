import { DrinkType } from "../../enums/DrinkType";
import { Size } from "../../enums/Size";
export class Calculate{
    calculatePrice1(drinkType: DrinkType, size: Size, whippedCream: boolean): number {
        let basePrice: number = 2;
        let priceAdjustments: number = 0;
      
        // Adjust price based on drink type
        switch (drinkType) {
          case DrinkType.HOT:
            break;
          case DrinkType.COLD:
          case DrinkType.BLENDED:
            priceAdjustments += 1;
            break;
          default:
            console.log('Invalid drink type.');
            return -1;
        }
      
        // Adjust price based on size
        switch (size) {
          case Size.S:
            break;
          case Size.M:
            priceAdjustments += 0.5;
            break;
          case Size.L:
            if (drinkType !== DrinkType.COLD && drinkType !== DrinkType.BLENDED) {
              console.log('L size is not available for this drink type.');
              return -1;
            }
            priceAdjustments += 1;
            break;
          default:
            console.log('Invalid size.');
            return -1;
        }
      
        // Adjust price for whipped cream topping
        if (whippedCream) {
          priceAdjustments += 0.5;
        }
      
        // Calculate total price
        const totalPrice: number = basePrice + priceAdjustments;
      
        return totalPrice;
      }
};