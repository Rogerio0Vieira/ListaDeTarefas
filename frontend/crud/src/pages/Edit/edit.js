import React from "react";
import { Link } from 'react-router-dom';

function Edit(){
  return(
    <div>
      <h1>Editar</h1> 
      <div>
        <Link to="/">
        <button>Cadastrar Nova Tarefa</button>
        </Link>
      </div> 
    </div>

    
    
  )
}

export default Edit;