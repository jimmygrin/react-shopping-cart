import React from "react"
import { useCart } from "../redux/ducks/cart"

export default function (props) {
const {products} = useCart()
 

    return (
        <div>
            {products.map((product, i) => (
                <div key={'key' + i}>
                <img src={`/assets/${product.sku}_1.jpg`} />    
                <p>{product.title}</p>
                <p>${product.price}</p>
                </div>
            ))}
            
        </div>
    )
    }

//     useEffect(() => {
//         axios.get("./products").then(resp => {
//             console.log(resp.data)
//             setProducts(resp.data)
//         })
// }, [])

// return (
//     <div id="main">
//         {products.map(product => <h1>{product.title}</h1>)}

//     </div>
// )

// }




