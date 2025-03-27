import { items } from "../data/items";

export const getItemsByName = ( value ) => {

    const newItems = items.filter(( item ) => {
        if( item.name.trim().toUpperCase().includes( value.toUpperCase() ))
            return item;
    })

    return newItems;
}
