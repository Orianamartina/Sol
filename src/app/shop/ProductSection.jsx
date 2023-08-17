import TarjetaDeProducto from "../sharedComponents/TarjetaDeProducto"




function ProductSection(props) {
  return (
    <div id="productSection">
        {props.productos.map((p) => {
            return(
                <>
                    <TarjetaDeProducto titulo={p.titulo} precio={p.precio} imagen={p.imagen} />
                </>
            )
        })}
    </div>
  )
}

export default ProductSection