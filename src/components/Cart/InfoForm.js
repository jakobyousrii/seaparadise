import { useDispatch, useSelector } from "react-redux";
import useInputHook from "../../hook/validateFormHook";
import classes from "./infoForm.module.css";
import { foodActions } from "../../store/foodOrderRedux";
import { sendCartData } from "../../store/cartstore";
import { Fragment } from "react";
const InfoForm = (props) => {
    const dispatch = useDispatch();
    const {enteredInput:enteredFullName,enteredInputIsValid: enteredFullNameIsValid, enteredInputIsInvalid:enteredFullNameIsInvalid, inputChangeHandler:fullNameChangeHandler,inputBlurHandler:fullNameBlurHandler,reset:resetFullName} = useInputHook(state => state.trim().length > 4);
    const {enteredInput:enteredAdress,enteredInputIsValid: enteredAdressIsValid, enteredInputIsInvalid:enteredAdressIsInvalid, inputChangeHandler:adressChangeHandler,inputBlurHandler:adressBlurHandler,reset:resetAdress} = useInputHook(state => state.trim().length > 4);
    const {enteredInput:enteredCity,enteredInputIsValid: enteredCityIsValid, enteredInputIsInvalid:enteredCityIsInvalid, inputChangeHandler:cityChangeHandler,inputBlurHandler:cityBlurHandler,reset:resetCity} = useInputHook(state => state.trim().length !== 0);
    const {enteredInput:enteredPostalcode,enteredInputIsValid: enteredPostalcodeIsValid, enteredInputIsInvalid:enteredPostalcodeIsInvalid, inputChangeHandler: postalcodeChangeHandler,inputBlurHandler:postalcodeBlurHandler,reset:resetPostalcode} = useInputHook(state => state.trim().length === 5);
    const {enteredInput:enteredPhoneNumber,enteredInputIsValid: enteredPhoneNumberIsValid, enteredInputIsInvalid:enteredPhoneNumberIsInvalid, inputChangeHandler: phoneNumberChangeHandler,inputBlurHandler:phoneNumberBlurHandler,reset:resetPhoneNumber} = useInputHook(state => state.trim().length > 8);
    const {enteredInput:enteredEmail,enteredInputIsValid: enteredEmailIsValid, enteredInputIsInvalid:enteredEmailIsInvalid, inputChangeHandler: emailChangeHandler,inputBlurHandler:emailBlurHandler,reset:resetEmail} = useInputHook(state => state.trim().length > 6 && state.includes("@"));
    const isValid = enteredFullNameIsValid && enteredAdressIsValid && enteredCityIsValid && enteredPostalcodeIsValid && enteredPhoneNumberIsValid && enteredEmailIsValid;
    const items = useSelector((state)=> state.items.products);
    const fullInfo = {fullName: enteredFullName, adress: enteredAdress, city: enteredCity, postalcode: enteredPostalcode, phoneNumber: enteredPhoneNumber, email: enteredEmail}


    const formSubmited = async (e) => {
        e.preventDefault();
            resetFullName();resetAdress();resetCity();resetPostalcode();resetPhoneNumber();
            resetEmail();
            if(isValid){
                sendCartData(fullInfo, items)(dispatch);
               props.onSubmit();
            dispatch(foodActions.orderData());
        }
    }

    return (
        <Fragment>
        <h2>Checkout</h2>
        <form id={props.id} className={classes.formSubmited} onSubmit={formSubmited}>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" className={enteredFullNameIsInvalid ? classes.inputDiv : ""} value={enteredFullName} onBlur={fullNameBlurHandler} onChange={fullNameChangeHandler} type="text" />
                {enteredFullNameIsInvalid && <p className={classes.errorP}>full name must have at least 5 characters...</p>}
            </div>
            <div>
                <label htmlFor="adress">Adress</label>
                <input id="adress" className={enteredAdressIsInvalid ? classes.inputDiv : ""} value={enteredAdress} onBlur={adressBlurHandler} onChange={adressChangeHandler} type="text" />
                {enteredAdressIsInvalid && <p className={classes.errorP}>adress must have at least 5 characters...</p>}
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input id="city" className={enteredCityIsInvalid ? classes.inputDiv : ""} value={enteredCity} onBlur={cityBlurHandler} onChange={cityChangeHandler} type="text" />
                {enteredCityIsInvalid && <p className={classes.errorP}>city can't be empty...</p>}
            </div>
            <div>
                <label htmlFor="postalcode">Postal Code</label>
                <input id="postalcode" className={enteredPostalcodeIsInvalid ? classes.inputDiv : ""} value={enteredPostalcode} onBlur={postalcodeBlurHandler} onChange={postalcodeChangeHandler} type="number" maxLength="5"/>
                {enteredPostalcodeIsInvalid && <p className={classes.errorP}>postal code must have 5 numbers...</p>}
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" className={enteredPhoneNumberIsInvalid ? classes.inputDiv : ""} type="number" value={enteredPhoneNumber} onBlur={phoneNumberBlurHandler} onChange={phoneNumberChangeHandler} />
                {enteredPhoneNumberIsInvalid && <p className={classes.errorP}>phone number must have at least 9 numbers...</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" className={enteredEmailIsInvalid ? classes.inputDiv : ""} type="email" value={enteredEmail} onBlur={emailBlurHandler} onChange={emailChangeHandler} />
                {enteredEmailIsInvalid && <p className={classes.errorP}>email must have @ and at least 7 characters...</p>}
            </div>
            <div>
                <button disabled={!isValid} type="submit">Finish Order</button>
            </div>
        </form>      
        </Fragment>
    )
}

export default InfoForm;