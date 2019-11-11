import React from "react"
import { useCart } from "../redux/ducks/cart"
import { useSelector } from 'react-redux'



export default function (props) {
const { cart, add, remove } = useCart()



    return (
      <div>
          <i class="fa fa-shopping-cart"></i>
        <div id="checkout">
            {cart.map((cart, i) => (
                <div id="indcheckout" key={'key' + i}>
                    <img src={`/assets/${cart.product.sku}_2.jpg`} />    
                    <div id="checkoutdesc">
                        <p>{cart.product.title}</p>
                        <p>{cart.product.description}</p>
                        <button onClick={e => remove(cart.id)}>Remove from cart</button>
                    </div>
                    <div>${cart.product.price}</div>
                
                </div>
                
            ))}
            <p id="checkoutbutton">CHECKOUT</p>
        </div>
       
     </div>
      
    )


    }

 
