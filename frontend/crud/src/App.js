import './App.css';
import {useState} from 'react';
import api from './services/api';



function App() {
  return (
    <div className="app--container">
      <div className="register--container">
        <h1>Minhas Tarefas</h1>
          <input 
           type="text" 
           name="name"
           placeholder='Nome da tarefa' 
           className='register--input'
          />
          <select name="" id="">
            <option value="true">Concluida</option>
            <option value="false">Em andamento</option>
          </select>
          <button>Cadastrar</button>
      </div>
      <div>
        <div class='task'>  {/* Nessa div vai o mapping */}
          <h3>Teste</h3>
          <span>True</span>
        </div>
      </div>
    </div>
  );
}

export default App;
