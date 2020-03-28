import CartActionTypes from './cart.types';
import { addItemToCart, removeItemsFromCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    const {TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM} = CartActionTypes;

    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) // This means we merge(spread) old values with the new values (action.payload)
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemsFromCart(state.cartItems, action.payload.id)
            };
        default:
            return state;    
    }
}

export default cartReducer;