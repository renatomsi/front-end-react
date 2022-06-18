// export default class LocalStorageService {

//   static adicionaItem(chave, valor){
//     localStorage.setItem(chave, JSON.stringify(valor));
//   }

//   static obterItem(chave){
//     const item = localStorage.getItem(chave);
//     return JSON.parse(item);
//   }
  
// }



export function adicionaItem(chave, valor){
  localStorage.setItem(chave, JSON.stringify(valor));
}

export function obterItem(chave){
  const item = localStorage.getItem(chave);
  return JSON.parse(item);
}
  
