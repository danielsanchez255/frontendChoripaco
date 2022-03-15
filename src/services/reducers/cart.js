const initState = {
    items: [],
    addedItems:[],
    total: 0
}

const cart = (state = initState, action)=> {
   
    //INSIDE HOME COMPONENT
    if (action.type === 'ADD_TO_CART'){
        let addedItem = action;

        let existed_item = state.addedItems.find(item => item.id === action._id);
        if (existed_item) {
            addedItem.product.quantity += 1;
            console.log("Ya existe");
             return {
                ...state,
                total: state.total + addedItem.price 
            }
        } else {
            //addedItem.stock = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price;
            addedItem.product.quantity = 1;
            state.addedItems.push(action);
            //console.log("Added items: ", state.addedItems);
            return{
                ...state,
                //addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        let itemToRemove = state.addedItems.find(item => item.id === action._id);
        let new_items = state.addedItems.filter(item=> item.id !== action._id);
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.stock);
        console.log("ItemToRemove: ", itemToRemove);
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    //INSIDE CART COMPONENT
    if (action.type=== 'ADD_QUANTITY') {
        let addedItem = state.items.find(item => item.id === action.id);
        addedItem.product.quantity += 1;
        let newTotal = state.total + addedItem.price;
        return {
            ...state,
            total: newTotal
        }
    }

    if (action.type === 'SUB_QUANTITY') {  
        let addedItem = state.items.find(item => item.id === action.id);
        //if the qt == 0 then it should be removed
        console.log("Sub Quantity")
        if (addedItem.product.quantity === 1) {
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.stock -= 1;
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
