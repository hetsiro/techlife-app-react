import { items } from "../data/items";

export const getComputersByType = ( value ) => {

    const computers = items.filter( ( item ) => {
         if(item.type === value)
            return item
    })

    return computers;

}
