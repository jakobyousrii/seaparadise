import cartContext from "./cartContext";
import React, { useReducer } from "react";


const initialData = {
    items: [],
    totalAmount: 0
}

const productReducerFunc = (state, action) => {

    if(action.type==="ADD"){
        const totalAmount = state.totalAmount + action.data.amount * action.data.price;
        const currentIndex = state.items.findIndex((item)=>{
            return item.id === action.data.id;
        })
        const currentItem = state.items[currentIndex];
        let currentItemObject;
        let items;

        if(currentItem){
            currentItemObject = {
                ...currentItem,
                amount: currentItem.amount + action.data.amount
            }
            items = state.items;
            items[currentIndex] = currentItemObject;
            return {items: items, totalAmount: totalAmount};
        }

        else{
            items = state.items.concat(action.data);
            return {items: items, totalAmount: totalAmount};
        }
    }
    if(action.type==="REMOVE"){
        const currentObjectIndex = state.items.findIndex((item)=>{
            return item.id === action.id;
        })
        const currentObject = state.items[currentObjectIndex];
        let newObject;
        let items;
        let totalAmount;
        if(currentObject){
            totalAmount = state.totalAmount - currentObject.price;
            if(currentObject.amount === 1){
                items = state.items.filter((item)=>{
                    return item.id !== action.id;
                })
                return {items: items, totalAmount: totalAmount}
            }
            else{
                newObject = {
                    ...currentObject,
                    amount: currentObject.amount - 1,
                }
                items = [...state.items];
                items[currentObjectIndex] = newObject;
                return {items: items, totalAmount: totalAmount}
            }
        }
    }


return {
    items: [{title: "", about: "", amount: 0, price: 0}],
    totalAmount: 0
}
}


const ContextProvider = (props) => {

    const [products, dispatchProducts] = useReducer(productReducerFunc, initialData);

    const addNewProductHandler = (data) => {
        dispatchProducts({ type: "ADD", data: data })
    }

    const deleteProductHandler = (id) => {
        dispatchProducts({ type: "REMOVE", id: id })
    }

    const data = {
        items: products.items,
        totalAmount: products.totalAmount,
        addNewProduct: addNewProductHandler,
        deleteProduct: deleteProductHandler
    }

    return (
        <cartContext.Provider value={data}>
            {props.children}
        </cartContext.Provider>
    )
}


export default ContextProvider;