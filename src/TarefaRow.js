import React, { Component } from 'react';

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

    concluiTarefa() {
        alert('Tarefa concluida');
    }
}

export default TarefaRow;