import "./Producto.css"
import Image from "next/image"



function Producto(props) {
  return (
    <div id="producto">
        <div>
             <Image className="productoDetalleImagen"src={props.producto.imagen} alt={props.producto.titulo} />
        </div>
       
        <div className="detalleContent">
            <button onClick={props.close}>X</button>
            <h1>{props.producto.titulo}</h1>
            <h2>{props.producto.precio}</h2>
            <p>{props.producto.descripcion}</p>    
        </div>
 
    </div>
  )
}

export default Producto