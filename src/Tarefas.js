import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import TarefaRow from './TarefaRow.js';

class Tarefas extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Preço</th>
                        <th>Status</th>
                    </tr>
                    {this.props.tarefas.map(row => 
                        <TarefaRow key={row.id} 
                                    id={row.id} 
                                    tarefa={row.tarefa} 
                                    data={row.data_conclusao} 
                                    preco={row.preco} 
                                    status={row.status_tarefa} 
                                    user={this.props.user} 
                        />
                    )}
                </thead>
            </table>
        );
    }
}

export default Tarefas;