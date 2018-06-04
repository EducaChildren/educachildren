import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tarefas from './Tarefas.js';

class TelaPai extends Component {
    constructor(props) {
        super(props);
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
                preco: "20,00",
                data: "30/03/2018",
                status: "concluida"
            }
        ];
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
                                <textarea className="form-control" name="" id="" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 text-center">
                                <h2>Quando?</h2>
                                <input className="form-control" type="date" name="" id="data-tarefa" />
                                <h2 className="mt-2">Valor?</h2>
                                <input className="form-control" type="text" name="" id="custo-tarefa" />
                                <button className="btn btn-primary btn-block mt-5">Cadastrar Tarefa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        ReactDOM.render(template, document.getElementById('root'));
    }
}

export default TelaPai;