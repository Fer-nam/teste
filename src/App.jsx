import './App.css';

import TabelaProdutos from './components/repeticao/TabelaProdutos';
import React from 'react'
import Familia from './components/basico/Familia';
import FamiliaMembro from './components/basico/FamiliaMembro';
import Primeiro from './components/basico/Primeiro'; // modulo1
import ComParametro from './components/basico/ComParametro';
import Fragmento from './components/basico/Fragramentos';
import Aleatorio from './components/basico/aleatorio';
import Card from './components/layout/Card';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import "./components/comunicacao/DiretaPai";
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';




//Forma reduzida
export default function App(){
return (
        
        <div className='App'>

        <h1>Fundamento React</h1>
        <h2>Exercícios</h2>

        <div className='Cards'>

        <Card titulo="Mega-sena" color="#89006e">

        <Mega></Mega>
        </Card>

         <Card titulo="Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
                
        </Card>       
        
        <Card titulo ="Componente Controlado" color="#E45F56">
        <Input></Input>
        </Card>

        <Card titulo="Comunicação indireta" color="#8bad39">
                <IndiretaPai></IndiretaPai>
        </Card>
        
        <Card titulo="Comunicação direta" color="#59323C">
        <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="Renderização condicional 2">
        <UsuarioInfo usuario={{nome:'Fernando'}}/>
        
        <UsuarioInfo usuario={{email: 'fe@nando.com'}}/>

        </Card>
        <Card titulo="Renderização condicional" color="#982395">

        <ParOuImpar numero={21}></ParOuImpar>
        </Card>

        <Card titulo="Desafio repetição" color="#FF432E">
        <TabelaProdutos></TabelaProdutos>

        </Card>

        <Card titulo="Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="Componentes com filhos " color="#00c8f8"> 
                <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                </Familia>
        </Card>
        <Card titulo="Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={10}/>
        </Card>

        <Card titulo="Primeiro" color="#e94c6f">
        <Primeiro/>
        </Card>

       <Card titulo="ComParametro" color="#E8B71A">
        <ComParametro
        titulo="Situação do Aluno"
        aluno="Pedro"
        nota={9.5}/>
      
        </Card>

        <Card titulo="Fragmento" color="#588c73">
        <Fragmento/>
        </Card>
        </div>
</div>
)
}
  
