import React from 'react'
import '../InputText/InputText.css'

const InputText = (props) => {
    return (
        <input type="text" placeholder="Ingresa algo" onChange={props.changed} value={props.value}></input>
    );
}

export default InputText
