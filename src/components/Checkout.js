import React from "react"
import { useCart } from "../redux/ducks/cart"

export default function (props) {
    const { products, add, remove } = useCart()

    
     
    
        return (
            <div>
            <div>Check Out</div>
            <p>{products.title}</p>
            </div>
           
        )
        }