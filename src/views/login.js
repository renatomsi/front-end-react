import React, {useState} from 'react'
import Card from '../components/card';
import FormGroup from '../components/form-group';
import { useNavigate } from 'react-router-dom'

// import 'bootswatch/dist/flatly/bootstrap.css'

export default function Login(props){

  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");

  function entrar(){
    console.log("Email: " + email);
    console.log("Senha: " + senha);
  }
  const navigate = useNavigate();

  function goCadastro() {
    navigate('/cadastro-usuario'); 
  };

  return(

          <div className='row'>
              <div className='col-md-6' style={{position: 'relative', left: '300px'}}>
                  <div className='bs-docs-section'>
                      <Card title="Login">
                          <div className='row'>
                              <div className='col-lg-12'>
                                  <div className='bs-component'>
                                    <fieldset >
                                      <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                        <input type="email" 
                                              value={email}
                                              onChange={(e)=> setemail(e.target.value)}
                                              className="form-control" 
                                              id="exampleInputEmail1" 
                                              aria-describedby="emailHelp" 
                                              placeholder="Digite o Email" />
                                      </FormGroup>
                                      <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                        <input type="password" 
                                                value={senha}
                                                onChange={(e) => setsenha(e.target.value)}
                                                className="form-control" 
                                                id="exampleInputPassword1" 
                                                placeholder="Password" />
                                      </FormGroup>
                                      <button onClick={entrar} className="btn btn-success mt-4" >Entrar</button>
                                      <button onClick={goCadastro} className="btn btn-danger mt-4">Cadastrar</button>
                                    </fieldset>
                                  </div>
                              </div>
                          </div>
                      </Card>
                  </div>
              </div>
          </div>

    );

}