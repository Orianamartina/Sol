import Header from "./components/Header"
import Banner from "./components/Banner"
import Destacados from "./components/Destacados"
import sampleImage from "../../public/sampleImage.jpeg"
import Categorias from "./components/Categorias"

import sampleImage2 from "../../public/sampleImage2.jpg"
import one from "../../public/1.png"
import two from "../../public/2.png"
import three from "../../public/3.png"
import four from "../../public/4.png"
import five from "../../public/5.png"
import six from "../../public/6.png"



const destacados = [
  {imagen: one,
  titulo:"Top verde",
  precio: "$500"},
  {imagen: two,
  titulo:"Coso blanco(?",
  precio: "$500"},
  {imagen: three,
  titulo:"Mocasines bb",
  precio: "$500"},
  {imagen: four,
    titulo:"Destacado1",
    precio: "$500"},
    {imagen: five,
    titulo:"Destacado1",
    precio: "$500"},
    {imagen: six,
    titulo:"Destacado1",
    precio: "$500"},

]

const categorias = [
    {title: "categoria1",
image: sampleImage2},
{title: "categoria2",
image: sampleImage2},
{title: "categoria3",
image: sampleImage2},
{title: "categoria4",
image: sampleImage2},
{title: "categoria5",
image: sampleImage2},

]
export default function home () {



    return(
        <>
            <Banner />
            <Destacados destacados={destacados} />
          {/*  <Categorias categorias={categorias}/>
            <MoreContent />
            <Info /> 
    <Footer />*/}

        </>
    )
}