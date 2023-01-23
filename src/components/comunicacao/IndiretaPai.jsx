import React, {useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

export default function DiretaPai(props){
    
    let [nome, setNome] =useState('?');
    let [idade, setIdade] =useState(0);
    let [nerd, setNerd] =useState(false);


    //Nome idade nerd
    function fornecerInformações(nome,idade,nerd ){
     setNome(nome)
     setIdade(idade)
     setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span>{nerd ? 'Verdadeiro': 'Falso'}</span>
            </div>

            <IndiretaFilho quandoClickar={fornecerInformações}></IndiretaFilho>
        </div>
    )
}