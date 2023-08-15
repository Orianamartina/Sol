import Button from "../sharedComponents/Button"
import TarjetaDeProducto from "../sharedComponents/TarjetaDeProducto"
import "./Destacados.css"
import Link from "next/link"


function Destacados(props) {
  return (
    <>
        <div id="destacados">
            <h1 className="destacadosTitle">Productos destacados:</h1>
            <h2 className="destacadosDescripcion">texto mucho texto aca va texto </h2>
            <div className="cardContainer">
            {
                props.destacados.map(prod => {
                    return(
                    <TarjetaDeProducto 
                        key={prod.titulo}
                        imagen={prod.imagen}
                        titulo ={prod.titulo}
                        precio ={prod.precio}
                    />)
                })
            } 
            
            </div>
            <Link href={"/shop"}>
                <Button text="Más productos" class="white-pink-border-black"/>
            </Link>
       
        </div>   
        
    </>
  )
}

export default Destacados