import Header from './components/Header/Header';
import './App.css';
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import React,{Fragment} from 'react';
import {useSelector,useDispatch} from "react-redux";
import { cartClickedActions} from './store/cartClickedRedux';
import Footer from './components/UI/Footer';

function App() {

  const dispatch = useDispatch();
  const cartClicked = useSelector(state => state.cartClicked.cartClicked);
  
  const isCartClickedHandler = ()=>{
    dispatch(cartClickedActions.cartIsClicked());
  }

  const isCartClosedHandler = ()=>{
    dispatch(cartClickedActions.cartIsClicked());
  }
  return (
  <Fragment>
  {cartClicked &&  <Cart onCardClosed = {isCartClosedHandler}/> }
    <Header onCartClicked={isCartClickedHandler} />
    <main>
      <Products/>
    </main>
    <Footer/>
  </Fragment>
  )
}

export default App;
