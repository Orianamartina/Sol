"use client"
import "./page.css"
import {useParams} from "next/navigation"
import { useEffect, useState } from "react"
import { useStore } from "react-redux"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Button from "@/app/sharedComponents/Button"
import Link from "next/link"

export default function ProductDetail() {
    const router = useRouter()
    const params = useParams()
    const store = useStore()
    const [data, setData] = useState({})
    const productId = params.product
    useEffect(() => {
        const products = store.getState().redux.value.products
        const selectedProduct = products.find(product =>  product.id == productId)
        setData(selectedProduct)
    })
  
  return (
    <div id="productDetail">
          
          {data &&
          <>
            <div className="imageDiv">
              <Link href={"/shop"}>
                <Button class="white-no-border" icon="back"/>
              </Link>
              
              <Image className="productoDetalleImagen"src={data.imagen} alt={data.titulo} />
              </div>
              <div className="dataDiv">
                <p>{data.categoria}</p>
                <h1>{data.titulo}</h1>
                <h2>{data.precio}</h2>
                <h3>Ver formas de pago</h3>
                <p>{data.descripcion}</p>
                <div className="buttonBar">
                  <Button text="Como comprar?" class="pink-no-border" />
                  <Button text="Guia de talles" class="pink-no-border" />
                </div>
               
              </div>
          </>
          
          }
            
         


    </div>
  )
}
