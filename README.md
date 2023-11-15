# PROJETOPW
modal de edit produtos
criar html carrinho com 1zinho
fazer carrinho funcionar
session adm
criar alerta com valores cadastro
adicionar if de adm no log

bd
create database db_projeto_pw;

use db_projeto_pw;

CREATE TABLE Usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  endereco VARCHAR(255),
  cidade VARCHAR(255),
  estado VARCHAR(255),
  cep VARCHAR(10)
);

CREATE TABLE Categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL
);

CREATE TABLE Produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  img_path VARCHAR(255), 
  categoria_id INT,
  FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);

CREATE TABLE Pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  data_pedido TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

CREATE TABLE ItensPedido (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pedido_id INT,
  produto_id INT,
  quantidade INT NOT NULL,
  preco_unitario DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (pedido_id) REFERENCES Pedidos(id),
  FOREIGN KEY (produto_id) REFERENCES Produtos(id)
);

CREATE TABLE Avaliacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  produto_id INT,
  pontuacao INT NOT NULL,
  comentario TEXT,
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
  FOREIGN KEY (produto_id) REFERENCES Produtos(id)
);

<div class="cart remove">
                <div class="header">
                    <a href="" class="btnCarrinho">X</a><h2>Sua cesta de compras:</h2>
                </div>
                <ul id="cart-items">

                </ul>
                <div class="cart-total">
                    Total: <span id="priceCart">R$ 00</span>
                </div>
                <button id="btnBuy">Finalizar Compra</button><br>
                <button id="btnCarrinho" >Continue Comprando</button><br>
            </div>