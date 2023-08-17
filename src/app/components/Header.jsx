import "./Header.css"
import Link from "next/link"
import carro from "../../../public/carro.png"
import instagram from "../../../public/instagram.png"
import Image from "next/image"
import sampleImage from "../../../public/sampleImage.jpeg"
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
          </div>
          <Link href="/" className="logoLink">
              <Image src={sampleImage}  className="logo"/> 
          </Link>
         
            <div className="separator">
              <Link href="/" className="link" >
                <h1>Info</h1>
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