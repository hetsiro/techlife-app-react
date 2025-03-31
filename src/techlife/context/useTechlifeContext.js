import { useState } from 'react'

export const useTechlifeContext = () => {

  const cartLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
  const [ cart, setCart ] = useState( cartLocalStorage );

  const cant = cartLocalStorage.reduce((acumulador, cartItem) => {
    acumulador += cartItem.cant;
    return acumulador;
  },0)
  
  const [ cartCount, setCartCount ] = useState( cant );

  return { cartCount, setCartCount, cart, setCart }
}