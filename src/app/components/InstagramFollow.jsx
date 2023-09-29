import instagram from "../../../public/instagram.png"
import Image from "next/image"
import Button from "../sharedComponents/Button"
import "./InstagramFollow.css"


export default function InstagramFollow() {
  return (
    <div id="instagramFollow">
        <div>
            <Image className="instagramFollowImage" src={instagram} height={100} width={100}/>
            soltejidos_
        </div>
        <Button class="white-green-border-black" text="SEGUINOS" />
    </div>
  )
}
