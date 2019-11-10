import React from "react"
import { useCart } from "../redux/ducks/cart"
import 'font-awesome/css/font-awesome.min.css'
export default function (props) {
    const { products, add, remove } = useCart()

    
     
    
        return (
            <div id="sizes">

            <div id="sizehead">Sizes</div>
            <div className="sizeicon"> 
                <p>XS</p>
                <p>S</p>
                <p>M</p>
                <p>ML</p>
            </div>
            <div className="sizeicon"> 
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
            </div>
            <div id="message">
                Leave a star on Github if this repository was helpful :)
            </div>
            <div id="star">
            <i class="fa fa-star">Star</i>
            <p>940</p>
            </div>
           
            </div>
           
        )
        }