import React from 'react'
import Card from '../components/card';
import FormGroup from '../components/form-group';
import { withRouter } from 'react-router-dom'
import UsuarioService from '../app/service/usuarioService';

class Login extends React.Component {

    state = {
        email: '',
        senha: '',
        mensagemErro: null
    }

    constructor() {
        super();
        this.service = new UsuarioService();
    }

    entrar = () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha})
        .then( response => {
             localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
             this.props.history.push('/home')
         } ).catch( erro => {
             this.setState({mensagemErro: erro.response.data})
         } )
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuarios');
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={ {position: 'relative', left: '300px'} }>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <span>{this.state.mensagemErro}</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email" className="form-control mb-3" value={this.state.email} onChange={e => this.setState({email: e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email" />
                                            </FormGroup>

                                            <FormGroup label="Senha: *" htmlFor="">
                                                <input type="password" value={this.state.senha} onChange={e => this.setState({senha: e.target.value})} className="form-control mb-3" id="exampleInputPassword1" placeholder="Password"/>
                                            </FormGroup>

                                            <button className="btn btn-success" onClick={ this.entrar }>Entrar</button>
                                            <button className="btn btn-danger" onClick={ this.prepareCadastrar }>Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default withRouter( Login );