-- Inserir dados na tabela Cliente
INSERT INTO Cliente (cpf_cliente, nome_cliente, telefone) VALUES
('111.111.111-11', 'Osvaldo Oliveira', '19-72077-0521,19-06078-6843'),
('222.222.222-22', 'Jaqueline Teixeira', '19-23003-4864'),
('333.333.333-33', 'Keli Matos', '19-06486-6449,19-53266-7923'),
('444.444.444-44', 'Ursula Souza', '19-64378-2404'),
('555.555.555-55', 'Evandro Silva', '19-53315-2734');

-- Inserir dados na tabela Veiculo
INSERT INTO Veiculo (placa, modelo, marca, tipo, diaria, reserva, retirada, devolucao, dias, status, subtotal) VALUES
('DEA-7981', 'Uno', 'Fiat', 'standart', 100, '2024-01-25', '2024-01-25', '2024-02-04', 10, 'concluido', 1000.00),
('CBC-4945', 'Fiorino', 'Fiat', 'utilitario', 120, '2024-03-13', '2024-03-13', '2024-03-21', 8, 'concluido', 960.00),
('BEE-7735', 'Saveiro', 'VW', 'standart', 100, '2024-03-29', '2024-03-29', '2024-04-05', 7, 'concluido', 700.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100, '2024-03-14', '2024-03-14', '2024-03-24', 10, 'concluido', 1000.00),
('BBC-8504', 'Palio', 'Fiat', 'standart', 100, '2024-02-29', '2024-02-29', '2024-03-07', 7, 'concluido', 700.00),
('BEB-5885', 'Gol', 'VW', 'standart', 100, '2024-02-16', '2024-02-16', '2024-03-25', 38, 'concluido', 3800.00),
('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200, '2024-02-05', '2024-02-05', '2024-03-10', 34, 'concluido', 6800.00),
('CBC-4901', 'Fiorino', 'Fiat', 'utilitario', 120, '2024-02-25', '2024-02-25', '2024-03-02', 6, 'concluido', 720.00),
('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200, '2024-02-15', '2024-02-15', '2024-03-19', 33, 'concluido', 6600.00),
('DEA-7981', 'Uno', 'Fiat', 'standart', 100, '2024-02-04', '2024-02-04', '2024-03-10', 35, 'concluido', 3500.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100, '2024-02-23', '2024-02-24', '2024-03-30', 35, 'concluido', 3500.00),
('BBC-8504', 'Palio', 'Fiat', 'standart', 100, '2024-02-27', '2024-02-27', '2024-03-03', 5, 'concluido', 500.00),
('BEE-7735', 'Saveiro', 'VW', 'standart', 100, '2024-02-29', '2024-02-29', '2024-03-03', 3, 'concluido', 300.00),
('BEB-5885', 'Gol', 'VW', 'standart', 100, '2024-02-02', '2024-02-02', '2024-03-07', 34, 'concluido', 3400.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100, '2024-02-05', '2024-02-05', '2024-03-15', 39, 'concluido', 3900.00),
('BEE-7735', 'Saveiro', 'VW', 'standart', 100, '2024-02-08', '2024-02-08', '2024-03-15', 36, 'concluido', 3600.00),
('BBC-8504', 'Palio', 'Fiat', 'standart', 100, '2024-02-11', '2024-02-11', '2024-03-15', 33, 'concluido', 3300.00),
('CBC-4945', 'Fiorino', 'Fiat', 'utilitario', 120, '2024-03-14', '2024-03-14', NULL, 19, 'alugado', 2280.00),
('DEA-7981', 'Uno', 'Fiat', 'standart', 100, '2024-03-16', '2024-03-17', NULL, 16, 'alugado', 1600.00),
('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200, '2024-03-25', '2024-03-25', NULL, 8, 'alugado', 1600.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100, '2024-03-28', '2024-03-28', NULL, 5, 'alugado', 500.00),
('BEB-5885', 'Gol', 'VW', 'standart', 100, '2024-03-23', '2024-03-23', NULL, 10, 'alugado', 1000.00),
('BBC-8504', 'Palio', 'Fiat', 'standart', 100, '2024-05-01', NULL, NULL, 0, 'reservado', 0.00),
('DEA-7981', 'Uno', 'Fiat', 'standart', 100, '2024-05-10', NULL, NULL, 0, 'reservado', 0.00),
('CBC-4945', 'Fiorino', 'Fiat', 'utilitario', 120, '2024-05-19', NULL, NULL, 0, 'reservado', 0.00);

-- Inserir dados na tabela Reserva
INSERT INTO Reserva (placa, cpf_cliente, retirada, devolucao, dias, status, subtotal) VALUES
('BBC-8504', '222.222.222-22', '2024-05-01', NULL, 0, 'reservado', 0.00),
('DEA-7981', '111.111.111-11', '2024-05-10', NULL, 0, 'reservado', 0.00),
('CBC-4945', '222.222.222-22', '2024-05-19', NULL, 0, 'reservado', 0.00);

-- Inserir dados na tabela Aluguel
INSERT INTO Aluguel (placa, cpf_cliente, retirada, devolucao, dias, status, subtotal) VALUES
('CBC-4945', '222.222.222-22', '2024-03-14', NULL, 19, 'alugado', 2280.00),
('DEA-7981', '111.111.111-11', '2024-03-16', NULL, 16, 'alugado', 1600.00),
('EDB-2475', '555.555.555-55', '2024-03-25', NULL, 8, 'alugado', 1600.00),
('CBA-4403', '222.222.222-22', '2024-03-28', NULL, 5, 'alugado', 500.00),
('BEB-5885', '222.222.222-22', '2024-03-23', NULL, 10, 'alugado', 1000.00);


SELECT * FROM Veiculo;
SELECT * FROM Cliente;
SELECT * FROM Reserva;
SELECT * FROM Aluguel;


-- Populando a tabela Veiculo
INSERT INTO Veiculo (placa, modelo, marca, tipo, diaria, reserva, retirada, devolucao, dias, status, subtotal) VALUES
('DEA-7981', 'Uno', 'Fiat', 'standart', 100, '2024-01-25', '2024-01-25', '2024-02-04', 10, 'concluido', 1000.00),
('CBC-4945', 'Fiorino', 'Fiat', 'utilitario', 120, '2024-03-13', '2024-03-13', '2024-03-21', 8, 'concluido', 960.00),
('BEE-7735', 'Saveiro', 'VW', 'standart', 100, '2024-03-29', '2024-03-29', '2024-04-05', 7, 'concluido', 700.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100, '2024-03-14', '2024-03-14', '2024-03-24', 10, 'concluido', 1000.00),
('BBC-8504', 'Palio', 'Fiat', 'standart', 100, '2024-02-29', '2024-02-29', '2024-03-07', 7, 'concluido', 700.00),
('BEB-5885', 'Gol', 'VW', 'standart', 100, '2024-02-16', '2024-02-16', '2024-03-25', 38, 'concluido', 3800.00),
('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200, '2024-02-05', '2024-02-05', '2024-03-10', 34, 'concluido', 6800.00),
('CBC-4901', 'Fiorino', 'Fiat', 'utilitario', 120, '2024-02-25', '2024-02-25', '2024-03-02', 6, 'concluido', 720.00),
('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200, '2024-02-15', '2024-02-15', '2024-03-19', 33, 'concluido', 6600.00),
('DEA-7981', 'Uno', 'Fiat', 'standart', 100, '2024-02-04', '2024-02-04', '2024-03-10', 35, 'concluido', 3500.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100, '2024-02-23', '2024-02-24', '2024-03-30', 35, 'concluido', 3500.00),
('BBC-8504', 'Palio', 'Fiat', 'standart', 100, '2024-02-27', '2024-02-27', '2024-03-03', 5, 'concluido', 500.00),
('BEE-7735', 'Saveiro', 'VW', 'standart', 100, '2024-02-29', '2024-02-29', '2024-03-03', 3, 'concluido', 300.00),
('BEB-5885', 'Gol', 'VW', 'standart', 100, '2024-02-02', '2024-02-02', '2024-03-07', 34, 'concluido', 3400.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100, '2024-02-05', '2024-02-05', '2024-03-15', 39, 'concluido', 3900.00),
('BEE-7735', 'Saveiro', 'VW', 'standart', 100, '2024-02-08', '2024-02-08', '2024-03-15', 36, 'concluido', 3600.00),
('BBC-8504', 'Palio', 'Fiat', 'standart', 100, '2024-02-11', '2024-02-11', '2024-03-15', 33, 'concluido', 3300.00),
('CBC-4945', 'Fiorino', 'Fiat', 'utilitario', 120, '2024-03-14', '2024-03-14', NULL, 19, 'alugado', 2280.00),
('DEA-7981', 'Uno', 'Fiat', 'standart', 100, '2024-03-16', '2024-03-17', NULL, 16, 'alugado', 1600.00),
('EDB-2475', 'Ranger', 'Ford', 'esportivo', 200, '2024-03-25', '2024-03-25', NULL, 8, 'alugado', 1600.00),
('CBA-4403', 'Sandeiro', 'Renaut', 'standart', 100, '2024-03-28', '2024-03-28', NULL, 5, 'alugado', 500.00),
('BEB-5885', 'Gol', 'VW', 'standart', 100, '2024-03-23', '2024-03-23', NULL, 10, 'alugado', 1000.00),
('BBC-8504', 'Palio', 'Fiat', 'standart', 100, '2024-05-01', NULL, NULL, 0, 'reservado', 0.00),
('DEA-7981', 'Uno', 'Fiat', 'standart', 100, '2024-05-10', NULL, NULL, 0, 'reservado', 0.00),
('CBC-4945', 'Fiorino', 'Fiat', 'utilitario', 120, '2024-05-19', NULL, NULL, 0, 'reservado', 0.00);


-- Populando a tabela Cliente
INSERT INTO Cliente (cpf_cliente, nome_cliente, telefone) VALUES
('111.111.111-11', 'Osvaldo Oliveira', '19-72077-0521,19-06078-6843'),
('222.222.222-22', 'Jaqueline Teixeira', '19-23003-4864'),
('333.333.333-33', 'Keli Matos', '19-06486-6449,19-53266-7923'),
('444.444.444-44', 'Ursula Souza', '19-64378-2404'),
('555.555.555-55', 'Evandro Silva', '19-53315-2734');

-- Populando a tabela Reserva
INSERT INTO Reserva (placa, cpf_cliente, retirada, devolucao, dias, status, subtotal) VALUES
('BBC-8504', '222.222.222-22', '2024-05-01', NULL, 0, 'reservado', 0.00),
('DEA-7981', '111.111.111-11', '2024-05-10', NULL, 0, 'reservado', 0.00),
('CBC-4945', '222.222.222-22', '2024-05-19', NULL, 0, 'reservado', 0.00);

-- Populando a tabela Aluguel com os mesmos dados da tabela Reserva para este exemplo
INSERT INTO Aluguel (placa, cpf_cliente, retirada, devolucao, dias, status, subtotal) VALUES
('CBC-4945', '222.222.222-22', '2024-03-14', NULL, 19, 'alugado', 2280.00),
('DEA-7981', '111.111.111-11', '2024-03-16', NULL, 16, 'alugado', 1600.00),
('EDB-2475', '555.555.555-55', '2024-03-25', NULL, 8, 'alugado', 1600.00),
('CBA-4403', '222.222.222-22', '2024-03-28', NULL, 5, 'alugado', 500.00),
('BEB-5885', '222.222.222-22', '2024-03-23', NULL, 10, 'alugado', 1000.00);

SELECT * FROM Veiculo;
SELECT * FROM Cliente;
SELECT * FROM Reserva;
SELECT * FROM Aluguel;

SELECT placa, cpf_cliente, retirada, devolucao, dias, status, subtotal FROM Reserva;
