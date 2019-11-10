import React from "react"
import { useCart } from "../redux/ducks/cart"

export default function (props) {
const { cart, add, remove } = useCart()
// const [ cart, setCart] =useState['']


    return (
      
        <div id="checkout">
            {cart.map((cart, i) => (
                <div id="indcheckout" key={'key' + i}>
                <img src={`/assets/${cart.product.sku}_2.jpg`} />    
                <div id="checkoutdesc">
                    <p>{cart.product.title}</p>
                    <p>{cart.product.description}</p>
                    <button onClick={e => remove(cart.id)}>Remove from cart</button>
                </div>
                <p>${cart.product.price}</p>
              
                </div>
            ))}
            
        </div>
        
       
    )
    }

