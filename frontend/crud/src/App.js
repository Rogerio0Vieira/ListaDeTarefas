import React, { useEffect, useState } from "react";
import api from "./services/api";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from "axios";
import Post from "./pages/Post/post";
import Edit from "./pages/Edit/edit";
import List from "./pages/List/list";

function App() {
  /*const addPost = data => axios.post("http://localhost:3333/criartarefa", data)
  .then(()=>{
    console.log('Ok')
  }).catch(()=>{
    console.log('errou')
  })*/

  /*const [post, setPosts] = useState([])

  useEffect(() =>{
    api.get("http://localhost:3333/tarefas")
    .then((response) =>{
      setPosts(response.data)
    }).catch(() =>{
      console.log('errou')
    })

  }, [])*/

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Post/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </Router>
  );
}

export default App;
