import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/card'
import FormGroup from "../components/form-group";
import { salvarUsuario } from "../app/service/usuarioService";
import { notifySuccess, notifyError, notifyValidarCampos } from "../components/notifications"; 

export default function CadastroUsuario(props){
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");
  const [confirmaSenha, setconfirmaSenha] = useState("");

  const navigate = useNavigate();

  function goLogin() {
    navigate("/login")
  }

  function validarCampos() {
    const msgs = [];

    if(!name){
      msgs.push("O campo Nome é obrigatório.")
    }

    if(!email){
      msgs.push("O campo Email é obrigatório.")
    }else if( !email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
      msgs.push("Informe um Email válido.")
    }

    if(!senha || !confirmaSenha){
      msgs.push("O campo Senha e Confirmação da Senha é obrigatório.")
    }else if (senha !== confirmaSenha){
      msgs.push("As Senhas são diferentes!")

    }

    return msgs;

  }

  function getDadosUsuario(){

    const msgs = validarCampos();

    if(msgs && msgs.length > 0){
      msgs.map((item=>{
        return notifyValidarCampos(item)
      }))
      return false
    }
    
    const usuario = {
      email: email,
      name: name,
      senha: senha
    }

    salvarUsuario(usuario)
    .then( response => {
      notifySuccess("Usuário cadastrado com sucesso! Faça login para acessar o sistema.")
      navigate("/login")
    }).catch(erro =>{
      notifyError(erro.response.data)
    })

  }


  return(

    <Card title="Cadastro de Usuário">
      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <FormGroup label="Nome: *" htmlFor="inputname">
              <input type="text" id="inputname" className="form-control" name="name" value={name} onChange={(e) => setname(e.target.value)} />
            </FormGroup>
            <FormGroup label="Email: *" htmlFor="inputEmail">
              <input type="email" id="inputEmail" className="form-control" name="email" value={email} onChange={(e) => setemail(e.target.value)} required />
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