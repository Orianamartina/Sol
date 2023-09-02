"use client"
import Image from "next/image"
import "./TarjetaDeProducto.css"
import Link from "next/link"

function TarjetaDeProducto(props) {
  return (
    <> 
      <Link href={`/shop/${props.producto.id}`} >
        <div id="tarjetaDeProducto">
         
            <div className="imageDiv">
               <Image src={props.producto.imagen} alt={props.producto.titulo}/>
            </div>
           

            <h1>{props.producto.titulo}</h1>
            <h2>{props.producto.precio}</h2>
           
        </div>
    </Link>
    </>
  )
}

export default TarjetaDeProducto