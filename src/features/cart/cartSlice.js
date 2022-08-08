import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [

    ],
    totalQuantity: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let product = action.payload;
            let currentProduct = state.items.filter(item => item.id === product.id)
            if (currentProduct.length === 0) {
                state.items.push(product)
                state.totalQuantity++;
            }
            state.totalPrice += product.price;
        },
        deleteItem: (state, action) => {
            let  index = action.payload
            state.items.splice(index, 1)
            state.totalQuantity--;
        }
    }
})

export const {addToCart, deleteItem} = cartSlice.actions

export const cartState = (state) => state.cart;

export default cartSlice.reducer;

