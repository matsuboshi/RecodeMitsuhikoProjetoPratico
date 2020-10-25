-- -- DANGER ZONE -- --
-- DROP TABLE fseletro.comentarios;
-- DROP SCHEMA fseletro;
-- -- DANGER ZONE -- --
CREATE SCHEMA fseletro;


USE fseletro;


CREATE TABLE fseletro.comentarios (
  id INT AUTO_INCREMENT NOT NULL,
  data datetime NOT NULL DEFAULT NOW(),
  nome VARCHAR(200) NOT NULL,
  msg VARCHAR(500) NOT NULL,
  PRIMARY KEY (id)
);