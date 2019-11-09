import React from "react"
import { useCart } from "../redux/ducks/cart"

export default function (props) {
const { products, add, remove } = useCart()

 

    return (
      
        <div id="main">
            {products.map((product, i) => (
                <div key={'key' + i}>
                <img src={`/assets/${product.sku}_1.jpg`} />    
                <p>{product.title}</p>
                <p>${product.price}</p>
                <button onClick={e => add(product)}>Add to cart</button>
                </div>
            ))}
            
        </div>
        
       
    )
    }





