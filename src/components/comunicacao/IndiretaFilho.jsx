import React from 'react';

export default function IndiretaFilho(props){
   const min = 50;
   const max = 70;
    const gerarIdade = () => parseInt(Math.random() * (max-min)) + min;
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
           <div>Filho </div>
           <button onClick={function(e){
            props.quandoClickar('João', gerarIdade(), gerarNerd());
           }}>Fornecer Informações</button>
        </div>
    )
}