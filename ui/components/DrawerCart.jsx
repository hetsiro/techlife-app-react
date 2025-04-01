import { Divider, Drawer, Grid2, Typography } from "@mui/material";
import { MediaCart } from "../../src/techlife/components/MediaCart";
import { Fragment, useContext } from "react";
import { TechlifeContext } from "../../src/techlife/context/techlifeContext";
import { EmptyCart } from "./EmptyCart";

export const DrawerCart = ({ open, setOpen }) => {

  const { cart, cartCount } = useContext(TechlifeContext)

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}

      >
        <Grid2
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          width='450px'
          spacing={2}
          py={4}
          px={4}
          flexGrow={1}

        >
          <Grid2
            container
            justifyContent='center'
            alignItems='center'
            backgroundColor='primary.main'
            px={3}
            width='100%'
          >
            <Typography variant="h6" fontSize={30} color="white">Cart</Typography>
          </Grid2>
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
        </Grid2>
      </Drawer>
    </>
  );
}

