import React from "react"
import { useCart } from "../redux/ducks/cart"
import 'font-awesome/css/font-awesome.min.css'
export default function (props) {
const { products, add, remove } = useCart()

 

    return (
       <div id="center">
       
        <div id="maintop">
                <div>{products.length} product(s) found</div>
                <div id="maintopright">
                <span>Order by</span>
                <select>
                    <option>Select</option>
                    <option>Highest to lowest</option>
                    <option>Lowest to highest</option>
                </select>
                </div>
        </div>
        <div id="main">
            {products.map((product, i) => (
                <div id="individual" key={'key' + i}>
                    <img src={`/assets/${product.sku}_1.jpg`} />    
                    <p>{product.title}</p>
                    <i class="fa fa-horizontal-rule"></i>
                    <p>${product.price}</p>
                    <p>or {product.installments} X${(product.price / product.installments).toFixed(2)}</p>
                    <button onClick={e => add(product)}>Add to cart</button>
                </div>
            ))}
            
        </div>
      </div>
       
    )
    }





