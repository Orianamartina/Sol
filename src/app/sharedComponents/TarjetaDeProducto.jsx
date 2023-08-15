import Image from "next/image"
import "./TarjetaDeProducto.css"


function TarjetaDeProducto(props) {
  return (
    <>
        <div id="tarjetaDeProducto">
            <Image src={props.imagen} />

            <h1>{props.titulo}</h1>
            <h2>{props.precio}</h2>
        </div>
    
    </>
  )
}

export default TarjetaDeProducto