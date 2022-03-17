const initState = {
    items: [],
    addedItems:[],
    total: 0
}

const cart = (state = initState, action)=> {

    if (action.type === 'ADD_TO_CART'){
        let addedItem = action.product;

        let existed_item = state.addedItems.find(item => item._id === addedItem._id);

        if (existed_item) {
            console.log("Ya existe");
            addedItem.quantity += 1;
             return {
                ...state,
                total: state.total + addedItem.price 
            }
        } else {
            //calculating the total
            let newTotal = state.total + addedItem.price;
            addedItem.quantity = 1;
            //state.addedItems.push(action);
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        let itemToRemove = state.addedItems.find(item => item._id === action.id);
        let new_items = state.addedItems.filter(item=> item._id !== action.id);
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    //INSIDE CART COMPONENT
    if (action.type=== 'ADD_QUANTITY') {
        console.log("Add Quantity: ", action)
        let addedItem = state.addedItems.find(item => item._id === action.id);
        addedItem.quantity += 1;
        let newTotal = state.total + addedItem.price;
        return {
            ...state,
            total: newTotal
        }
    }

    if (action.type === 'SUB_QUANTITY') { 
        console.log("Add Quantity: ", action) 
        let addedItem = state.addedItems.find(item => item._id === action.id);
        //if the qt == 0 then it should be removed
        console.log("Sub Quantity")
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item=>item._id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price;
            return {
                ...state,
                total: newTotal
            }
        }
    }

    return state;
}

export default cart;
