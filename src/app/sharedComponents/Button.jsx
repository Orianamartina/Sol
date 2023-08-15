import  "./Button.css"





function Button(props) {

  return (
    <>
        <button className={props.class}>
            <h1>{props.text}</h1>
        </button>
    </>
  )
}

export default Button