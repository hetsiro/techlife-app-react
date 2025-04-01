import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Divider } from '@mui/material';
import BasicModal from './BasicModal';
import { getItemById } from '../../src/techlife/helpers/getItemById';
import { useContext } from 'react';
import { TechlifeContext } from '../../src/techlife/context/techlifeContext';

export default function MediaCard({ id, name, specs, brand, type, price }) {


  const { setCart, setCartCount } = useContext( TechlifeContext )

  const onHandleAddToCart = () => {

    let newCart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = getItemById(id);

    if(newCart.length === 0){
      newCart = [{...item, cant: 1}];
      setCart(newCart)
      localStorage.setItem('cart',JSON.stringify( newCart ));
    }

    else {
      const itemFound = newCart.find((itemCart) => (itemCart.id === id));

      if(itemFound){
        itemFound.cant++;
      }

      else {
        newCart = [ ...newCart, { ...item, cant: 1 } ]
      }

      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify( newCart ));
    }

    const cant = newCart.reduce((acumulador, cartItem) => {
      acumulador += cartItem.cant;
      return acumulador;
    },0)

    setCartCount(cant);

  }

  return (
    <Card
      sx={{
        width: 350,
        padding: 1,
        boxShadow: 5,
      }}
    >
      <CardMedia
        sx={{
          height: 350,
        }}
        image={`./assets/items/${id}.png`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='button'
          color='primary.main'
          component="div"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet suscipit massa.
        </Typography>
          <Divider
            sx={{ my: 2 }}
          >
            <Chip label="Specs" size="small" />
          </Divider>
          <Typography 
            variant="h6"
            color='primary.main'
            textAlign='center'
          >
          ${price} USD
          </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <BasicModal id={ id } name={ name } specs={ specs } brand={ brand } type={ type } />
        <Button
          sx={{ my: 2, ml: '0 !important' }}
          variant='contained'
          size="small"
          fullWidth
          onClick={ onHandleAddToCart }
        >Add to cart</Button>
      </CardActions>
    </Card>
  );
}