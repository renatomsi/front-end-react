import React from "react";
// import 'bootswatch/dist/flatly/bootstrap.css'

export default function formGroup(props){
    return(
        <div className="form-group mt-4">
            <label htmlFor={props.htmlFor} className="form-label ">{props.label}</label>
            {props.children}
        </div>
    )
}