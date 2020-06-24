import React from "react"

function ProductComponent(props) {
    

    
  return (
    <div style={{background: props.description && props.price >= 0 && props.name  ? 'blue' : 'red'}}>
    <h1>{props.name}</h1>
    <h1>{props.price}</h1>
    <h1>{props.description}</h1>
    </div>
  )
}

export default ProductComponent