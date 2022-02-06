import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalAmount: 0
}

export const foodItemsSlice = createSlice({
    name: "foodItems",
    initialState,
    reducers: {
        addItem: (state, action)=>{
            const existingItem = state.products.find( product => product.id === action.payload.id);
            state.totalAmount = state.totalAmount + action.payload.price * action.payload.amount;

            if(existingItem){
                existingItem.amount = existingItem.amount + action.payload.amount;
            }
            else{
                state.products.push({id: action.payload.id, title: action.payload.title, amount: action.payload.amount, price: action.payload.price})
            }

        },
        removeItem: (state,action)=>{
            const existingItem = state.products.find( product => product.id === action.payload.id);
            state.totalAmount = state.totalAmount - action.payload.price * action.payload.amount;

            if(existingItem){
                if(existingItem.amount === 1){
                   const newProducts = state.products.filter(product =>{
                       return product.id !== action.payload.id;
                    });
                    state.products = newProducts;
                }
                else{
                    existingItem.amount --;
                }
            }
        },
        orderData: (state,action)=>{
            state.products = [];
            state.totalAmount = 0;
        }

    }

});

export const foodActions = foodItemsSlice.actions;