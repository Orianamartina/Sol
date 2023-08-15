import "./Header.css"
import Link from "next/link"


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
            <h1>Instagram</h1>
            <h1>carrito</h1>
        </div>
    
    </>
  
  )
}

export default Header