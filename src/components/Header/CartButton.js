import React,{useEffect,useState} from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useSelector } from "react-redux";

const CartButton = (props)=>{
    const products = useSelector(state => state.items.products);
    const [addedToCart, setAddedtoCart] = useState(false);
    const maxAmount = products.reduce((num, item)=>{
        return num + item.amount;
    }, 0)
     
    useEffect(()=>{
        setAddedtoCart(true);
    return setTimeout(()=>{
        setAddedtoCart(false);
    },300);
},[maxAmount]);

    const cartButtonClasses = `${classes.cartButton} ${addedToCart && classes.scaleButton}`;

    return <button onClick={props.onCartClicked} className={cartButtonClasses}>
        <span className={classes.icon}>
        <CartIcon/>
        </span>
        <h4>Your Cart</h4>
        <span className={classes.countItems}>{maxAmount}</span>
    </button>
}

export default CartButton;