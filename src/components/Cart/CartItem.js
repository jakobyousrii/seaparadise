import classes from "./CartItem.module.css";
import React from "react";

const CartItem = (props) => {

    return <li className={classes.li}>

        <div>
            <h3>{props.title}</h3>
            <div className={classes["price-amount"]}>
                <span className={classes.price}>${props.price}</span>
                <span className={classes.amountCount}>{props.amount}x</span>
            </div>
        </div>
        <div className={classes["action-buttons"]}>
            <button onClick={props.onMinusCart}>-</button>
            <button onClick={props.onPlusCart}>+</button>
        </div>
    </li>
}

export default CartItem;