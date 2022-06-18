import React from "react";


export default function SelectMenu(props) {

  const lista = props.lista.map((item, index)=>{
    return(
      <option key={index} value={item.value}>{item.label}</option>
    )
  })
  
  return(
    <select {...props}>
        {lista}
    </select>
  )
}