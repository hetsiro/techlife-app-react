import { items } from "../data/items"

export const getItemNames = () => {

    const newItems = items.map(( item ) => {
        return {[ 'label' ]: item.name.toUpperCase()};
    })

    return newItems;
}
