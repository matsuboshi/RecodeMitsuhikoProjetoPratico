
<?php

require "Connection.php";

class Comment
{
  public $id;
  public $data;
  public $nome;
  public $msg;

  public static function getAll()
  {
    $connection = Connection::getDb();

    $stmt = $connection->query("SELECT * FROM comentarios order by id desc limit 8");

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public  function insertNewComment()
  {
    $connection = Connection::getDb();

    $stmt = $connection->query("INSERT INTO comentarios(nome, msg) VALUES('$this->nome', '$this->msg')");

    if ($stmt->rowCount() > 0) {
      return true;
    } else {
      return false;
    }
  }
}
