import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Divider } from '@mui/material';
import BasicModal from './BasicModal';
import { useContext } from 'react';
import { getItemById } from '../../techlife/helpers';
import { TechlifeContext } from '../../techlife/context';

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
    width: '100%',
    minWidth: 280,      // ✅ mínimo recomendado en mobile
    maxWidth: 350,      // límite visual para que no se estire demasiado
    boxShadow: 5,
    display: 'flex',
    flexDirection: 'column',
  }}
>
<CardMedia
    component="img" // ✅ renderiza como <img /> real, más controlable
    image={`./assets/items/${id}.png`}
    alt={name}
    sx={{
      width: '100%',
      height: 'auto',        // que se ajuste a su propia proporción
      maxHeight: 250,        // podés ajustar si querés limitarla
      objectFit: 'contain',  // no recorta, muestra completa la imagen
      p: 1,
    }}
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