import React from "react";
import Home from "../views/home";

import { Route, Switch, HashRouter } from 'react-router-dom'
import CadastroUsuario from "../views/cadastroUsuario";
import Login from "../views/login";

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={ Login } />
                <Route path="/home" component={ Home } />
                <Route path="/cadastro-usuarios" component={ CadastroUsuario } />
            </Switch>
        </HashRouter>
    )
}

export default Rotas;