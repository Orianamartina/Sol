

import { useDispatch, useStore } from "react-redux"
import Button from "../sharedComponents/Button"
import { useState, useEffect } from "react"
import "./Cart.css"
import CartItem from "./CartItem"
import { changeCartModalState } from "../redux/redux"
export default function Cart(props) {
    const store = useStore()
    const dispatch = useDispatch()
    const state = store.getState().redux.value.cartIsOpen
    const [data, setData] = useState([])
    const [open, setOpen] = useState()
    useEffect(() => {  
        const cartProducts = store.getState().redux.value.cart
        setData(cartProducts)
        const openModal = () => {
            const state = store.getState().redux.value.cartIsOpen
            state ? setOpen(true): setOpen(false)
        }

        store.subscribe(openModal)
    }, [state]);
   
    const closeModal = () =>
    {
        dispatch(changeCartModalState(false))
        setOpen(false)
    }
   
 const cartIsOpen = open
  return (
    <div id="cart" className={cartIsOpen?"openCart":"closedCart"}>
        <div className="closeButtonContainer">
          <Button text="X" onClick={closeModal}/>  
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
