import React from "react"

const cartContext = React.createContext({
    products: [],
    totalAmount: 0
})

export default cartContext;