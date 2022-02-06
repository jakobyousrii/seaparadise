import classes from "./CurrentProducts.module.css";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import Card from "../UI/Card";
import { fetchProducts } from "../../store/cartstore";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner";


const CurrentProduct = () => {
    const [products, addNewProduct] = useState([]);
    const dispatch = useDispatch();
    const notification = useSelector(state=> state.notification);

    useEffect(() => {
            fetchProducts(addNewProduct)(dispatch);
    }, [dispatch]);

    let product;

    if(notification.status === "error"){
        product = <p>{notification.message}</p>
    }
     
    if(notification.loading){
        product = <LoadingSpinner/>
    }
    if(products.length !== 0){
        product = products.map((data) => {
            return <Product
                key={data.id}
                id={data.id}
                title={data.title}
                about={data.about}
                price={data.price}
            />
        })
    }

    return (
        <Card>
            <ul className={classes.products}>
                {product}
            </ul>
        </Card>
    )
}

export default CurrentProduct;