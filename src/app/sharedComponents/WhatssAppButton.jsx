import Image from 'next/image'
import wp from "../../../public/whatsapp.png"
import "./WhatssAppButton.css"
import React from 'react'

function WhatssAppButton() {
  return (
    <div>
        <Image src={wp} className='wpbutton' alt='WhatsApp'/>
    </div>
  )
}

export default WhatssAppButton