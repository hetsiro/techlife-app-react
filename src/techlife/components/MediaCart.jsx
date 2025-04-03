import { Button, CardMedia, Divider, Grid, Grid2, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { TechlifeContext } from "../context";

export const MediaCart = ({ item }) => {

    const [countValue, setCountValue] = useState(item.cant)
    const { cart, setCart, setCartCount } = useContext(TechlifeContext)
    const [price, setPrice] = useState(item.price * item.cant);

    const onHandleDelete = () => {

        const newCart = cart.filter((cartItem) => (cartItem.id != item.id))
        updateCart(newCart)
    }

    const handleChange = (e) => {

        const newCart = cart;
        const cant = parseInt(e.target.value)
        const itemFound = newCart.find((cartItem) => (cartItem.id === item.id))
        itemFound.cant = cant;
        setCountValue(cant)
        updateCart(newCart)
    }

    const updateCart = (newCart) => {

        const cant = newCart.reduce((acumulador, cartItem) => {
            acumulador += cartItem.cant;
            return acumulador;
        }, 0)

        setCartCount(cant);
        setCart(newCart);
        setPrice(item.price * item.cant)
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    return (
        <Grid2
            container
            direction='column'
            justifyContent='center'
            alignItems='flex-end'
            width='100%'
        >   
            <Grid2 container width='100%'>
                <Grid2 container alignItems='center' justifyContent='center' size={3} px={2}>
                    <CardMedia sx={{height: 100, width: 100, flexShrink: 0}} image={`/assets/items/${item.id}.png`}/>
                </Grid2>
                <Grid2 container alignItems='center' justifyContent='center' size={3} px={2}>
                    <Typography variant="button" sx={{ fontSize: { xs: 12, md: 15} }}>{item.name}</Typography>
                </Grid2>
                <Grid2 container alignItems='center' justifyContent='center' size={3} px={2}>
                    <TextField
                        type="number"
                        value={countValue}
                        onChange={handleChange}
                        variant="standard"
                        inputProps={{
                            min: 1,
                            max: 99,
                            inputMode: 'numeric',
                            style: { textAlign: 'center' },
                        }}
                        sx={{
                            width: { xs: '80px', sm: '100px' },
                            '@media (max-width: 600px)': {
                            '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                                WebkitAppearance: 'none',
                                margin: 0,
                            },
                            '& input[type=number]': {
                                MozAppearance: 'textfield',
                            }
                            }
                        }}
                        />
                </Grid2>
                <Grid2 container alignItems='center' justifyContent='center' size={3} px={2}>
                    <Button
                        onClick={onHandleDelete}
                        variant="contained"
                        sx={{
                            minWidth: "auto", // Hace que el botón solo ocupe el espacio de la "X"
                        }}
                    >X
                    </Button>
                </Grid2>
            </Grid2>
            <Typography variant="h6" color="primary.main" >${price} USD</Typography>
        </Grid2>
    )
}
