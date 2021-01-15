-- DROP TABLE fseletro.produtos;
-- DROP TABLE fseletro.pedidos;
-- DROP TABLE fseletro.comentarios;
-- DROP SCHEMA fseletro;
-- CREATE SCHEMA fseletro;
DROP DATABASE IF EXISTS fseletro;


CREATE DATABASE IF NOT EXISTS fseletro;


USE fseletro;


CREATE TABLE fseletro.produtos (
  id INT AUTO_INCREMENT NOT NULL,
  data_inclusao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  categoria VARCHAR(100) NOT NULL,
  descricao VARCHAR(500) NOT NULL,
  estoque INT NOT NULL,
  preco DECIMAL(8, 2),
  preco_venda DECIMAL(8, 2),
  imagem VARCHAR(100),
  PRIMARY KEY (id)
) ENGINE = InnoDB;


CREATE TABLE fseletro.pedidos (
  id INT AUTO_INCREMENT NOT NULL,
  data_pedido TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  cliente_nome VARCHAR(500) NOT NULL,
  cliente_endereco VARCHAR(500) NOT NULL,
  cliente_telefone VARCHAR(15) NOT NULL,
  id_produto INT NOT NULL,
  preco_unitario DECIMAL(8, 2),
  quantidade INT NOT NULL,
  valor_total DECIMAL(10, 2) AS (preco_unitario * quantidade),
  PRIMARY KEY (id)
) ENGINE = InnoDB;


ALTER TABLE
  fseletro.pedidos
ADD
  CONSTRAINT produto_existe FOREIGN KEY(id_produto) REFERENCES fseletro.produtos(id) ON DELETE CASCADE ON UPDATE CASCADE;


CREATE TABLE fseletro.comentarios (
  id INT AUTO_INCREMENT NOT NULL,
  data datetime NOT NULL DEFAULT NOW(),
  nome VARCHAR(200) NOT NULL,
  msg VARCHAR(500) NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB;


INSERT INTO
  fseletro.comentarios(nome, msg)
VALUES
  ('Junior', 'Eu tenho um plano!'),
  ('Natasha', 'Putin loves hackers!'),
  ('Dimitri', 'I am no one, I am everyone!'),
  (
    'Mitch',
    'Invest your money instead of spending it.'
  ),
  ('Boça', 'O segredo estah na datilografia, cara!'),
  ('Hugo', 'Prefiro R do que JS!'),
  ('Raquel', 'Vou comprar tudo dessa loja!!!'),
  (
    'Daniel',
    'Meu, o PHP morreu! Galera só usa Java!'
  ),
  (
    'Bartolomeu',
    'Sou cientista de dados e só uso HTML.'
  ),
  (
    'Nostradamus',
    'Usa Laravel, cara! Perde tempo nao!'
  ),
  ('Mr Clean', 'How clean is your code?');


INSERT INTO
  fseletro.produtos (
    categoria,
    imagem,
    descricao,
    preco,
    preco_venda,
    estoque
  )
VALUES
  (
    "Microondas",
    "img/product1.png",
    "Microondas 25L Espelhado Philco 220v",
    1589.00,
    1019.00,
    35
  ),
  (
    "Microondas",
    "img/product2.png",
    "Forno de Microondas Eletrolux 20L Branco",
    2039.00,
    1819.00,
    41
  ),
  (
    "Geladeira",
    "img/product3.png",
    "Geladeira Frost Free Brastemp Side Inverse 540 litros",
    11380.00,
    9099.00,
    32
  ),
  (
    "Geladeira",
    "img/product4.png",
    "Geladeira Frost Free Brastemp Branca 375 litros",
    6389.00,
    5019.00,
    8
  ),
  (
    "Lava Louça",
    "img/product5.png",
    "Lava Louça Compacta 8 Serviços Branca 127V Brastemp",
    2389.00,
    1719.00,
    17
  ),
  (
    "Lava Louça",
    "img/product6.png",
    "Lava-Louças Electrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch",
    4390.00,
    2518.00,
    45
  ),
  (
    "Lavadora",
    "img/product7.png",
    "Lavadora de Roupas Philco Inverter 12KG",
    3309.00,
    2190.00,
    9
  ),
  (
    "Lavadora",
    "img/product8.png",
    "Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca",
    4018.00,
    3235.00,
    24
  ),
  (
    "Lavadora",
    "img/product9.png",
    "Samsung WW75J54E0IW 7.5kg Front Load Washing Machine",
    3353.00,
    2599.00,
    10
  ),
  (
    "Lavadora",
    "img/product10.png",
    "AEG Washing Machine L7FE8432S",
    3210.00,
    2150.00,
    8
  );


INSERT INTO
  pedidos (
    cliente_nome,
    cliente_endereco,
    cliente_telefone,
    quantidade,
    preco_unitario,
    id_produto
  )
SELECT
  "Jane Smith",
  "R. das Flores, 785, Vila Madalena - Sao Paulo, SP",
  "+551112342007",
  1,
  pr.preco_venda,
  4
FROM
  produtos pr
WHERE
  pr.id = 4;


INSERT INTO
  pedidos (
    cliente_nome,
    cliente_endereco,
    cliente_telefone,
    quantidade,
    preco_unitario,
    id_produto
  )
SELECT
  "Mohammed Ranjit",
  "Av. Paulista, 515, Jardins - Sao Paulo, SP",
  "+551196335678",
  3,
  pr.preco_venda,
  3
FROM
  produtos pr
WHERE
  pr.id = 3;


INSERT INTO
  pedidos (
    cliente_nome,
    cliente_endereco,
    cliente_telefone,
    quantidade,
    preco_unitario,
    id_produto
  )
SELECT
  "Juan Dolores",
  "R. Cabedelo, 224, Vila Sonia - Sao Paulo, SP",
  "+551196909090",
  1,
  pr.preco_venda,
  7
FROM
  produtos pr
WHERE
  pr.id = 7;


INSERT INTO
  pedidos (
    cliente_nome,
    cliente_endereco,
    cliente_telefone,
    quantidade,
    preco_unitario,
    id_produto
  )
SELECT
  "Mitsuo Hashida",
  "R. Pedroso Alvarenga, 725, Itaim Bibi - Sao Paulo, SP",
  "+551196336611",
  4,
  pr.preco_venda,
  1
FROM
  produtos pr
WHERE
  pr.id = 1;


INSERT INTO
  pedidos (
    cliente_nome,
    cliente_endereco,
    cliente_telefone,
    quantidade,
    preco_unitario,
    id_produto
  )
SELECT
  "Jake Portman",
  "R. Frei Caneca, 640, Consolação - Sao Paulo, SP",
  "+551145672211",
  1,
  pr.preco_venda,
  2
FROM
  produtos pr
WHERE
  pr.id = 2;


INSERT INTO
  pedidos (
    cliente_nome,
    cliente_endereco,
    cliente_telefone,
    quantidade,
    preco_unitario,
    id_produto
  )
SELECT
  "Olga Petrolenko",
  "R. Suíça, 406, Pinheiros - Sao Paulo, SP",
  "+551196354311",
  2,
  pr.preco_venda,
  3
FROM
  produtos pr
WHERE
  pr.id = 3;


INSERT INTO
  pedidos (
    cliente_nome,
    cliente_endereco,
    cliente_telefone,
    quantidade,
    preco_unitario,
    id_produto
  )
SELECT
  "Jake Russell",
  "R. Frei Caneca, 640, Consolação - Sao Paulo, SP",
  "+551145672211",
  1,
  pr.preco_venda,
  4
FROM
  produtos pr
WHERE
  pr.id = 4;


INSERT INTO
  pedidos (
    cliente_nome,
    cliente_endereco,
    cliente_telefone,
    quantidade,
    preco_unitario,
    id_produto
  )
SELECT
  "Katya Petrolenko",
  "R. Suíça, 406, Pinheiros - Sao Paulo, SP",
  "+551196354311",
  2,
  pr.preco_venda,
  9
FROM
  produtos pr
WHERE
  pr.id = 9;


INSERT INTO
  pedidos (
    cliente_nome,
    cliente_endereco,
    cliente_telefone,
    quantidade,
    preco_unitario,
    id_produto
  )
SELECT
  "Мицухико Такущи",
  "R. Frei Caneca, 640, Consolação - Sao Paulo, SP",
  "+551145672211",
  1,
  pr.preco_venda,
  10
FROM
  produtos pr
WHERE
  pr.id = 10;


INSERT INTO
  pedidos (
    cliente_nome,
    cliente_endereco,
    cliente_telefone,
    quantidade,
    preco_unitario,
    id_produto
  )
SELECT
  "Dimitri Korzh",
  "R. Russia, 416, Butanta - Sao Paulo, SP",
  "+5511964311",
  3,
  pr.preco_venda,
  5
FROM
  produtos pr
WHERE
  pr.id = 5;