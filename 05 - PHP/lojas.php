<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./css/reset.css" />
  <link rel="stylesheet" href="./css/style.css" />

  <title>Lojas - Full Stack Eletro</title>
</head>

<body>
  <?php include_once('menu.html') ?>

  <header>
    <h2>Nossas lojas</h2>
    <hr />
  </header>

  <main class="storesMain">
    <div>
      <h3>Rio de Janeiro</h3>
      <ul>
        <li>Av. Presidente Vargas, 5000</li>
        <li>10° Andar</li>
        <li>Centro</li>
        <li>(21) 3333-3333</li>
      </ul>
    </div>
    <div>
      <h3>São Paulo</h3>
      <ul>
        <li>Av. Paulista, 985</li>
        <li>3° Andar</li>
        <li>Jardins</li>
        <li>(11) 4444-4444</li>
      </ul>
    </div>
    <div>
      <h3>Santa Catarina</h3>
      <ul>
        <li>Rua Major Ávila, 370</li>
        <li>Vila Mariana</li>
        <li>(47) 5555-5555</li>
      </ul>
    </div>
  </main>

  <?php include_once('footer.html') ?>
</body>

</html>