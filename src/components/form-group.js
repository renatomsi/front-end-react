import React from "react";
// import 'bootswatch/dist/flatly/bootstrap.css'

export default function formGroup(props){
    return(
        <div className="form-group">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
        </div>
    )
}