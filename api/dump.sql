create table tarefas
(
	id int primary key auto_increment,
    tarefa varchar(220) not null,
    preco decimal(11,2) not null,
    status_tarefa enum('a fazer', 'concluida') not null, 
    data_conclusao datetime not null
);

create table filho
(
	id int primary key auto_increment,
    nome varchar(220) not null,
    saldo decimal(11,2) not null
);

insert into filho (nome, saldo)
values ('João', 0.0);