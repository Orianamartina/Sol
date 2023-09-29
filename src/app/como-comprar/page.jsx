import React from 'react'
import "./page.css"
import Button from '../sharedComponents/Button'
export default function ComoComprar(props) {
    const  modal = props.modal
  return (
    <>
    {modal?(
        <div id="como-comprarModal">
        <Button text="X" class="white-green-border-black" onClick={() => props.setOpen(false)} />
        <h1>COMO COMPRAR?</h1>
        <p>Agregar los productos al carrito y cuando estes listo, apreta el boton &quot;comprar&quot;</p>
        <p>Te redireccionara a WhatsApp y a la brevedad te contactaremos para continuar con la  compra. </p>
        <p>Para reservar tus productos se tiene que abonar el 50% del total como seña</p>
   
        <h1>MEDIOS DE PAGO:</h1>
        <ul>
            <li>
                Transferencia o Efectivo
            </li>
        </ul>
    </div>
    ):(
        <div id="como-comprar">
            <h1>COMO COMPRAR?</h1>
            <p>Agregar los productos al carrito y cuando estes listo, apreta el boton &quot;comprar&quot;</p>
            <p>Te redireccionara a WhatsApp y a la brevedad te contactaremos para continuar con la compra. </p>
            <p>Para reservar tus productos se tiene que abonar el 50% del total como seña</p>
    
            <h1>MEDIOS DE PAGO:</h1>
            <ul>
                <li>
                    Transferencia
                </li>
                <li>
                    Efectivo
                </li>
            </ul>
            <Button text= "Comprar ahora" class="white-green-border-black" />
        </div>
    )}
   </>
  )
}
