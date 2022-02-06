import Modal from "../UI/Modal/Modal";
import React, { Fragment, useState } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { foodActions } from "../../store/foodOrderRedux";
import InfoForm from "./InfoForm";


const Cart = (props) => {
    const [orderClicked, setOrderClicked] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.products);
    const fullAmount = useSelector(state => state.items.totalAmount);
    const [confirmOrder, setConfirmOrder] = useState(false);

    
    const plusCartHandler = (item) => {
        dispatch(foodActions.addItem({ ...item, amount: 1 }));
    }
    const minusCartHandler = (item) => {
        dispatch(foodActions.removeItem({ ...item, amount: 1 }));
    }

    const cartItems = items.map((item) => { return <CartItem key={"key" + item.id} id={item.id} title={item.title} about={item.about} price={item.price} amount={item.amount} onPlusCart={plusCartHandler.bind(null, item)} onMinusCart={minusCartHandler.bind(null, item)} /> })
    const totalAmount = fullAmount.toFixed(2);

    const onOrderButtonHandler = () => {
        setOrderClicked(true);
    }

    const confirmOrderHandler = () => {
        setConfirmOrder(true);
    }

    let content = "";
    
    if (confirmOrder) {
        content = (<Modal onCardClosed={props.onCardClosed}>
            <div className={classes.cartSuccess}>
           <p>Your order has been successful!</p>
           <p>For more information about your order - check your email!</p>
           </div>
           <div className={classes.buttons}>
           <button className={classes.closeButton} onClick={props.onCardClosed}>Close</button>
           </div>
        </Modal>)
    }
    else {
        content = (<Modal onCardClosed={props.onCardClosed}>
            <ul className={classes.ul}>
                {cartItems}
            </ul>
            <div className={classes.totalAmount}>
                <span>Total:</span>
                <span className={classes.totalValue}>${totalAmount}</span>
            </div>
            <div className={classes.buttons}>
                <button className={classes.closeButton} onClick={props.onCardClosed}>Close</button>
                {items.length > 0 && !orderClicked && <button onClick={onOrderButtonHandler} className={classes.orderButton}><a href="#linkToInfo">Order</a></button>}
            </div>
            {orderClicked && items.length > 0 && <InfoForm id="linkToInfo" onSubmit={confirmOrderHandler} />}
        </Modal>)
    }
    return (
        <Fragment>
            {content}
        </Fragment>
    )
}


export default Cart;