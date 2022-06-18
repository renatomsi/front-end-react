import React, {useState, useEffect} from "react";
import httpClient from "../app/apiservice";
import {obterItem} from "../app/service/localStorageService";

import { getSaldo } from "../app/service/usuarioService";

export default function Home() {
  const [saldo, setsaldo] = useState(0);

  useEffect(() => {
    const usuarioLogado = obterItem('_usuario_logado_')

    getSaldo(usuarioLogado.id)
      .then(response => {
        setsaldo(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, []);

  return(
    <div className="container-fluid bg-light p-5">
      <h1 className="display-3">Bem vindo!</h1>
      <p className="lead">Esse é seu sistema de finanças.</p>
      <p className="lead">Seu saldo para o mês atual é de R$ {saldo}</p>
      <hr className="my-4" />
      <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="/cadastro-usuario" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
        <a className="btn btn-danger btn-lg" href="https://bootswatch.com/flatly/#" role="button"><i className="fa fa-users"></i>  Cadastrar Lançamento</a>
      </p>
    </div>
  )
  
}