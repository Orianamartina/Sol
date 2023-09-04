import { useState, useEffect } from "react"
import "./CategoriasShop.css"
import Image from "next/image"
import arrow from "../../../public/down-arrow.png"


function CategoriasShop(props) {
  const [openSelect, setOpenSelect] = useState()
  const changeButtonState = (state) => {
    openSelect == state? setOpenSelect(false): setOpenSelect(state)
  }
  const chooseCategory = (cat, opt) => {
    if (cat == "Todos"){
      props.setCategoria(opt)
    }
    else{
      props.setCategoria(cat)
    }
    
  }
  
  return (
    <div id="categoriasShop">
        <h1>Filtrar Productos</h1>
        <div className="selectMain" >
          <div className="filter">
            <button onClick={() => {props.setCategoria("Todos");changeButtonState("Todos")}}>Todos</button>
            {props.categorias.map((categoria) =>{
              let options = Object.entries(categoria)
              return(
                <div key={options[0][0]}>
                  <button onClick={() => changeButtonState(options[0][0])}>
                    {options[0][0]}
                    <Image className={openSelect != options[0][0]?`arrowIconOpen`:"arrowIcon"}src={arrow} alt=""/>
                  </button>
                  { options[0][1].map(opt => {
                    if (openSelect == options[0][0]){
                      return(
                        <>
                          <h3 key={opt} className={openSelect?"openSelectOptions":"closedOptions"} onClick={() => chooseCategory(opt, options[0][0])}>
                            {opt}
                          </h3>
                        </>
                      )
                    }
          

                  })}
                </div>
                
              )
            })}
          </div>
      </div>

    </div>
  )
}

export default CategoriasShop