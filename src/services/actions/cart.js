export const addToCart = (product) => {
    return{
        type: 'ADD_TO_CART',
        product
    }
}

export const removeItem = (id) => {
    return{
        type: 'REMOVE_ITEM',
        id
    }
}

export const subtractQuantity = (id) => {
    return{
        type: 'SUB_QUANTITY',
        id
    }
}

export const addQuantity = (id) => {
    return{
        type: 'ADD_QUANTITY',
        id
    }
}
