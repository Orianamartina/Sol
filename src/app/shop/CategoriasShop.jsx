



function CategoriasShop(props) {
  return (
    <div>
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