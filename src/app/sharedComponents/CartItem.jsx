

import React from 'react'

export default function CartItem({product}) {
  return (
    <div>
      <h1>{product.titulo}</h1>
    
      <h2>{product.precio}</h2>
    </div>
  )
}
