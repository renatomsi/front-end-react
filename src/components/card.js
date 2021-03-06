import React from 'react';
// import 'bootswatch/dist/flatly/bootstrap.css'

export default function Card(props){
    return (
        <div className='card mb-3 '>
            <h3 className='card-header'>{props.title}</h3>
            <div className='card-body '>
                {props.children}
            </div>
        </div>
    )
}
