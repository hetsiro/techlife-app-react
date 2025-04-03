import { Grid2, Typography } from "@mui/material"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export const EmptyCart = () => {
  return (
    <Grid2
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
  >
      <RemoveShoppingCartIcon sx={{ fontSize: "50px", color: 'red' }} />
      <Typography variant="h6" pt={4}>Oh :( your cart is empty, please add your items</Typography>
    </Grid2>
  );
}