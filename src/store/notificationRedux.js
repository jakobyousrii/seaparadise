import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: "",
    title: "",
    message: "",
    loading: true
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        showNotification: (state, action) => {
            state.status = action.payload.status;
            state.title = action.payload.title;
            state.message = action.payload.message;
            state.loading = action.payload.loading;
    }}
})

export const notificationAction = notificationSlice.actions;
export default notificationSlice;