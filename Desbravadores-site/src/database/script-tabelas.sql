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
  clube varchar(45) not null,
  dtCriacao timestamp default current_timestamp
  );

-- -----------------------------------------------------
-- Tabela questionario
-- -----------------------------------------------------
create table questionario (
  idquestionario int primary key
);


-- -----------------------------------------------------
-- Tabela questionario_usuario
-- -----------------------------------------------------
create table questionario_usuario (
  fkquestionario int not null,
  fkusuario int not null,
  resultado int not null,
  primary key (fkquestionario, fkusuario),
  constraint fkquestionario foreign key (fkquestionario) references questionario (idquestionario),
  constraint fkusuario foreign key (fkusuario) references usuario (idusuario)
);


-- -----------------------------------------------------
-- Tabela questoes
-- -----------------------------------------------------
create table  questoes (
  idquestoes int not null,
  fkquestionario int not null,
  primary key (idquestoes, fkquestionario),
  constraint fkquestionario_questao foreign key (fkquestionario) references questionario (idquestionario)
);

-- -----------------------------------------------------
-- Tabela classes
-- -----------------------------------------------------

create table classes (
idClasse int primary key auto_increment,
nome varchar(15) not null,
idade int not null
);

create table classe_usuario(
fkClasse int not null,
fkUsuario int not null,
constraint fk_Classe foreign key (fkClasse) references classes(idClasse),
constraint fk_Usuario foreign key (fkUsuario) references usuario(idusuario)
);

create table requisitos (
idRequisito int auto_increment,
fkclasse int,
primary key (idRequisito, fkclasse),
constraint fkclasse foreign key (fkclasse) references classes(idClasse)
);

alter table usuario modify dtCriacao timestamp default current_timestamp;

insert into questionario(idquestionario) 
values(1);


insert into usuario(nome, sobrenome, dtNascimento, email, senha, clube) 
values('nome', 'nome', '2006-05-21', 'admin', 'admin', 'clube');

select * from usuario;

insert into classes(nome, idade)
values('Amigo', 10),
('Companheiro', 11),
('Pesquisador', 12),
('Pioneiro', 13),
('Excursionista', 14),
('Guia', 15);

insert into questoes(idquestoes, fkquestionario)
values(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1);






select * FROM questionario_usuario;
select (year(current_date()) - year(dtNascimento))
from usuario;

select * from questionario_usuario;


SELECT u.nome AS Usuario,
q.idquestionario AS Questionario,
qu.resultado AS Certas,
(((SELECT resultado FROM questionario_usuario WHERE fkUsuario = 1) - (SELECT count(*) FROM questoes)) * -1) Erradas
FROM questionario_usuario qu
INNER JOIN usuario u
ON u.idusuario = qu.fkUsuario
INNER JOIN questionario q
ON q.idquestionario = qu.fkQuestionario
WHERE u.idusuario = 1;