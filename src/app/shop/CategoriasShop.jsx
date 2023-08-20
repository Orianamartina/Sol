
import "./CategoriasShop.css"


function CategoriasShop(props) {
  return (
    <div id="categoriasShop">
        Filtrar Productos
        <select onChange={(e) => props.setCategoria(e.target.value)}>
            <option name="default">Seleccionar</option>
            {props.categorias.map(categoria => {
                return(
                    <option  value={categoria} name={categoria}>{categoria}</option>
                )
            })}
        </select>
    </div>
  )
}

export default CategoriasShop