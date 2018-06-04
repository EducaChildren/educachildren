import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TelaPai from './TelaPai.js';

class TarefaRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.tarefa}</td>
                <td>R$ {this.props.preco}</td>
                <td>
                    {this.status(this.props.status)}
                </td>
            </tr>
        );
    }

    status(tarefaStatus) {
        if (tarefaStatus === 'concluida') {
            return (<a className="btn btn-success">{tarefaStatus}</a>);
        }
        if (this.props.user === 'pai') {
            return (<a onClick={(e) => this.concluiTarefa()} className="btn btn-primary">Concluir</a>);
        }
        return (<a className="btn btn-warning">{tarefaStatus}</a>);
    }

    concluiTarefa(e) {
        axios.patch('http://localhost/v1/tarefas/' + this.props.id, {
            status_tarefa: "concluida"
        }).then(response => {
            alert('Tarefa concluida');
            var self = this;

            axios.get('http://localhost/v1/tarefas')
                .then(response => {
                    self.tarefas = response.data.data;
                    ReactDOM.render(<TelaPai tarefas={self.tarefas} />, document.getElementById('root'));
                });
        });
    }
}

export default TarefaRow;