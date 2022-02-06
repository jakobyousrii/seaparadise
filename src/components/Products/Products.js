import React, {Fragment} from "react";
import AboutProducts from "./AboutProducts";
import CurrentProducts from "./CurrentProducts.js";

const CurrentProduct = React.memo(()=>{
    return(
    <Fragment>
        <AboutProducts/>
        <CurrentProducts/>       
    </Fragment>
    )
})

export default CurrentProduct;