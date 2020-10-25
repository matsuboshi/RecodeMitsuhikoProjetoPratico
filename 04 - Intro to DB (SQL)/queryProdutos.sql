-- -- DANGER ZONE -- --
-- DROP TABLE fseletro.produtos;
-- DROP SCHEMA fseletro;
-- DELETE FROM fseletro.produtos WHERE id = 3;
-- -- DANGER ZONE -- --
CREATE SCHEMA fseletro;


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
);


-- only for testing purposes
-- ALTER TABLE fseletro.produtos
-- ADD COLUMN estoque INT NOT NULL AFTER descricao;
-- only for testing purposes
-- ALTER TABLE fseletro.produtos
-- ADD COLUMN data_inclusao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER id;
-- only for testing purposes
-- ALTER TABLE fseletro.produtos 
-- ADD COLUMN Teste2 VARCHAR(45) AFTER imagem;
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
        "microwave",
        "img/product1.png",
        "Microondas 25L Espelhado Philco 220v",
        1589.00,
        1019.00,
        35
    );


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
        "microwave",
        "img/product2.png",
        "Forno de Microondas Eletrolux 20L Branco",
        2039.00,
        1819.00,
        41
    );


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
        "refrigerator",
        "img/product3.png",
        "Geladeira Frost Free Brastemp Side Inverse 540 litros",
        11380.00,
        9099.00,
        32
    );


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
        "refrigerator",
        "img/product4.png",
        "Geladeira Frost Free Brastemp Branca 375 litros",
        6389.00,
        5019.00,
        8
    );


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
        "dishwasher",
        "img/product5.png",
        "Lava Louça Compacta 8 Serviços Branca 127V Brastemp",
        2389.00,
        1719.00,
        17
    );


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
        "dishwasher",
        "img/product6.png",
        "Lava-Louças Electrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch",
        4390.00,
        2518.00,
        45
    );


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
        "laundryMachine",
        "img/product7.png",
        "Lavadora de Roupas Philco Inverter 12KG",
        3309.00,
        2190.00,
        9
    );


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
        "laundryMachine",
        "img/product8.png",
        "Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca",
        4018.00,
        3235.00,
        24
    );


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
        "laundryMachine",
        "img/product9.png",
        "Samsung WW75J54E0IW 7.5kg Front Load Washing Machine",
        3353.00,
        2599.00,
        10
    );


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
        "laundryMachine",
        "img/product10.png",
        "AEG Washing Machine L7FE8432S",
        3210.00,
        2150.00,
        8
    );


-- -- -- -- -- -- -- -- -- -- -- --
-- -- -- -- -- -- -- -- -- -- -- --
SELECT
    *
FROM
    fseletro.produtos;


SELECT
    *
FROM
    fseletro.produtos
WHERE
    preco > 5000
    AND preco > 10000;


SELECT
    *
FROM
    fseletro.produtos
WHERE
    preco < 3000
    OR preco > 10000;


SELECT
    *
FROM
    fseletro.produtos
WHERE
    categoria = 'microwave';


UPDATE
    fseletro.produtos
SET
    preco = preco + 0.35,
    preco_venda = preco_venda * 1.5
WHERE
    id > 0;


UPDATE
    fseletro.produtos
SET
    preco = preco + 0.05,
    preco_venda = preco * 0.2
WHERE
    id > 0;


CREATE USER 'user3' @'localhost' IDENTIFIED WITH mysql_native_password BY 'pass123'