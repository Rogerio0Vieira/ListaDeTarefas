import React from "react";
import { Link } from 'react-router-dom';

function List(){
  return(
    <div>
      <h1>Listar</h1>  
      <div>
        <Link to="/edit">
        <button>Editar</button>
        </Link>
      </div>
    </div>
  )
}

export default List;