// src/redux/reducers/cartReducer.js

const INIT_STATE = {
    carts: []
}

export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // Check if item already exists in the cart
            const itemExists = state.carts.some(item => item.id === action.payload.id);

            if (itemExists) {
                // If item exists, return the state as is (or update quantity if needed)
                return state;
            }

            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                carts: state.carts.filter(item => item.id !== action.payload)
            }

        default:
            return state;
    }
}
