import React,{useRef,useState} from "react";
import classes from "./Input.module.css";


const Input = (props) => {
    const [ValidAmount, setValidAmount] = useState(true);
    const amountRef = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(amountRef.current.value <= 0 || amountRef.current.value>5){
                setValidAmount(false);
                console.log(amountRef.current.value)
            }
        else{
            props.onSubmit(amountRef.current.value)
        }
    }

    return <form onSubmit={onSubmitHandler} className={classes.form}>
        <div className={classes["form-control"]}>
            <label htmlFor={props.id} className={classes.amount}>{props.label}</label>
            <input className={classes.formInput} ref={amountRef} {...props.input} />
        </div>
        <button>Add to cart</button>
        {!ValidAmount&& <div>Your amount is not valid!</div>}
    </form>
}

export default Input;