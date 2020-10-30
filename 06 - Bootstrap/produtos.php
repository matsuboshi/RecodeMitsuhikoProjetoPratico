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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php require_once('bootstrap.html') ?>
  <link rel="stylesheet" href="./css/reset.css">
  <script defer src="./js/script.js"></script>

  <title>PRODUTOS</title>

  <style>
    body {
      background-image: linear-gradient(rgba(0, 0, 0, 0.8),
          rgba(56, 55, 54, 0.6)),
        url('https://bestaliproducts.com/wp-content/uploads/2018/12/best-home-decor-aliexpress.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  </style>

</head>

<body class="d-flex flex-column" style="min-height: 100vh">

  <?php include_once('menu.html') ?>

  <header class="container text-white border-bottom border-white mb-3" style="padding-top: 60px;">
    <h2>Nossos Produtos</h2>
    <p class="lead">Confira nossas promoções e economize um montão! </p>

  </header>

  <main class="container flex-fill">

    <section class="row">
      <div class=" col-md-3 pb-4 font-weight-bold text-white">
        <h3>Categorias</h3>
        <ul class="nav flex-column">
          <li class="nav-item"> <button class="btn btn-outline-light w-100 font-weight-bold" onclick="allCategories()">Todos (10) </button></li>
          <li class="nav-item"> <button class="btn btn-outline-light w-100 font-weight-bold" onclick="filterCategory('refrigerator')">Geladeiras (2) </button></li>
          <li class="nav-item"> <button class="btn btn-outline-light w-100 font-weight-bold" onclick="filterCategory('laundryMachine')">Lavadoras (4) </button></li>
          <li class="nav-item"> <button class="btn btn-outline-light w-100 font-weight-bold" onclick="filterCategory('microwave')">Microondas (2) </button></li>
          <li class="nav-item"> <button class="btn btn-outline-light w-100 font-weight-bold" onclick="filterCategory('dishwasher')">Lava-Loucas (2) </button></li>
        </ul>
      </div>





      <div class=" col-md-9  d-flex flex-wrap justify-content-around">


        <?php
        $sql = "SELECT * FROM produtos";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
          while ($rows = $result->fetch_assoc()) {
        ?>

            <div class="itemDiv" id="<?php echo $rows["categoria"]; ?>" style="display: inline-block">
              <div class="card bg-light m-2" style="width: 13rem; height: 24rem">
                <img src="./<?php echo $rows["imagem"]; ?>" class="card-img-top" alt="<?php echo $rows["imagem"]; ?>">
                <div class="card-body text-center">
                  <p class="card-text font-weight-bold " style="font-size: 0.8rem;"><?php echo $rows["descricao"]; ?></p>
                  <h6 class="card-title" style="text-decoration: line-through;">R$ <?php echo $rows["preco"]; ?></h6>
                  <h5 class="card-title text-danger font-weight-bold">R$ <?php echo $rows["preco_venda"]; ?></h5>
                </div>
              </div>
            </div>


        <?php
          }
        } else {
          echo "Nenhum produto cadastrado!";
        }
        ?>



      </div>

    </section>



  </main>

  <?php include_once('footer.html') ?>

</body>

</html>