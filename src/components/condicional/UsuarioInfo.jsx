import React from 'react'
import  {If} from './if'

export default function UsuarioInfo(props){
    const usuario = props.usuario || {};
    return(
        <div>
        <If test={usuario && usuario.nome}>
            Seja bem vindo <strong>{usuario.nome}</strong>
        </If>

        <If test={usuario || usuario.nome}>
            Seu email é {usuario.email}
          

        </If>
        
        </div>
    )
};