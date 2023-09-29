import  "./Button.css"
import back from "../../../public/back.png"
import Image from "next/image"



function Button(props) {

  return (
    <>
        <button className={props.class? props.class : "white-green-border-black"} onClick={props.onClick}>
            {props.icon == "back" && <Image className="icon" alt="back" src={back}/>}
            {props.text && <h1>{props.text}</h1>}
        </button>
    </>
  )
}

export default Button