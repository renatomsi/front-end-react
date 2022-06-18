import React from "react";
import currencyFormatter from "currency-formatter";


export default function TableLancamentos(props) {

  const rows = props.lancamentos.map((lancamento, index )=>{
    return (
      <tr key={index}>
          <td>{lancamento.descricao}</td>
          <td>{currencyFormatter.format(lancamento.valor, {locale : 'pt-BR'})}</td>
          <td>{lancamento.tipo}</td>
          <td>{lancamento.mes}</td>
          <td>{lancamento.status}</td>

      </tr>
    )
  })

  return(
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Descrição</th>
          <th scope="col">Valor</th>
          <th scope="col">Tipo</th>
          <th scope="col">Mes</th>
          <th scope="col">Situação</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
    
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}