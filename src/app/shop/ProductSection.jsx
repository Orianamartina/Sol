import TarjetaDeProducto from "../sharedComponents/TarjetaDeProducto"
import "./ProductSection.css"



function ProductSection(props) {
  return (
    <div id="productSection">
        {props.productos.map((p, index) => {
            return(
                <div className="productCardProductSection" key={p.titulo}>
                    <TarjetaDeProducto producto={p} onClick={() => props.setSelectedProducto(p)} style={index%2===0?"even": "uneven"} />
                </div>
            )
        })}
    </div>
  )
}

export default ProductSection