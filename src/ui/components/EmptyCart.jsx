import { Grid2, Typography } from "@mui/material"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


export const EmptyCart = () => {
  return (
    <Grid2 container direction='column' width='100%' justifyContent='center' alignItems='center' spacing={2} >
      <RemoveShoppingCartIcon sx={{ fontSize: "100px", color: 'red' }} />
      <Typography variant="h6">Add your items</Typography>
    </Grid2>
  )
}
