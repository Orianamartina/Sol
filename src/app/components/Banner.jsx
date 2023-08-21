import Button from "@/app/sharedComponents/Button"
import "./Banner.css"
import Image from "next/image"
import one from "../../../public/plant.jpg"

function Banner() {
  return (

        <div className="banner2">

          <div className="div1">
              <Image className="image1" src={one} />
          </div>
          <div className="div2">
            <Image className="image2"  src={one} />
            <Image className="image2"  src={one} />
          </div>

        </div>)

  
}

export default Banner