import "./Header.css"
import Link from "next/link"
import carro from "../../../public/carro.png"
import instagram from "../../../public/instagram.png"
import Image from "next/image"

function Header() {



  return (

    <>
        <div id="header">
          <Link href="/">
              <h1>Home</h1>
          </Link>
          <Link href="/shop">
               <h1>Shop</h1>
          </Link>
         
            <h1>Info</h1>
            <h1>Contacto</h1>
            <h1>SOL</h1>
            <Image src={instagram} className="icono" />
            <Image src={carro} className="icono" />
        </div>
    
    </>
  
  )
}

export default Header