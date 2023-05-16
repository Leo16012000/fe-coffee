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

const CoffeeOrderForm: React.FC = () => {
  const [drinkType, setDrinkType] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [whippedCream, setWhippedCream] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);

  const calculatePrice = () => {
    let basePrice = 2.0; // Base price for a small hot drink without cream

    // Adjust price based on drink type
    if (drinkType === 'blended') {
      basePrice += 1.0;
    }

    // Adjust price based on size
    if (size === 'M') {
      basePrice += 0.5;
    } else if (size === 'L') {
      if (drinkType === 'cold' || drinkType === 'blended') {
        basePrice += 1.0;
      } else {
        console.log('L size is only available for cold and blended drinks.');
      }
    }

    // Adjust price based on whipped cream topping
    if (whippedCream) {
      basePrice += 0.5;
    }

    setPrice(basePrice);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    calculatePrice();
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Coffee Order Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="drink-type-label">Drink Type</InputLabel>
          <Select
            labelId="drink-type-label"
            id="drink-type"
            value={drinkType}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              setDrinkType(e.target.value as string)
            }
          >
            <MenuItem value="hot">Hot</MenuItem>
            <MenuItem value="cold">Cold</MenuItem>
            <MenuItem value="blended">Blended</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="size-label">Size</InputLabel>
          <Select
            labelId="size-label"
            id="size"
            value={size}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              setSize(e.target.value as string)
            }
          >
            <MenuItem value="S">S</MenuItem>
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="L">L</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={whippedCream}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setWhippedCream(e.target.checked)
              }
              color="primary"
            />
          }
          label="Whipped Cream Topping"
        />
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
      }
  export default CoffeeOrderForm
