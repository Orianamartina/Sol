"use client"
import Image from "next/image"
import "./TarjetaDeProducto.css"


function TarjetaDeProducto(props) {
  return (
    <>
        <div onClick={() => props.onClick(props.producto)} id="tarjetaDeProducto" className={props.style}>
            <div className="imageDiv">
               <Image src={props.producto.imagen} alt={props.producto.titulo}/>
            </div>
           

            <h1>{props.producto.titulo}</h1>
            <h2>{props.producto.precio}</h2>
        </div>
    
    </>
  )
}

export default TarjetaDeProducto