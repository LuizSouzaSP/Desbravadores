-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database Aventura;

use Aventura;

-- -----------------------------------------------------
-- Tabela usuario
-- -----------------------------------------------------
create table usuario (
  idusuario int primary key auto_increment,
  nome varchar(45) not null,
  sobrenome varchar(45) not null,
  dtNascimento date not null,
  email varchar(45) not null,
  senha varchar(45) not null,
  dtCriacao timestamp default current_timestamp
  );

-- -----------------------------------------------------
-- Tabela questionario
-- -----------------------------------------------------
create table questionario (
  idquestionario int not null,
  primary key (idquestionario)
);


-- -----------------------------------------------------
-- Tabela questionario_usuario
-- -----------------------------------------------------
create table questionario_usuario (
  questionario_idquestionario int not null,
  usuario_idusuario int not null,
  primary key (questionario_idquestionario, usuario_idusuario),
  constraint fk_questionario_has_usuario_questionario1 foreign key (questionario_idquestionario) references questionario (idquestionario),
  constraint fk_questionario_has_usuario_usuario1 foreign key (usuario_idusuario) references usuario (idusuario)
);


-- -----------------------------------------------------
-- Tabela questoes
-- -----------------------------------------------------
create table  questoes (
  idquestoes int not null,
  questionario_idquestionario int not null,
  certa CHAR(1) not null,
  errada CHAR(1) not null,
  primary key (idquestoes, questionario_idquestionario),
  constraint fk_questoes_questionario1 foreign key (questionario_idquestionario) references questionario (idquestionario)
);

alter table usuario modify dtCriacao timestamp default current_timestamp;
alter table usuario add column clube varchar(45) not null;
alter table questoes drop column errada;
alter table questoes rename column certa to resultado;

insert into questionario(idquestionario) 
values(1);
insert into usuario(nome, sobrenome, dtNascimento, email, senha, clube) 
values('nome', 'nome', '2025-05-21', 'admin', 'admin', 'clube');
insert into questionario_usuario(questionario_idquestionario, usuario_idusuario) 
values(1, 1);

