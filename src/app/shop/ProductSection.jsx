import TarjetaDeProducto from "../sharedComponents/TarjetaDeProducto"
import "./ProductSection.css"
import Link from "next/link"


function ProductSection(props) {
  return (
    <div id="productSection">
        {props.productos && props.productos.map((p, index) => {
            return(
                <div className="productCardProductSection" key={index}> 
                  <Link href={`/shop/${p.id}`}>
                    <TarjetaDeProducto producto={p} style={index%2===0?"even": "uneven"} /> 
                  </Link>
                </div>
            )
        })}
    </div>
  )
}

export default ProductSection