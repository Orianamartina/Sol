"use client"
import "./page.css"
import {useParams} from "next/navigation"
import { useEffect, useState } from "react"
import { useStore } from "react-redux"
import Image from "next/image"
import Button from "@/app/sharedComponents/Button"
import Link from "next/link"
import ComoComprar from "@/app/como-comprar/page"
import { useDispatch } from "react-redux"
import { addProductToCart } from "@/app/redux/redux"

export default function ProductDetail() {
    const dispatch = useDispatch()
    const params = useParams()
    const store = useStore()
    const [data, setData] = useState({})
    const [openModal, setOpenModal] = useState()
    const productId = params.product
    useEffect(() => {
        const products = store.getState().redux.value.products
        const selectedProduct = products.find(product =>  product.id == productId)
        setData(selectedProduct)
    })
  
  return (
    <div>
          
          {data &&
          <>

            {openModal && <ComoComprar modal={true} setOpen={setOpenModal} />
            }
            <div id="productDetail" className={openModal && "blurry"}> 
              <div className="productImageDiv">
                <Link href={"/shop"}>
                  <Button class="white-no-border" icon="back"/>
                </Link>
                <div className="productImageContainer">
                  <Image className="productoDetalleImagen"src={data.imagen} alt={data.titulo} />
                </div>
                
              </div>
                <div className="dataDiv">
                  <p>{data.categoria}</p>
                  <h1>{data.titulo}</h1>
                  <h2>{data.precio}</h2>
                  <h3>Ver formas de pago</h3>
                  <p>{data.descripcion}</p>
                  <div className="buttonBar">
                    <Button text="Como comprar?" class="pink-no-border" onClick={() => setOpenModal(true)} />
                    <Button text="Guia de talles" class="pink-no-border" />
                  
                  </div>
                    <Button text="Agregar al carrito" class="white-green-border-black" onClick={() => dispatch(addProductToCart(data))}/>
                
                </div>
              </div>
          </>
          
          }
            
         


    </div>
  )
}
