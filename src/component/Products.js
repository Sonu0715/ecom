import React,{useContext} from 'react'
import {ProductsContext} from "../global/ProductsContexts"

const Products = () => {
    const {products} = useContext(ProductsContext);
    // console.log(data);

    return (
        <div className="container">
                    <div className="products">
        {products.map((product)=>{
            return(
                <div className="product" key={product.id}>
                    <div className="product-image">
                        <img src={product.image} alt="not found"/>
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-price">
                            ${product.price}.00
                        </div>
                    </div>
                    <div className="add-to-cart"> add to cart</div>
                    {product.status==="hot"?<div className="hot">Hot</div>: ""}
                    {product.status==="new"?<div className="new">New</div>:""}
                </div>
                )
            })}
        </div>

        </div>
    )
}

export default Products
