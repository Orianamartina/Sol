import { useState, useEffect } from "react"
import "./CategoriasShop.css"



function CategoriasShop(props) {
  const [openSelect, setOpenSelect] = useState()
  const [currentSelection, setCurrentSelection] = useState()
  return (
    <div id="categoriasShop">
        <h1>Filtrar Productos</h1>
        <div className="selectMain" >
          <h1 onClick={() =>{setOpenSelect(!openSelect)}}>Seleccionar Categoria</h1>
          <div className={openSelect? "selectOptions showSelect": "selectOptions hideSelect"}>
            <h3 className={openSelect?"openSelectOptions":"closedOptions"} onClick={() => {props.setCategoria("todos");setCurrentSelection(false); setOpenSelect(!openSelect)}}>Todos</h3>
            {props.categorias.map((categoria) =>{
              let options = Object.entries(categoria)
              return(
                <div>
                  <h2 className={openSelect?"boldOptions openSelectOptions":"closedOptions"} onClick={() => {props.setCategoria(options[0][0]) ;setCurrentSelection(options[0][0]); setOpenSelect(!openSelect)}}>
                    {options[0][0]}
                  </h2>
                  {options[0][1].map(opt => {
                    return(
                      <h3 className={openSelect?"openSelectOptions":"closedOptions"} onClick={() => {props.setCategoria(opt); setCurrentSelection(opt); setOpenSelect(!openSelect)}}>
                        {opt}
                      </h3>
                    )
                  })}
                </div>
                
              )
            })}
          </div>
      </div>
      <h1>{currentSelection? currentSelection: "Todos"}</h1>
    </div>
  )
}

export default CategoriasShop