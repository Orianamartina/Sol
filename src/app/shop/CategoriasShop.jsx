
import "./CategoriasShop.css"


function CategoriasShop(props) {
  
  return (
    <div id="categoriasShop">
        Filtrar Productos
        <select onChange={(e) => props.setCategoria(e.target.value)}>
            <option name="default" value={"todos"}>Todos</option>
              {props.categorias.map((categoria) => {   
                let options = Object.entries(categoria)
              return(
                  <optgroup key={options[0][0]} label={options[0][0]}>
                    <option name="todos" value={options[0][0]}>Todo</option>
                    {options[0][1].map(opt => {
                      return( <option name={opt} value={opt} key={opt}>{opt}</option>)
                     
                    })}
                  </optgroup>
                )
                
            })}
            
            
        </select>
    </div>
  )
}

export default CategoriasShop