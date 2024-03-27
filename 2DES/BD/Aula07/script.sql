DROP DATABASE IF EXISTS original_table;
CREATE DATABASE original_table;
USE original_table;

CREATE TABLE Telefone (
    matricula INT,
    telefone VARCHAR(20),
    PRIMARY KEY (matricula, telefone),
    FOREIGN KEY (matricula) REFERENCES Funcionario(matricula)
);

CREATE TABLE Manutencao (
    id_manutencao INT AUTO_INCREMENT PRIMARY KEY,
    inicio_manutencao DATE,
    fim_manutencao DATE,
    descricao VARCHAR(255)
);

CREATE TABLE Funcionario (
    matricula INT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE Veiculo (
    placa VARCHAR(10) NOT NULL PRIMARY KEY,
    modelo VARCHAR(20) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    ano DATE NOT NULL,
    id_manutencao INT,
    matricula INT NOT NULL,
    FOREIGN KEY (id_manutencao) REFERENCES Manutencao(id_manutencao),
    FOREIGN KEY (matricula) REFERENCES Funcionario(matricula)
);

DESCRIBE Manutencao;
DESCRIBE Funcionario;
DESCRIBE Veiculo;
DESCRIBE Telefone;

SHOW TABLES;
