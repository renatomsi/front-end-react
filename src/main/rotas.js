import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import Login from "../views/login";
import ConsultaLancamentos from "../views/lancamentos/consultaLancamentos";

export default function Rotas() {

    return(
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
                <Route path="/consulta-lancamentos" element={<ConsultaLancamentos />} />
            </Routes>
        </Router>
    )
}