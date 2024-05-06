-- Listar em ordem alfabetica 

SELECT *
FROM Cliente
ORDER BY nome_cliente;


-- Listar clientes e telefones 

SELECT nome_cliente, telefone
FROM Cliente;


-- Listar todos os veículos em ordem crescente de marca e modelo:

SELECT *
FROM Veiculo
ORDER BY marca, modelo;


-- Mostrar somente os veículos da marca 'Fiat' ordenados pela diária decrescente:

SELECT *
FROM Veiculo
WHERE marca = 'Fiat'
ORDER BY diaria DESC;


-- Mostrar todos os dados dos veículos e a quantidade de aluguéis realizadas em cada um:

SELECT v.*, COUNT(r.placa) AS quantidade_alugueis
FROM Veiculo v
LEFT JOIN Reserva r ON v.placa = r.placa
GROUP BY v.placa;
