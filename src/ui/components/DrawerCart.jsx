import { Divider, Drawer, Grid2, IconButton, Typography } from "@mui/material";
import { Fragment, useContext } from "react";
import { MediaCart } from "../../techlife/components";
import { TechlifeContext } from "../../techlife/context";
import { EmptyCart } from "./";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const DrawerCart = ({ open, setOpenCart }) => {

  const { cart, cartCount } = useContext(TechlifeContext)

  const handleBack = () => {
    setOpenCart(false);
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpenCart(false)}
      >
        <Grid2
          container
          justifyContent='center'
          alignItems='center'
          backgroundColor='primary.main'
          px={3}
          width='100%'
        >
          <Grid2 container direction='row'>
            <IconButton onClick={ handleBack }>
              <ArrowBackIcon sx={{ color: 'white'}} fontSize="large"/>
            </IconButton>
            <Typography variant="h6" fontSize={30} color="white">Cart</Typography>
          </Grid2>
        </Grid2>
        <Grid2
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={2}
          p={4}
          flexGrow={1}
        >
          {cartCount === 0 && <EmptyCart />}
          <Grid2
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            width='100%'
          >
            {cart.map((item) => {
              return (
                <Fragment key={item.id}>
                  <MediaCart item={item} />
                  <Divider sx={{ width: "100%" }} />
                </Fragment>
              )
            })}
          </Grid2>
        </Grid2>
        <Grid2
          container
          justifyContent='center'
          alignItems='center'
          backgroundColor='primary.main'
          width='100%'
          mt='auto'
          py={2}
        >
          <Typography variant="h6" fontSize={30} color="white"
          >Total: ${cart.reduce((acumulador, cartItem) => {
            acumulador += cartItem.cant * cartItem.price
            return acumulador;
          }, 0)} USD
          </Typography>
        </Grid2>
      </Drawer>
    </>
  );
}

