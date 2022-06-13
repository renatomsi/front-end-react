import React from "react";


export default function NavbarItens(props) {
  return(
    <li className="nav-item">
      <a className="nav-link" href={props.href}>{props.label}</a>
    </li>
  )
  
}