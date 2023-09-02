"use client"
import { useEffect, useState } from "react";
import { useDispatch, getState, useStore } from "react-redux";
import { getProducts } from "../redux/redux";

import CategoriasShop from "./CategoriasShop";
import ProductSection from "./ProductSection";
import sampleImage from "../../../public/sampleImage.jpeg"
import "./page.css"
import one from "../../../public/1.png"
import two from "../../../public/2.png"
import three from "../../../public/3.png"
import four from "../../../public/4.png"
import five from "../../../public/5.png"
import six from "../../../public/6.png"
const prods =[
  {imagen: one,
    id: 1,
    titulo:"Destacado1",
    categoria: "categoria1",
    descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
    precio: "$500"},
    {imagen: two,
      id: 2,
    titulo:"Destacado1",
    categoria: "categoria1",
    descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
    precio: "$500"},
    {imagen: three,
      id: 3,
    titulo:"Destacado1",
    categoria: "categoria2",
    descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
    precio: "$500"},
    {imagen: four,
      id: 4,
      titulo:"Destacado1",
      categoria: "categoria2",
      descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
      precio: "$500"},
      {imagen: five,
        id:5,
      titulo:"Destacado1",
      categoria: "categoria3",
      descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
      precio: "$500"},
      {imagen: six,
        id: 6,
      titulo:"Destacado1",
      categoria: "categoria4",
      descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
      precio: "$500"},
      {imagen: sampleImage,
        id: 7,
        titulo:"Destacado1",
        categoria: "categoria5",
        descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
        precio: "$500"},
      
]
const categorias = [
  {Ropa:["Sweaters", "Sacos", "Tops"]}, {Accesorios:["Pantumedias", "Bufandas", "Cuellos Infinitos"]}
]



export default function Shop() {


  const [categoria, setCategoria] = useState("")
  const [productos, setProductos] = useState()
  const [selectedProducto, setSelectedProducto] = useState()
  const dispatch = useDispatch()
  const store = useStore()
  useEffect(() => {
    const products = store.getState().redux.value.products
    if (products.length > 1){
      setProductos(products)
    }else{
      dispatch(getProducts(prods))
      setProductos(prods)
    }
    
  },[])
  
 const filtrarProductos = (categoria) => {
    const products = store.getState().redux.value.products
    if (categoria == "todos"){
      setProductos(products)
    }
    else{
      let productosFiltrados = products.filter(prod => prod.categoria == categoria)
      setProductos(productosFiltrados)
    }
    
  
  }


  return (
    <>
      <div className={"shopPage"}>
        <CategoriasShop categorias={categorias} setCategoria={filtrarProductos} />
        <ProductSection productos={productos} setSelectedProducto={setSelectedProducto}/>
      </div>
    
    </>
    
  )
}

