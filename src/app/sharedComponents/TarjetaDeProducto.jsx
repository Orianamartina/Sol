import Image from "next/image"
import "./TarjetaDeProducto.css"


function TarjetaDeProducto(props) {
  return (
    <>
        <div onClick={props.onClick} id="tarjetaDeProducto">
            <div className="imageDiv">
               <Image src={props.imagen} />
            </div>
           

            <h1>{props.titulo}</h1>
            <h2>{props.precio}</h2>
        </div>
    
    </>
  )
}

export default TarjetaDeProducto