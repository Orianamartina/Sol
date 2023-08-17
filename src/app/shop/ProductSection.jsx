import TarjetaDeProducto from "../sharedComponents/TarjetaDeProducto"
import "./ProductSection.css"



function ProductSection(props) {
  return (
    <div id="productSection">
        {props.productos.map((p) => {
            return(
                <div className="productCardProductSection" key={p.titulo}>
                    <TarjetaDeProducto titulo={p.titulo} precio={p.precio}  imagen={p.imagen} />
                </div>
            )
        })}
    </div>
  )
}

export default ProductSection