import React,  { useState } from 'react';
import './InsertCard.css';
import InputText from '../InputText/InputText';
import SaveButton from '../SaveButton/SaveButton';
import {Link} from 'react-router-dom';

const InsertCard = (props) => {
    //const [CardArray, setCardArray] = useState([]);
    const [textBackUp, setTextBackUp] = useState('');
    const [titleBackUp, setTitleBackUp] = useState('');

  
    const handleChange = event =>{
        
        setTextBackUp(event.target.value);
      
    }

    const handleChange2 = event => {
        setTitleBackUp(event.target.value);
    }

    
    const onClick = () => {
        if(textBackUp != '' && titleBackUp !=''){
        props.clicked(textBackUp, titleBackUp);
        }
    }
    
    return (
        <div className="containerBoths">
        <div className="containerInsert">
            <h2>Ingrese Algo</h2>
            <InputText changed={handleChange2} value={titleBackUp} />
            <br/>
            <div className="containerInputText">
            <InputText changed={handleChange} value={textBackUp} /> 
            </div>
            <SaveButton clickedr={onClick}>Save</SaveButton>
            <br/>
        
            <Link to="/Login">Sign In!!!!</Link>
        </div>
        
        
        
        </div>
    )
}

export default InsertCard
