import Button from "../sharedComponents/Button"
import TarjetaDeProducto from "../sharedComponents/TarjetaDeProducto"
import "./Destacados.css"
import Link from "next/link"


function Destacados(props) {
  return (
    <>
        <div id="destacados">
            <h1 className="destacadosTitle">Destacados</h1>
           {/* <h2 className="destacadosDescripcion">texto mucho texto aca va texto </h2>*/}
            <div className="cardContainer">
            {
                props.destacados.map((prod, index) => {
                    return(
                        
                            <div key={prod.titulo} className="tarjetaDeProductoContainer">
                            
                                <TarjetaDeProducto 
                                producto={prod}
                                style={index%2===0? "even": "uneven"}
                                />
                
                            </div>
                        
                    )
                })
            } 
            
            </div>
            <Link href={"/shop"}>
                <Button text="Ver todos los productos" class="white-green-border-black"/>
            </Link>
       
        </div>   
        
    </>
  )
}

export default Destacados