"use client"
import "./globals.css"
import Banner from "./components/Banner"
import Destacados from "./components/Destacados"
import sampleImage from "../../public/sampleImage.jpeg"
import { getProducts } from "./redux/redux"
import sampleImage2 from "../../public/sampleImage2.jpg"
import one from "../../public/1.png"
import two from "../../public/2.png"
import three from "../../public/3.png"
import four from "../../public/4.png"
import five from "../../public/5.png"
import six from "../../public/6.png"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import MainBanner from "./components/mainBanner"



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

export default function Home () {
    const dispatch = useDispatch()
    const [productos, setProductos] = useState([])
    const [destacados, setDestacados] = useState([])
    useEffect(() => {
        dispatch(getProducts(prods))
        setProductos(prods)
        setDestacados(prods.slice(0, 5))
    },[])
      
    return(
        <>
            <MainBanner />
            <Destacados destacados={destacados}  />
          {/*  <Categorias categorias={categorias}/>
            <MoreContent />
            <Info /> 
    <Footer />*/}

        </>
    )
}