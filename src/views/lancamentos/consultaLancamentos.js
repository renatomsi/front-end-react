import React, {useState} from "react";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import TableLancamentos from "./tableLancamentos";
import { buscarLancamentos, buscaListaMeses, buscaListasTipos, deletarPorId } from "../../app/service/lancamentosService";
import { obterItem } from "../../app/service/localStorageService";
import * as messages from "../../components/notifications";
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

export default function ConsultaLancamentos(props) {

  const [ano, setano] = useState("");
  const [mes, setmes] = useState("");
  const [tipo, settipo] = useState("");
  const [descricao, setdescricao] = useState("");
  const [lancamentos, setLancamentos] = useState([]);
  const [showDialog, setshowDialog] = useState(false);
  const [lancamentoDeletar, setlancamentoDeletar] = useState({});

  const navigate = useNavigate();
  function goCadastro() {
    navigate('/cadastro-lancamentos'); 
  };

  function buscar(){

    if (!ano){
      messages.notifyError("Campo Ano obrigatório!")
      return false;
    }else if (ano.length < 4){
      messages.notifyError("Informe um Ano válido!")
      return false;
    }

    const usuarioLogado = obterItem('_usuario_logado_')

    const lancamentoFiltro = {
      ano: ano,
      mes : mes,
      tipo : tipo,
      descricao: descricao,
      usuario : usuarioLogado.id
    }

    buscarLancamentos(lancamentoFiltro)
    .then(response => {
      setLancamentos(response.data)
    }).catch(erro => {
      console.log(erro)
    })
    
  }

  function preparaDelete(lancamentoDeletar) {
    setlancamentoDeletar(lancamentoDeletar)
    setshowDialog(true);
  }

  function cancelDelete(lancamentoDeletar) {
    setlancamentoDeletar(lancamentoDeletar)
    setshowDialog(false);
  }

  function deletar(lancamentoDeletar) {
    setshowDialog(false)
     deletarPorId(lancamentoDeletar.id)
    .then(response => {
      messages.notifySuccess("Lançamento deletado com sucesso!")
      buscar()
      setlancamentoDeletar({})
    }).catch(error =>{
      messages.notifyError( error.response.data,"Ocorreu um erro ao tentar deletar o Lançamento!")
    })
    
  }

  function editar(id) {
    navigate(`/cadastro-lancamentos/${id}`)
    
  }

  const footer = (
      <div>
          <Button className="p-button-raised p-button-danger" label="Cancelar" icon="pi pi-times" onClick={e => cancelDelete({})}  />
          <Button className="p-button-raised p-button-info" label="Confirmar" icon="pi pi-check"  onClick={e => deletar(lancamentoDeletar)}  />
      </div>
  );

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
                     id="inputDesc" placeholder="Digite a descrição" />
            </FormGroup>

            <FormGroup label="Tipo de Lançamentos: " htmlFor="selectTipos" >
                <SelectMenu value={tipo} onChange={e => settipo(e.target.value)} id="selectTipos" className="form-control" lista={tipos} />
            </FormGroup>

          </div>
        </div>
      </div>
      <button type="button" onClick={buscar}  className="btn btn-success mt-4">Buscar</button>
      <button type="button" onClick={goCadastro}  className="btn btn-danger mt-4">Cadastrar</button>
      <br />

    </Card>
      <div className="">
          <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h1 id="tables"></h1>
            </div>

            <div className="bs-component">
              { lancamentos.length > 0 && 
              <TableLancamentos lancamentos={lancamentos} deleteAction={preparaDelete} editAction={editar} /> }
            </div>
            </div>
        </div>
    </div>
    <div>
      <ConfirmDialog visible={showDialog} modal={true} onHide={() => setshowDialog(false)}  message="Confirma a exclusão deste Lançamento?"
                     header="Confirmação" icon="pi pi-exclamation-triangle" draggable={false} 
                    //  accept={e => deletar(lancamentoDeletar)} reject={e => cancelDelete({})}
                    //  acceptLabel="Sim" rejectLabel="Cancelar"
                     footer={footer}  />
    </div>
    
    </>

    

  )
  
}