import React, {useState, useEffect} from "react";

import Card from "../../components/card";
import FormularioGrupo from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import { buscaListaMeses, buscaListasTipos, salvarLancamento } from "../../app/service/lancamentosService";
import { obterItem } from "../../app/service/localStorageService";
import * as messages from "../../components/notifications"
import { useNavigate, useParams } from "react-router-dom";


export default function CadastroLancamentos() {
  const meses = buscaListaMeses();
  const tipos = buscaListasTipos(); 
  const [descricao, setdescricao] = useState("");
  const [mes, setmes] = useState("");
  const [ano, setano] = useState("");
  const [valor, setvalor] = useState("");
  const [tipo, settipo] = useState("");
  const [status, setstatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();



  function onSubimit() {
    const usuarioLogado = obterItem('_usuario_logado_');

    if(!tipo){
      messages.notifyError("Preencha todos os campos!")
      return false
    }

    const lancamento = {descricao, ano, mes, valor, tipo, usuario : usuarioLogado.id}

    salvarLancamento(lancamento)
    .then(response =>{
      messages.notifySuccess("Lançamento cadastrado com sucesso!")
      navigate('/cadastro-lancamentos')
    }).catch(error =>{
      messages.notifyError(error.response.data)
    })
  }

  return (
    <Card title="Cadastro de Lançamentos" >
      <div className="row">
        <div className="col-md-12">
          <FormularioGrupo htmlFor="inputDesc" label="Descrição: *">
            <input type="text" id="inputDesc" value={descricao} onChange={e => setdescricao(e.target.value)} className="form-control" />
          </FormularioGrupo>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <FormularioGrupo label="Ano: *" htmlFor="inputAno">
            <input type="text" id="inputAno" value={ano} onChange={e => setano(e.target.value)} className="form-control" />
          </FormularioGrupo>
        </div>
        <div className="col-md-6">
          <FormularioGrupo label="Mês: *" htmlFor="inputMes">
            <SelectMenu lista={meses} className="form-control" value={mes} onChange={e => setmes(e.target.value)} />
          </FormularioGrupo>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <FormularioGrupo label="Valor: *" htmlFor="inputValor">
            <input type="text" id="inputValor" value={valor} onChange={e => setvalor(e.target.value)} className="form-control" />
          </FormularioGrupo>
        </div>
        <div className="col-md-4">
          <FormularioGrupo label="Tipo: *" htmlFor="inputTipo">
            <SelectMenu lista={tipos} value={tipo} onChange={e => settipo(e.target.value)} className="form-control" id="inputTipo" />
          </FormularioGrupo>
        </div>
        <div className="col-md-4">
          <FormularioGrupo label="Status: " htmlFor="inputStatus">
            <input type="text" id="inputStatus" value={status} className="form-control" disabled />
          </FormularioGrupo>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <button className="btn btn-success mt-4" onClick={onSubimit}>Salvar</button>
          <button onClick={e => navigate('/consulta-lancamentos')} className="btn btn-danger mt-4">Cancelar</button>
        </div>
      </div>

    </Card>
  )
  
}