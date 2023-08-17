"use client"
import { useState } from "react";
import CategoriasShop from "./CategoriasShop";
import ProductSection from "./ProductSection";
import sampleImage from "../../../public/sampleImage.jpeg"
import "./page.css"
import Producto from "./Producto";
import one from "../../../public/1.png"
import two from "../../../public/2.png"
import three from "../../../public/3.png"
import four from "../../../public/4.png"
import five from "../../../public/5.png"
import six from "../../../public/6.png"

const categorias = [
  "categoria1", "categoria2", "categoria3", "categoria4", "categoria5"
]

const prods =[
  {imagen: one,
    titulo:"Destacado1",
    categoria: "categoria1",
    descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
    precio: "$500"},
    {imagen: two,
    titulo:"Destacado1",
    categoria: "categoria1",
    descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
    precio: "$500"},
    {imagen: three,
    titulo:"Destacado1",
    categoria: "categoria2",
    descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
    precio: "$500"},
    {imagen: four,
      titulo:"Destacado1",
      categoria: "categoria2",
      descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
      precio: "$500"},
      {imagen: five,
      titulo:"Destacado1",
      categoria: "categoria3",
      descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
      precio: "$500"},
      {imagen: six,
      titulo:"Destacado1",
      categoria: "categoria4",
      descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
      precio: "$500"},
      {imagen: sampleImage,
        titulo:"Destacado1",
        categoria: "categoria5",
        descripcion:"hola buenas tardes como te va esto es un texto para tener de ejemplo en la descripcion del articulo",
        precio: "$500"},
      
]


export default function Shop() {

  const [categoria, setCategoria] = useState()

  const [productos, setProductos] = useState()
  const [selectedProducto, setSelectedProducto] = useState()

  return (
    <>
      {selectedProducto? <Producto producto={selectedProducto} close={() => setSelectedProducto(null)}/>: ""}
      <div className={selectedProducto? "blurry": "shopPage"}>
        
        <CategoriasShop categorias={categorias} setCategoria={setCategoria} />
        <ProductSection productos={prods} setSelectedProducto={setSelectedProducto}/>
      </div>
    
    </>
    
  )
}

