
import "./CategoriasShop.css"


function CategoriasShop(props) {
  return (
    <div id="categoriasShop">
        <ul>
            {props.categorias.map(categoria => {
                return(
                    <li key={categoria} onClick={() => props.setCategoria(categoria)}>
                        {categoria}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default CategoriasShop