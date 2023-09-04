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
    categoria: ["Ropa", "Sweaters"],
    descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
    precio: "$500"},
    {imagen: two,
      id: 2,
    titulo:"Destacado1",
    categoria:["Ropa", "Sacos"],
    descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
    precio: "$500"},
    {imagen: three,
      id: 3,
    titulo:"Destacado1",
    categoria: ["Accesorios", "Pantumedias"],
    descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
    precio: "$500"},
    {imagen: four,
      id: 4,
      titulo:"Destacado1",
      categoria: ["Accesorios", "Cuellos Infinitos"],
      descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
      precio: "$500"},
      {imagen: five,
        id:5,
      titulo:"Destacado1",
      categoria: ["Ropa", "Tops"],
      descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
      precio: "$500"},
      {imagen: six,
        id: 6,
      titulo:"Destacado1",
      categoria: ["Ropa", "Tops"],
      descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
      precio: "$500"},
      {imagen: sampleImage,
        id: 7,
        titulo:"Destacado1",
        categoria: ["Accesorios", "Bufandas"],
        descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
        precio: "$500"},
      
]
const categorias = [
  {Ropa:["Todos", "Sweaters", "Sacos", "Tops"]}, {Accesorios:["Todos", "Pantumedias", "Bufandas", "Cuellos Infinitos"]}
]



export default function Shop() {



  const [productos, setProductos] = useState()
  const [categoria, setCategoria] = useState("")

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
    if (categoria == "Todos"){
      setProductos(products)
    }
    else{
      let productosFiltrados = products.filter(prod => prod.categoria.includes(categoria))
      setProductos(productosFiltrados)
    }
    
    setCategoria(categoria)
  }


  return (
    <>
      <div className={"shopPage"}>
        
        <CategoriasShop categorias={categorias} setCategoria={filtrarProductos} />
        <h3>{categoria}</h3>
        <ProductSection productos={productos}/>
      </div>
    
    </>
    
  )
}

