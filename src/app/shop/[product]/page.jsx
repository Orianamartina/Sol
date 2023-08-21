"use client"
import "./page.css"
import {useParams} from "next/navigation"
import { useEffect, useState } from "react"
import { useStore } from "react-redux"

import Image from "next/image"

export default function ProductDetail() {
    const params = useParams()
    const store = useStore()
    const [data, setData] = useState({})
    const productId = params.product
    useEffect(() => {
        const products = store.getState().redux.value.products
        console.log(products)
        const selectedProduct = products.find(product =>  product.id == productId)
        console.log(selectedProduct)
        setData(selectedProduct)
    })
  
  return (
    <div>
            <div>
             <Image className="productoDetalleImagen"src={data.imagen} alt={data.titulo} />
            </div>

            <h1>{data.titulo}</h1>
            <h2>{data.precio}</h2>
            <p>{data.descripcion}</p>   


    </div>
  )
}
