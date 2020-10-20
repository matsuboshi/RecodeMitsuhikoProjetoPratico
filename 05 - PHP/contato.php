<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "fseletro";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
  die("A conexao falhou:" . mysqli_connect_error());
}

if (isset($_POST['nome']) && isset($_POST['msg'])) {
  $nome = $_POST['nome'];
  $msg = $_POST['msg'];

  $sql = "INSERT INTO comentarios (nome, msg) VALUES ('$nome','$msg')";
  $result = $conn->query($sql);
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./css/reset.css" />
  <link rel="stylesheet" href="./css/style.css" />

  <title>Contato - Full Stack Eletro</title>
</head>

<body>
  <?php include_once('menu.html') ?>

  <header>
    <h2>Contato</h2>
    <hr />
  </header>

  <main class="contactMain">
    <div>
      <p style="display: flex; align-items: center">
        <img src="./img/emailIcon.png" alt="emailIcon" height="30px" />
        &nbsp; &nbsp; contato@fullstackeletro.com
      </p>

      <br />
      <br />

      <p style="display: flex; align-items: center">
        <img src="./img/whatsappIcon.png" alt="whatsappIcon" height="30px" />
        &nbsp; &nbsp; (11) 99999-9999
      </p>
    </div>

    <div>

      <form action="" method="post">
        <h4>Nome:</h4>
        <input type="text" name="nome" style="width: 400px" />

        <br />
        <br />

        <h4>Mensagem:</h4>
        <textarea name="msg" style="width: 400px; height: 100px"></textarea>

        <br />
        <br />

        <button type="submit" name="submit">Enviar</button>
      </form>
    </div>

    <div class="comentariosDiv">
      <?php
      $sql = "SELECT * FROM comentarios";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
        while ($rows = $result->fetch_assoc()) {
          echo "<br>" . $rows['nome'];
          echo "(" . $rows['data'] . "):<br>";
          echo $rows['msg'] . "<br>";
        }
      } else {
        echo "Nenhum comentário ainda!";
      }
      ?>
    </div>
  </main>

  <?php include_once('footer.html') ?>
</body>

</html>