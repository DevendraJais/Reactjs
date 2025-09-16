import { createSlice } from '@reduxjs/toolkit';


const initialState = { items: [] };


const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
addToCart: (state, action) => {
const existing = state.items.find(i => i.id === action.payload.id);
if (existing) existing.quantity += action.payload.quantity ?? 1;
else state.items.push({ ...action.payload, quantity: action.payload.quantity ?? 1 });
},
removeFromCart: (state, action) => {
state.items = state.items.filter(i => i.id !== action.payload);
},
updateQuantity: (state, action) => {
const item = state.items.find(i => i.id === action.payload.id);
if (item) item.quantity = action.payload.quantity;
},
clearCart: (state) => { state.items = []; },
},
});


export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;


export const selectCartItems = state => state.cart.items;
export const selectCartTotal = state => state.cart.items.reduce((sum, it) => sum + it.price * it.quantity, 0);


export default cartSlice.reducer;