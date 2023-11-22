<?php

session_start();

if(empty($_SESSION["user"])){
    header("Location: ../index.html");
}

?>

<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Carrinho de Compras</title>
    <link rel="stylesheet" href="../assets/cart.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />

    <script src="../assets/cart.js" type="module" async></script>
  </head>
  <body>
    <header>
      <span>Carrinho</b></span>
    </header>
    <main>
      <div class="page-title">Seus Produtos</div>
      <div class="content">
        <section>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody id="tbodyCart">
              
            </tbody>
          </table>
        </section>
        <aside>
          <div class="box">
            <header>Resumo da compra</header>
            <div class="info">
              <div><span>Sub-total</span><span id="subtotalPrice">R$ 0</span></div>
              <div><span>Frete</span><span>Gratuito</span></div>

            </div>
            <footer>
              <span>Total</span>
              <span id="totalPrice">R$ 0</span>
            </footer>
          </div>
          <button id="btnFinish">Finalizar Compra</button>
        </aside>
      </div>
    </main>
  </body>
</html>
