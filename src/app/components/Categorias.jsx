
import "./Categorias.css"
import Image from "next/image"

function Categorias(props) {
  return (
    <>
        <div id="categorias">
          {props.categorias.map(categoria => {
            return(
              <>
                <div className="categoriaCard">
                  <Image className="categoriaImage" src={categoria.image} />
                  <h1>{categoria.title}</h1>
                </div>
              </>
              
            )
          })}
        </div>
    </>
  )
}

export default Categorias