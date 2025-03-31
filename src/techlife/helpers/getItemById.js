import { items } from "../data/items"


export const getItemById = ( id ) => {

    return items.find(( item ) => item.id === id )

}
