-- DDL - Estrutura
drop database if exists Guri;
create database Guri;
use Guri;
create table Clientes(
    id integer primary key auto_increment,
    nome varchar(50) not null,
    quantidade varchar(20) not null,
    produto varchar(50) not null,
    valor varchar(50) not null,
    total varchar(50) not null
);
describe Clientes;

--  DML - Popular com dados de teste
insert into Clientes(nome, quantidade, produto, valor, total) values

("Igor","5","Coca Cola 2L","R$9,99", "R$49,95"),
("Rafael","2","Batata Frita Media","R$8,99", "R$5,99"),
("Mirela","1","Xereta 1,5L","R$5,99", "R$5,99"),
("Bryan","3","Suco de Laranja","R$8,99", "R$26,97"),;

select * from Clientes;