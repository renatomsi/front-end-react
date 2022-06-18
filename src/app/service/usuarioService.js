import httpClient from "../apiservice";


const urlApi = '/api/usuarios'

export function getSaldo(id){
  return httpClient.get(`${urlApi}/${id}/saldo`)
}
  
export function autenticar(credenciais) {
  return httpClient.post(`${urlApi}/auth`, credenciais)
  
}

export function salvarUsuario(usuario) {
  return httpClient.post(`${urlApi}`, usuario)
  
}
