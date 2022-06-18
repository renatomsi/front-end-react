import React, {useState} from "react";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import TableLancamentos from "./tableLancamentos";
import { buscarLancamentos, buscaListaMeses, buscaListasTipos } from "../../app/service/lancamentosService";
import { obterItem } from "../../app/service/localStorageService";
import * as messages from "../../components/notifications";

export default function ConsultaLancamentos(props) {

  
  const [ano, setano] = useState("");
  const [mes, setmes] = useState("");
  const [tipo, settipo] = useState("");
  const [descricao, setdescricao] = useState("");
  const [lancamentos, setlancamentos] = useState([]);

  function buscar(){

    if (!ano){
      messages.notifyError("Campo Ano obrigatório!")
    }

    const usuarioLogado = obterItem('_usuario_logado_')
    console.log(usuarioLogado)

    const lancamentoFiltro = {
      ano: ano,
      mes : mes,
      tipo : tipo,
      descricao: descricao,
      usuario : usuarioLogado.id
    }

    buscarLancamentos(lancamentoFiltro)
    .then(response => {
      setlancamentos(response.data)
    }).catch(erro => {
      console.log(erro)
    })
    
  }

  const meses = buscaListaMeses();

  const tipos = buscaListasTipos();


  return(<>
    <Card title="Consulta Lançamentos">
      <div className="row">
        <div className="col-lg-6">
          <div className="bs-component">

            <FormGroup label="Ano: *" htmlFor="inputAno" >
              <input type="text" className="form-control" 
                      value={ano} onChange={e => setano(e.target.value)}
                     id="inputAno" placeholder="Digite o Ano" />
            </FormGroup>

            <FormGroup label="Mês: " htmlFor="selectMes" >
                <SelectMenu value={mes} onChange={e => setmes(e.target.value)} id="selectMes" className="form-control" lista={meses} />
            </FormGroup>

            <FormGroup label="Descrição: " htmlFor="inputDesc" >
              <input type="text" className="form-control" 
                      value={descricao} onChange={e => setdescricao(e.target.value)}
                     id="inputDesc" placeholder="Digite o Ano" />
            </FormGroup>

            <FormGroup label="Tipo de Lançamentos: " htmlFor="selectTipos" >
                <SelectMenu value={tipo} onChange={e => settipo(e.target.value)} id="selectTipos" className="form-control" lista={tipos} />
            </FormGroup>

          </div>
        </div>
      </div>
      <button type="button" onClick={buscar}  className="btn btn-success mt-4">Buscar</button>
      <button type="button"  className="btn btn-danger mt-4">Cadastrar</button>
      <br />


    </Card>
      <div className="">
          <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h1 id="tables"></h1>
            </div>

            <div className="bs-component">
              <TableLancamentos lancamentos={lancamentos} />
            </div>
            </div>
        </div>
        
        
          </div></>

    

  )
  
}