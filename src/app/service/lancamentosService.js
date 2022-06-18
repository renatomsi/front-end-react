import httpClient from "../apiservice";

const urlLancamentos = '/api/lancamentos'

export function buscaListaMeses() {
  return [
    {label : 'Selecione...', value : ''},   
    {label : 'Janeiro', value : 1},  
    {label : 'Fevereiro', value : 2}, 
    {label : 'Março', value : 3}, 
    {label : 'Abril', value : 4}, 
    {label : 'Maio', value : 5}, 
    {label : 'Junho', value : 6}, 
    {label : 'Julho', value : 7}, 
    {label : 'Agosto', value : 8}, 
    {label : 'Setembro', value : 9}, 
    {label : 'Outubro', value : 10}, 
    {label : 'Novembro', value : 11}, 
    {label : 'Dezembro', value : 12}
  ]
  
}

export function buscaListasTipos() {
  return [
    {label: 'Selecione...', value: ''},
    {label: 'Despesa', value: 'DESPESA'},
    {label: 'Receita', value: 'RECEITA'}
  ]
}

export function buscarLancamentos(lancamentoFiltro) {
  let params = `${urlLancamentos}/?ano=${lancamentoFiltro.ano}`;

  if(lancamentoFiltro.mes){
    params = `${params}&mes=${lancamentoFiltro.mes}`;
  }

  if(lancamentoFiltro.tipo){
    params = `${params}&tipo=${lancamentoFiltro.tipo}`;
  }

  if(lancamentoFiltro.usuario){
    params = `${params}&usuario=${lancamentoFiltro.usuario}`;
  }

  if(lancamentoFiltro.descricao){
    params = `${params}&descricao=${lancamentoFiltro.descricao}`;
  }
  
  return (
    httpClient.get(params)
  )

}

export function deletarPorId(id) {
  return(
    httpClient.delete(`${urlLancamentos}/${id}`)
  )
  
}

export function salvarLancamento(lancamento) {
  return httpClient.post(`${urlLancamentos}/`, lancamento)
}