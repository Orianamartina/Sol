import "./Header.css"
import Link from "next/link"
import carro from "../../../public/carro.png"
import instagram from "../../../public/instagram.png"
import Image from "next/image"
import logo from "../../../public/logo.png"
import { useEffect, useState } from "react"
function Header() {
  const [openMenu, setOpenMenu] = useState()

  return (

    <>
        <div id="header1">
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
                <h1>otra opcion</h1>
              </Link>
              
              <Link href="/"  className="link" >
                <h1>Contacto</h1>
              </Link> 
                <Link href="/"  className="link" >
                <h1>otra opcion</h1>
              </Link>
              
            </div>
            
        </div>
        <div id="header2">

              <h1 className="menuDots"  onClick={() => setOpenMenu(!openMenu)}>{openMenu? "X": "..."}</h1>
              <Link href="/" className="logoLink" >
                  <Image src={logo}  className="logo"/> 
              </Link>

              <div className={openMenu?"separator":"separator hidden"}>
                <Link href="/" className={openMenu? "link show": "link delay-6"}  >
                  <h1  onClick={() => setOpenMenu(!openMenu)}>Home</h1>
                </Link>
                <Link href="/shop" className={openMenu? "link show": "link delay-5"}  >
                    <h1 onClick={() => setOpenMenu(!openMenu)}>Shop</h1>
                </Link>
                <Link href="/" className={openMenu? "link show": "link delay-4"}   >
                  <h1 onClick={() => setOpenMenu(!openMenu)}>Como comprar</h1>
                </Link>
                <Link href="/" className={openMenu? "link show": "link delay-3"}   >
                  <h1 onClick={() => setOpenMenu(!openMenu)}>otra opcion</h1>
                </Link>
                    
                <Link href="/"  className={openMenu? "link show": "link delay-2"}   >
                  <h1 onClick={() => setOpenMenu(!openMenu)}>Contacto</h1>
                </Link> 
                  <Link href="/"  className={openMenu? "link show": "link delay-1"}  >
                  <h1 onClick={() => setOpenMenu(!openMenu)}>otra opcion</h1>
                </Link>
              </div>
            </div>
            
  
    </>
  
  )
}

export default Header