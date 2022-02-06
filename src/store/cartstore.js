import { configureStore } from "@reduxjs/toolkit";
import { foodItemsSlice } from "./foodOrderRedux";
import { cartClickedSlice } from "./cartClickedRedux";
import notificationSlice from "./notificationRedux";
import { notificationAction } from "./notificationRedux";

const store = configureStore({ reducer: { items: foodItemsSlice.reducer, cartClicked: cartClickedSlice.reducer, notification: notificationSlice.reducer } });



export const fetchProducts = (addProduct) => {

    return  async (dispatch) => {

        dispatch(notificationAction.showNotification({ status: "pending", title: "sending...", message: "Sending cart data!", loading: true }))
        try {
            const response = await fetch('https://react-http-26746-default-rtdb.europe-west1.firebasedatabase.app/maliraj.json');
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            for (let id in data) {
                let allData = [];
                for (let single of data[id]) {
                    allData.push(single);
                }
                dispatch(notificationAction.showNotification({ status: "success", title: "success", message: "Sending cart data has finished!", loading: false }))
                addProduct(allData)
            }
        }
        catch (e) {
            dispatch(notificationAction.showNotification({ status: "error", title: "error", message: "Error,fetching falied!", loading: false }))
        }
    }
}

export const sendCartData = (cart, items) => {

    return async (dispatch) => {
        dispatch(notificationAction.showNotification({ status: "pending", title: "sending...", message: "Sending cart data!" }))

        try {
            await fetch("https://react-http-26746-default-rtdb.europe-west1.firebasedatabase.app/rajOrder.json", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ information: cart, order: items })
            })
            dispatch(notificationAction.showNotification({ status: "success", title: "success", message: "Sending cart data has finished!" }))
        }
        catch (e) {
            dispatch(notificationAction.showNotification({ status: "error", title: "error", message: "Error,fetching falied!" }))
        }
    }
}
export default store;