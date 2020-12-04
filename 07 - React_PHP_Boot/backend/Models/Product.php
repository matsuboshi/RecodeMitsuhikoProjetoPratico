
<?php

require "Connection.php";

class Product
{
  public $id;
  public $data_inclusao;
  public $categoria;
  public $descricao;
  public $estoque;
  public $preco;
  public $preco_venda;
  public $imagem;

  public static function getAll()
  {
    $connection = Connection::getDb();

    $stmt = $connection->query("SELECT * FROM produtos");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}
