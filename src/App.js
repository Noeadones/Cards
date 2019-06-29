import React, { useState } from 'react';
import './App.css';
import Card from './Card/Card';
import InsertCard from './Components/InsertCard/InsertCard';

function App() {
  const [CardArray, setCardArray] = useState([]);
  //const [item, setItem] = useState({title:"titulo!", description:"ueueueueue"});

  const addCard = (textit, titleit ) =>{
    if (titleit != 0){
    console.log([...CardArray, {textit, titleit }]);
    setCardArray([...CardArray, {textit, titleit }] );
    }
  };

  return (
    <div className="App">
      
      <header className="App-header">
        <InsertCard clicked={addCard}/>
        <div className="containerCard2">
  
        {CardArray.map(
           (i)=><Card text={i.textit} title={i.titleit} ></Card>
        )}
        </div> 
        
      </header>
     
    </div>
  );

  
}

export default App;
