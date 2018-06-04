import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './App.css';
import Tarefas from './Tarefas.js';
import TelaPai from './TelaPai.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.saldo = '0.00';
    this.tarefas = [
      {
        id: 1,
        tarefa: "Teste",
        data: "30/03/2018",
        preco: "12,00",
        status: "a fazer"
      },
      {
          id: 2,
          tarefa: "Teste 2",
          data: "30/03/2018",
          preco: "12,00",
          status: "concluida"
      }
    ];
  }
  
  render() {
    return this.renderIndex();
  }

  renderIndex() {
    return (
      <div className="App">
        <div className="logo">
          <img className="img-fluid" onClick={(e) => this.renderHome()} src="./logo.png" alt="Foto do logo Porquinho de economia" />
        </div>
      </div>
    );
  }
  renderHome() {
    const template = (
      <div className="App">
        <div className="App-header">
          <img className="img-fluid" alt="Foto menor do logo" width="auto" src="./logotemplate.png" />
        </div>
        <div id="body">
          <div className="container-fluid">
            <h1>Bem vindo</h1>
            <p>Escolha seu perfil:</p>
            <div className="row mt-5">
              <div className="col-4 offset-2">
                <a className="btn btn-outline-info btn-block" onClick={(e) => this.renderFilho()}>Filho</a>
              </div>
              <div className="col-4">
                <a className="btn btn-outline-info btn-block" onClick={(e) => this.renderPai()}>Pai</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    ReactDOM.render(template, document.getElementById('root'));
  }

  renderFilho() {
    const template = (
      <div>
        <div className="Filho-header pt-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="nome-filho">João</div>
              </div>
              <div className="col-4 offset-2">
                <img className="img-fluid" src="./money-dollar-circle-32.png" alt=""/>
                <span>{this.saldo}</span>
              </div>
            </div>
          </div>
        </div>
        <div id="body">
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-7">
                <img className="img-fluid" src="./perfil.png" alt=""/>
              </div>
              <div className="col-4">
                <h1>FILHO</h1>
                <h3>João</h3>
              </div>
            </div>
            <div id="body-filho">
              <div className="row mt-5">
                <div className="col-4">
                  <a onClick={(e) => this.renderTarefas()} className="btn btn-outline-success btn-block">Tarefas</a>
                </div>
                <div className="col-4">
                  <a className="btn btn-outline-primary btn-block">Compras</a>
                </div>
                <div className="col-4">
                  <a className="btn btn-outline-secondary btn-block">Sair</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    ReactDOM.render(template, document.getElementById('root'));
  }

  renderTarefas() {
    ReactDOM.render(<Tarefas tarefas={this.tarefas} user="filho" />, document.getElementById('body-filho'));
  }

  renderPai() {
    ReactDOM.render(<TelaPai />, document.getElementById('root'));
  }
}

export default App;
