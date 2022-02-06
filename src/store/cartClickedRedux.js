import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartClicked: false
}

export const cartClickedSlice = createSlice({
    name: "clickingCart",
    initialState,
    reducers:{
        cartIsClicked: (state)=>{
            state.cartClicked = !state.cartClicked;
        }
    }
})

export const cartClickedActions = cartClickedSlice.actions;