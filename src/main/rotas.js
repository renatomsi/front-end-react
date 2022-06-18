import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import Login from "../views/login";
import ConsultaLancamentos from "../views/lancamentos/consultaLancamentos";
import CadastroLancamentos from "../views/lancamentos/cadastroLancamentos";

export default function Rotas() {
    return(
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
                <Route path="/consulta-lancamentos" element={<ConsultaLancamentos />} />
                <Route path="/cadastro-lancamentos" element={<CadastroLancamentos />} />
                <Route path="/cadastro-lancamentos/:id" element={<CadastroLancamentos />} />
            </Routes>
        </Router>
    )
}