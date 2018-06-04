import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tarefas from './Tarefas.js';
import axios from 'axios';

class TelaPai extends Component {
    constructor(props) {
        super(props);
        this.tarefas = this.props.tarefas;

        this.fields = [];

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.fields[name] = value;
    }

    render() {
        return (
            <div>
                <div className="Filho-header pt-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="nome-filho">Tarefas de seu filho</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="body">
                    <div className="container-fluid">
                        <div className="row mt-5">
                            <div className="col-12">
                                <Tarefas tarefas={this.tarefas} user="pai" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12">
                                <a onClick={(e) => this.renderTarefa()} className="btn btn-outline-info btn-block">Criar Tarefa</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderTarefa() {
        const template = (
            <div>
                <div className="Filho-header pt-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="nome-filho">CRIAR TAREFA</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="body">
                    <div className="container-fluid">
                        <div className="row mt-5">
                            <div className="col-3">
                                <img className="img-fluid" src="./banho.png" alt="" />
                            </div>
                            <div className="col-8">
                                <h6>Descrição</h6>
                                <textarea className="form-control" onChange={this.handleInputChange} name="tarefa" id="" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 text-center">
                                <h2>Quando?</h2>
                                <input className="form-control" type="date" onChange={this.handleInputChange} value={this.data} name="data" id="data-tarefa" />
                                <h2 className="mt-2">Valor?</h2>
                                <input className="form-control" type="text" onChange={this.handleInputChange} value={this.custo} name="preco" id="custo-tarefa" />
                                <button onClick={(e) => this.cadastrar()} className="btn btn-primary btn-block mt-5">Cadastrar Tarefa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        ReactDOM.render(template, document.getElementById('root'));
    }

    cadastrar() {
        axios({
            url: 'http://localhost/v1/tarefas',
            method: 'post',
            data: {
                "tarefa": this.fields['tarefa'],
                "preco": this.fields['preco'],
                "status_tarefa": "a fazer",
                "data_conclusao": this.fields['data']
            }
        }).then((result) => {
            alert('Tarefa cadastrada com sucesso!');
            var self = this;

            axios.get('http://localhost/v1/tarefas')
                .then(response => {
                    self.tarefas = response.data.data;
                    ReactDOM.render(self.render(), document.getElementById('root'));
                });
        });
    }
}

export default TelaPai;