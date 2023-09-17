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
              <h1>HOME</h1>
            </Link>
            <Link href="/shop" className="link" >
                <h1>SHOP</h1>
            </Link>
              <Link href="/como-comprar" className="link" >
                <h1>COMO COMPRAR</h1>
              </Link>
              


          </div>
          <Link href="/" className="logoLink">
              <Image src={logo}  className="logo"/> 
          </Link>
         
            <div className="separator">
              <Link href="/" className="link" >
                <h1>OPCION</h1>
              </Link>
              
              <Link href="/contacto"  className="link" >
                <h1>CONTACTO</h1>
              </Link> 
                <Link href="/"  className="link" >
                <h1>OPCION</h1>
              </Link>
              
            </div>
            
        </div>
        <div id="header2">

              <h1 className="menuDots"  onClick={() => setOpenMenu(!openMenu)}>{openMenu? "X": "..."}</h1>
              <Link href="/" className="logoLink" >
                  <Image src={logo}  className="logo"/> 
              </Link>

              <div className={openMenu?"separator":"separator hidden"}>
                <Link href="/" className={openMenu? "link show delay-1": "link opac0 delay-6"}  >
                  <h1  onClick={() => setOpenMenu(!openMenu)}>HOME</h1>
                </Link>
                <Link href="/shop" className={openMenu? "link show delay-2": "link opac0 delay-5"}  >
                    <h1 onClick={() => setOpenMenu(!openMenu)}>SHOP</h1>
                </Link>
                <Link href="/" className={openMenu? "link show delay-3": "link opac0 delay-4"}   >
                  <h1 onClick={() => setOpenMenu(!openMenu)}>COMO COMPRAR</h1>
                </Link>
                <Link href="/" className={openMenu? "link show delay-4": "link opac0 delay-3"}   >
                  <h1 onClick={() => setOpenMenu(!openMenu)}>OPCION</h1>
                </Link>
                    
                <Link href="/"  className={openMenu? "link show delay-5": "link opac0 delay-2"}   >
                  <h1 onClick={() => setOpenMenu(!openMenu)}>CONTACTO</h1>
                </Link> 
                  <Link href="/"  className={openMenu? "link show delay-6": "link opac0 delay-1"}  >
                  <h1 onClick={() => setOpenMenu(!openMenu)}>OPCION</h1>
                </Link>
              </div>
            </div>
            
  
    </>
  
  )
}

export default Header