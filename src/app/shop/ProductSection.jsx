import TarjetaDeProducto from "../sharedComponents/TarjetaDeProducto"
import "./ProductSection.css"



function ProductSection(props) {
  return (
    <div id="productSection">
        {props.productos.map((p) => {
            return(
                <div className="productCardProductSection">
                    <TarjetaDeProducto titulo={p.titulo} precio={p.precio} key={p.titulo} imagen={p.imagen} />
                </div>
            )
        })}
    </div>
  )
}

export default ProductSection