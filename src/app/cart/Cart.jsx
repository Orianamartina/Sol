

import { useStore } from "react-redux"
import Button from "../sharedComponents/Button"
import { useState, useEffect } from "react"
import "./Cart.css"
import CartItem from "./CartItem"
export default function Cart(props) {
    const store = useStore()
    const [data, setData] = useState([])
    useEffect(() => {
        const products = store.getState().redux.value.cart
        setData(products)
       
    })
   
 const cartIsOpen = props.cartState
  return (
    <div id="cart" className={cartIsOpen?"openCart":"closedCart"}>
        <div className="closeButtonContainer">
          <Button text="X" onClick={props.setOpenCart}/>  
        </div>
        
        <div className="cartItemsContainer">
        {data && data.map(product => {
            return(
                <CartItem product={product} key={product.id} />
            )
        })}
            
        </div>
    

        <div className="cartBottomButtonContainer">
            <Button text="Cancelar compra" />
            <Button text="Realizar compra" />
        
        </div>
    </div>
  )
}
