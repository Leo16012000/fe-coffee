import React, { useState, FormEvent } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Container,
} from '@material-ui/core';

const calculatePrice4 = (foodType: string, topping: string): number => {
  let basePrice = 3.0; // Base price for breakfast items

  if (foodType === 'sandwich') {
    basePrice += 1.0; // Additional $1 for sandwich
  } else if (foodType === 'bagel') {
    basePrice += 0.5; // Additional $0.5 for bagel
  }

  if (topping === 'creamCheese') {
    basePrice += 0.5; // Additional $0.5 for cream cheese topping
  }

  return basePrice;
};

const FoodOrderForm: React.FC = () => {
  const [foodType, setFoodType] = useState('');
  const [topping, setTopping] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const totalPrice = calculatePrice4(foodType, topping);
    setPrice(totalPrice);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Food Order
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="food-type-label">Food Type</InputLabel>
          <Select
            labelId="food-type-label"
            id="food-type"
            value={foodType}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              setFoodType(e.target.value as string)
            }
          >
            <MenuItem value="sandwich">Sandwich</MenuItem>
            <MenuItem value="bagel">Bagel</MenuItem>
          </Select>
        </FormControl>
        {foodType === 'bagel' && (
          <FormControl fullWidth margin="normal">
            <InputLabel id="topping-label">Topping</InputLabel>
            <Select
              labelId="topping-label"
              id="topping"
              value={topping}
              onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                setTopping(e.target.value as string)
              }
            >
              <MenuItem value="butter">Butter</MenuItem>
              <MenuItem value="creamCheese">Cream Cheese</MenuItem>
            </Select>
          </FormControl>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Order
        </Button>
      </form>
      {price > 0 && (
        <Typography variant="h6" align="center" style={{ marginTop: '1rem' }}>
          Price: ${price}
        </Typography>
      )}
    </Container>
  );
};

export default FoodOrderForm;
