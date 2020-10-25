<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "fseletro";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
  die("A conexao falhou:" . mysqli_connect_error());
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
  <script defer src="./js/script.js"></script>

  <title>Produtos - Full Stack Eletro</title>
</head>

<body>
  <?php include_once('menu.html') ?>

  <header>
    <h2>Produtos</h2>
    <hr />
  </header>

  <main class="productsMain">
    <section class="lateralMenuForProducts">
      <h3>Categorias</h3>
      <ul>
        <li onclick="allCategories()">Todos (10)</li>
        <li onclick="filterCategory('refrigerator')">Geladeiras (2)</li>
        <li onclick="filterCategory('laundryMachine')">Lavadoras (4)</li>
        <li onclick="filterCategory('microwave')">Microondas (2)</li>
        <li onclick="filterCategory('dishwasher')">Lava-Loucas (2)</li>
      </ul>
    </section>

    <section class="allProducts">

      <?php
      $sql = "SELECT * FROM produtos";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
        while ($rows = $result->fetch_assoc()) {
      ?>

          <div class="itemDiv" id="<?php echo $rows["categoria"]; ?>" style="display: block">
            <div class="productImageDiv">
              <img src="./<?php echo $rows["imagem"]; ?>" alt="<?php echo $rows["imagem"]; ?>" width="160px" onmouseover="highlightImg(this)" onmouseout="highlightImg(this)" />
            </div>
            <div class="productInfoDiv">
              <p class="productName"><?php echo $rows["descricao"]; ?></p>
              <div class="pricesDiv">
                <p class="oldPrice">R$ <?php echo $rows["preco"]; ?></p>
                <p class="newPrice">R$ <?php echo $rows["preco_venda"]; ?></p>
              </div>
            </div>
          </div>

      <?php
        }
      } else {
        echo "Nenhum produto cadastrado!";
      }
      ?>


    </section>
  </main>

  <?php include_once('footer.html') ?>
</body>

</html>