import React, {useState} from 'react'
import './Mega.css'

export default function Mega(props){

    function gerarNumeros(qtde){
        const numeros = Array(qtde).fill(0)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1,60,nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1,n2)=> n1-n2)
        return numeros;
    
    }
    
    
    
    function gerarNumeroNaoContido(min, max, array){
    
        const aleatorio = parseInt(Math.random()*(max+1-min))+min;
        return array.includes(aleatorio)?gerarNumeroNaoContido(min,max,array) : aleatorio
    }


const [qtde, setQtde] = useState(props.qtde || 6)
const numeroInicias = Array(qtde).fill(0);
const [numeros, setNumeros] = useState(numeroInicias);

    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h1>{numeros.join(" ")}</h1>
            <div>
                <label>Quantidade de números</label>
                <input
                min="6" 
                max="15"
                type="number" 
                value={qtde} 
                onChange={(e) => {
                    setQtde(+e.target.value)
                    setNumeros(+e.target.value)}}/>
            </div>
            <button onClick={_=>setNumeros(gerarNumeros(qtde))}>
                Gerar Numeros
                </button>
        </div>
    )

}