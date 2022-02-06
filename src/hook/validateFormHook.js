import { useState } from "react";

const useInputHook = (validateForm)=>{
    const [enteredInput, setEnteredInput] = useState("");
    const [enteredInputTouched, setEnteredInputTouched] = useState(false); 
    const enteredInputIsValid = validateForm(enteredInput);
    const enteredInputIsInvalid = enteredInputTouched && !enteredInputIsValid;

    const inputChangeHandler = (event) => {
        setEnteredInput(event.target.value);
       }
      
       const inputBlurHandler = ()=>{
         setEnteredInputTouched(true);
       }

       const reset = () =>{
           setEnteredInput("");
           setEnteredInputTouched(false);
       }

return {enteredInput,
        enteredInputIsValid,
        enteredInputIsInvalid,
        inputChangeHandler,
        inputBlurHandler,
        reset
}
}

export default useInputHook;
