import React,  { useState } from 'react';
import './Card.css'
import EditButton from '../Components/EditButton/EditButton';
import InputText from '../Components/InputText/InputText';
import SaveButton from '../Components/SaveButton/SaveButton';

const Card = (props) => {
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState(props.text);
    const [editTitle, setEditTitle] = useState(props.title);
    const [textBackUp, setTextBackUp] = useState('');
    const [titleBackUp, setTitleBackUp] = useState('');

    
    /*const addTextNew = () => {
        
        if( props.text !== " ")
        {
            setEditText(props.text);
            console.log(props.text);
        }
    }*/

 
    const handleClick = () => {
        setEdit(true);
    }

    const handleChangeTitle = event =>{
        setTitleBackUp(event.target.value);
    }

    const handleChange = event =>{
        setTextBackUp(event.target.value);
    }

    const handleClickSave = () => {
        if(titleBackUp != '' && textBackUp != ''){
        setEditTitle(titleBackUp);
        setEditText(textBackUp);
        setEdit(false);
        console.log(editText);
        }
        else{
            setEdit(false);
        }
    }


    
    return (
        <div className="containerCard">
           {edit ?
                <div>
                    <div className="titulo">
                        <h2>
                        <div className="editTitle">
                            <InputText changed={handleChangeTitle} value={titleBackUp} /> 
                        </div> 
                        </h2>
                    </div>
                    <div className="containerTextCard">
                        <h3>
                        <div className="edit">
                            <InputText changed={handleChange} value={textBackUp} /> 
                        </div>
                        </h3>
                        
                    </div>
                    <SaveButton clickedr={handleClickSave}>Save</SaveButton>
                </div>
                :
                <div>
                    <div className="titulo">
                        <h2>{editTitle}</h2>
                    </div>
                    <div className="containerTextCard">
                        <h3>{ editText }</h3>
                    </div>
                    <EditButton clicked={handleClick}>Edit</EditButton>
                </div>
            } 
               
            
            
            
        </div>
    )
}

export default Card;
