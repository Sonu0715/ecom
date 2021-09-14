import React from "react";
import './App.css';
import Nav from "./component/Nav";
import Banner from "./component/Banner";
import ProductsContextProvider from "./global/ProductsContexts";
import Products from "./component/Products";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cart from "./component/Cart";

function App() {
  return (
    <>
        <ProductsContextProvider>
          <Router>
            <Nav/>
            <Banner/>
            <Switch>
              <Route path="/" exact component={Products}/>
              <Route path="/cart" exact component={Cart}/>
            </Switch>
          </Router>
        </ProductsContextProvider>   
    </>
  );
}

export default App;
