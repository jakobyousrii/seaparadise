import React from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";

const Header = (props)=>{

    return <header className={classes.headerElement}>
        <nav className={classes.navbar}>
            <h2 className={classes["navbar-brand"]}>Sea Paradise</h2>
            <CartButton onCartClicked= {props.onCartClicked}/>
        </nav>
        <img className={classes.jumbotron} alt="Sea food" src="https://www.piazzaproduce.com//nas/content/live/piazzaproduce/uploads/2020/01/Seafood-Cover-Option-2-2020-1400x480.jpg"/>
        </header>
}

export default Header;