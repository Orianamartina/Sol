"use client"
import { useState } from "react";
import CategoriasShop from "./CategoriasShop";
import ProductSection from "./ProductSection";
import sampleImage from "../../../public/sampleImage.jpeg"
import "./page.css"
const categorias = [
  "categoria1", "categoria2", "categoria3", "categoria4", "categoria5"
]

const prods =[
  {imagen: sampleImage,
    titulo:"Destacado1",
    categoria: "categoria1",
    precio: "$500"},
    {imagen: sampleImage,
    titulo:"Destacado1",
    categoria: "categoria1",
    precio: "$500"},
    {imagen: sampleImage,
    titulo:"Destacado1",
    categoria: "categoria2",
    precio: "$500"},
    {imagen: sampleImage,
      titulo:"Destacado1",
      categoria: "categoria2",
      precio: "$500"},
      {imagen: sampleImage,
      titulo:"Destacado1",
      categoria: "categoria3",
      precio: "$500"},
      {imagen: sampleImage,
      titulo:"Destacado1",
      categoria: "categoria4",
      precio: "$500"},
      {imagen: sampleImage,
        titulo:"Destacado1",
        categoria: "categoria5",
        precio: "$500"},
      
]


export default function Shop() {

  const [categoria, setCategoria] = useState()

  const [productos, setProductos] = useState()

  return (
    <div id="shopPage">
      <CategoriasShop categorias={categorias} setCategoria={setCategoria} />
      <ProductSection productos={prods} />
    </div>
  )
}

