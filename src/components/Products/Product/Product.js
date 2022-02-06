import classes from "./Product.module.css";
import Input from "../../UI/Input";
import React from "react";
import { useDispatch } from "react-redux";
import { foodActions } from "../../../store/foodOrderRedux";

const Product = (props)=>{
    const dispatch = useDispatch();
    const price = props.price.toFixed(2);

    const onSubmitHandler = (value)=>{
        const amount = + value;
        dispatch(foodActions.addItem({id:props.id, title: props.title, price: price, amount: amount}))
    }

    return <li className={classes.product}>
        <div>
        <h3 className={classes.title}>{props.title}</h3>
        <p>{props.about}</p>
        <span className={classes.price}>${props.price}</span>
        </div>
        <div>
            <Input onSubmit={onSubmitHandler} label="Amount" input={{id:props.id, type:"number", min: 1, max:5, defaultValue: 1}}/>
        </div>
        </li>
}

export default Product;