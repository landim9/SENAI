drop database if exists aluguel;

create database aluguel CHARACTER SET UTF8 COLLATE utf8_general_ci;

use aluguel;

-- Criando a tabela Veiculo
CREATE TABLE Veiculo (
    placa VARCHAR(20) PRIMARY KEY,
    modelo VARCHAR(100),
    marca VARCHAR(100),
    tipo VARCHAR(100),
    diaria DECIMAL(10, 2),
    reserva DATE,
    retirada DATE,
    devolucao DATE,
    dias INT,
    status VARCHAR(50),
    subtotal DECIMAL(10, 2)
);

-- Criando a tabela Cliente
CREATE TABLE Cliente (
    cpf_cliente VARCHAR(20) PRIMARY KEY,
    nome_cliente VARCHAR(100),
    telefone VARCHAR(20)
);

-- Criando a tabela Reserva
CREATE TABLE Reserva (
    reserva INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(20),
    cpf_cliente VARCHAR(20),
    retirada DATE,
    devolucao DATE,
    dias INT,
    status VARCHAR(50),
    subtotal DECIMAL(10, 2),
    FOREIGN KEY (placa) REFERENCES Veiculo(placa),
    FOREIGN KEY (cpf_cliente) REFERENCES Cliente(cpf_cliente)
);

-- Criando a tabela Aluguel
CREATE TABLE Aluguel (
    placa VARCHAR(20),
    cpf_cliente VARCHAR(20),
    retirada DATE,
    devolucao DATE,
    dias INT,
    status VARCHAR(50),
    subtotal DECIMAL(10, 2),
    FOREIGN KEY (placa) REFERENCES Veiculo(placa),
    FOREIGN KEY (cpf_cliente) REFERENCES Cliente(cpf_cliente)
);


DESCRIBE Veiculo;

DESCRIBE Cliente;

DESCRIBE Reserva;

DESCRIBE Aluguel;

SHOW TABLES;
