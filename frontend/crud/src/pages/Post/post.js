import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./post.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const validationPost = yup.object().shape({
  title: yup
    .string()
    .required("O nome da tarefa é obrigatorio")
    .max(100, "O nome da tarefa deve ter menos que 100 caracteres"),
  status: yup.bool().required()
});

function Post() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = data =>
    axios
      .post("http://localhost:3333/criartarefa", data)
      .then(() => {
        console.log("Deu tudo certo");
       
      })
      .catch(() => {
        console.log("DEU ERRADO");
      });

  return (
    <div>
      <main>
        <div className="card-post">
          <h1>Minhas Tarefas</h1>
          <div className="line-post"></div>

          <div className="card-body-post">
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Nome da tarefa</label>
                <input type="name" name="title" {...register("title")} />
                <p className="error-message">{errors.title?.message}</p>
              </div>

              <div className="fields">
                <label>Staus</label>
                <select name="status" id="" {...register("status")}>
                  <option value="true">Concluida</option>
                  <option value="false">Em andamento</option>
                </select>
              </div>

              <div className="btn-post">
                <button type="submit">Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Post;
