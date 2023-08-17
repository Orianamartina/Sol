import "./Header.css"
import Link from "next/link"
import carro from "../../../public/carro.png"
import instagram from "../../../public/instagram.png"
import Image from "next/image"
import logo from "../../../public/logo.png"
function Header() {



  return (

    <>
        <div id="header">
          <div className="separator">
            <Link href="/" className="link" >
              <h1>Home</h1>
            </Link>
            <Link href="/shop" className="link" >
                <h1>Shop</h1>
            </Link>
              <Link href="/" className="link" >
                <h1>Como comprar</h1>
              </Link>
              


          </div>
          <Link href="/" className="logoLink">
              <Image src={logo}  className="logo"/> 
          </Link>
         
            <div className="separator">
              <Link href="/" className="link" >
                <h1>Como comprar</h1>
              </Link>
              
              <Link href="/"  className="link" >
                <h1>Contacto</h1>
              </Link> 
                <Link href="/"  className="link" >
                <h1>Instagram</h1>
              </Link>
              
            </div>
            
        </div>
    
    </>
  
  )
}

export default Header