import React from 'react';

export default function PassoForm(props){
    return (
        <div>
        <label htmlFor="passoInput"></label>
        <input 
        id ="passoInput" 
        type="number" 
        value={props.passo} 
        onChange={e => props.setPasso(+e.target.value)}
        />
    </div>
    )
}