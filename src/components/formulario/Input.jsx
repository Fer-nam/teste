import React, {useState}from 'react';
import './Input.css';


export default function Input(props){
   
    const [valor, setValor] = useState('inicial')

    function quandoMudar(e){
        setValor(e.target.value)
        

    }
    return (
        <div className="Input">
            <div style={{
                display:'flex',
                flexDirection: 'column'

            }}>
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar} />
            <input value={valor} readOnly />
            <input value={undefined} /> 
            </div>
        </div>
    )
}