import React,{Fragment} from "react";
import classes from "./Modal.module.css";
import  ReactDOM  from "react-dom";

const Shadow = (props)=>{

    return <div onClick={props.onCardClosed} className={classes.shadow}></div>
}

const ShadowSection = (props)=>{

    return <div className={classes.shadowSection}>
        {props.children}
    </div>
}

const Modal = (props) =>{
    return (
    <Fragment>
    {ReactDOM.createPortal(<Shadow onCardClosed={props.onCardClosed} />,document.getElementById("shadow"))}
    {ReactDOM.createPortal(<ShadowSection>{props.children}</ShadowSection>, document.getElementById("shadowsection"))}
    </Fragment>
    )
}


export default Modal;