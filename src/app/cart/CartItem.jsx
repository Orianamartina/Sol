import "./CartItem.css"
import Image from "next/image"
import React from 'react'
import bin from "../../../public/bin.png"

export default function CartItem({product}) {
  return (
    <div id="cartItem">
      <div className="cartItemImageContainer">
        <Image className="cartItemImage" src={product.imagen} alt={product.titulo} height={200} width={200}/>
      </div>
      
      <div className="cartItemDataContainer">
        <h1>{product.titulo}</h1>
        
      </div>
      <div className="cartItemPriceContainer">
        <h2>{product.precio}</h2>
        <Image className="binIcon" src={bin} onClick={"deleteItemFromCart"} alt="bin" height={10} width={15} />
        
      </div>
      
    </div>
  )
}
