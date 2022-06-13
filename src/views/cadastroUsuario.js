import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/card'
import FormGroup from "../components/form-group";

export default function CadastroUsuario(props){
  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");

  const navigate = useNavigate();

  function goLogin() {
    navigate("/login")
  }

  function getDadosUsuario(){
    console.log(nome, email, senha, confirmaSenha)
  }


  return(

    <Card title="Cadastro de Usuário">
      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <FormGroup label="Nome: *" htmlFor="inputNome">
              <input type="text" id="inputNome" className="form-control" name="nome" value={nome} onChange={(e) => setnome(e.target.value)} />
            </FormGroup>
            <FormGroup label="Email: *" htmlFor="inputEmail">
              <input type="email" id="inputEmail" className="form-control" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
            </FormGroup>
            <FormGroup label="Senha: *" htmlFor="inputSenha">
              <input type="password" id="inputSenha" className="form-control" name="senha" value={senha} onChange={(e) => setsenha(e.target.value)} />
            </FormGroup>
            <FormGroup label="Confirme a Senha: *" htmlFor="inputRepeteSenha">
              <input type="password" id="inputRepeteSenha" className="form-control" name="repeteSenha" value={confirmaSenha} onChange={(e) => setconfirmaSenha(e.target.value)} />
            </FormGroup>
            <button type="button" onClick={getDadosUsuario} className="btn btn-success mt-4">Salvar</button>
            <button type="button" onClick={goLogin} className="btn btn-danger mt-4">Voltar</button>

          </div>

        </div>

      </div>

    </Card>

  )

}