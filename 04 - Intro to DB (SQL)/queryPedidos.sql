-- -- DANGER ZONE -- --
-- DROP TABLE fseletro.pedidos;
-- DROP SCHEMA fseletro;
-- -- DANGER ZONE -- --

CREATE SCHEMA fseletro;
USE fseletro;

CREATE TABLE fseletro.pedidos (
	id INT AUTO_INCREMENT NOT NULL,
	data_pedido TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	cliente_nome VARCHAR(500) NOT NULL,
	cliente_endereco VARCHAR(500) NOT NULL,
	cliente_telefone VARCHAR(15) NOT NULL,
	id_produto INT NOT NULL, 
	preco_unitario DECIMAL(8,2),
	quantidade INT NOT NULL,
	valor_total DECIMAL(10,2) AS (preco_unitario*quantidade),
	PRIMARY KEY (id)
);


INSERT INTO pedidos (cliente_nome, cliente_endereco, cliente_telefone, quantidade, preco_unitario, id_produto)
SELECT "Jane Smith", "R. das Flores, 785, Vila Madalena - Sao Paulo, SP","+551112342007", 1, pr.preco_venda, 4
FROM produtos pr
WHERE pr.id = 4; 

INSERT INTO pedidos (cliente_nome, cliente_endereco, cliente_telefone, quantidade, preco_unitario, id_produto)
SELECT "Mohammed Ranjit", "Av. Paulista, 515, Jardins - Sao Paulo, SP","+551196335678", 3, pr.preco_venda, 3
FROM produtos pr
WHERE pr.id = 3; 

INSERT INTO pedidos (cliente_nome, cliente_endereco, cliente_telefone, quantidade, preco_unitario, id_produto)
SELECT "Juan Dolores", "R. Cabedelo, 224, Vila Sonia - Sao Paulo, SP","+551196909090", 1, pr.preco_venda, 7
FROM produtos pr
WHERE pr.id = 7; 

INSERT INTO pedidos (cliente_nome, cliente_endereco, cliente_telefone, quantidade, preco_unitario, id_produto)
SELECT "Mitsuo Hashida", "R. Pedroso Alvarenga, 725, Itaim Bibi - Sao Paulo, SP","+551196336611", 4, pr.preco_venda, 1
FROM produtos pr
WHERE pr.id = 1; 


INSERT INTO pedidos (cliente_nome, cliente_endereco, cliente_telefone, quantidade, preco_unitario, id_produto)
SELECT "Jake Portman", "R. Frei Caneca, 640, Consolação - Sao Paulo, SP","+551145672211", 1, pr.preco_venda, 2
FROM produtos pr
WHERE pr.id = 2; 

INSERT INTO pedidos (cliente_nome, cliente_endereco, cliente_telefone, quantidade, preco_unitario, id_produto)
SELECT "Olga Petrolenko", "R. Suíça, 406, Pinheiros - Sao Paulo, SP","+551196354311", 2, pr.preco_venda, 3
FROM produtos pr
WHERE pr.id = 3; 

-- -- -- -- -- -- -- -- -- -- -- --
-- -- -- -- -- -- -- -- -- -- -- --

SELECT * 
FROM fseletro.pedidos;

SELECT 	pe.id Pedido, 
				pe.cliente_nome Cliente, 
				pe.id_produto CodProd, 
				pr.descricao Item, 
				pe.preco_unitario Preco, 
				pe.quantidade Qtde, 
				pe.preco_unitario*pe.quantidade Total
FROM pedidos pe 
JOIN produtos pr 
ON pe.id_produto = pr.id;




