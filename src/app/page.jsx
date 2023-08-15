import Header from "./components/Header"
import Banner from "./components/Banner"
import Destacados from "./components/Destacados"
import sampleImage from "../../public/sampleImage.jpeg"
import Categorias from "./components/Categorias"

import sampleImage2 from "../../public/sampleImage2.jpg"

const destacados = [
  {imagen: sampleImage,
  titulo:"Destacado1",
  precio: "$500"},
  {imagen: sampleImage,
  titulo:"Destacado1",
  precio: "$500"},
  {imagen: sampleImage,
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
            <Categorias categorias={categorias}/>
           {/* <MoreContent />
            <Info /> 
    <Footer />*/}

        </>
    )
}