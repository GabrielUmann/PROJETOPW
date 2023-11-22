<?php

    session_start();

    if(empty($_SESSION["user"])){
        header("Location: ../index.html");
    }

?>

<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PlayMania</title>
    
        <link rel="stylesheet" href="../assets/styles.css">
        <link rel="stylesheet" href="../assets/product1.css">
        <link rel="stylesheet" href="../assets/product2.css">
        <link rel="stylesheet" href="../assets/product3.css">
        <link rel="stylesheet" href="../assets/footer.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <script src="../assets/script.js"  type="module" async></script>

        
        <link rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" rel="stylesheet">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link  rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@300;400;500;600;700;800;900&display=swap">
    </head>
    <body>
        <header>
            <a href="" class="logo"> PlayMania</a>

            <ul class="nav">
                <li><a href="#scrollProducts">Produtos</a></li>
                <li><a href="#footer_content">Contato</a></li>
                <li id="carrinho">
                    <a class="btnCarrinho">Carrinho</a>
                    <div id="contador">0</div>
                </li>
            </ul>

            <div class="bx bx-menu" id="menu-icon"></div>
        </header>
        <section class="product">
            <div class="product-text">
                <h5>Produto #1</h5>
                <h4> sony </h4>
                <h1>Playstation 5</h1>
                <p>O PlayStation 5 é a aposta da Sony para a geração de consoles de lançados em 2020. 
                    O videogame pode ser encontrado em duas versões, uma sem leitor de mídia física e outra com entrada 
                    para mídia física, sendo a primeira a mais barata.</p>
                <a href="https://www.amazon.com.br/PlayStation-CFI-1214B01X-Console-PlayStation®5-Digital/dp/B0BNSR6S9Z/ref=sr_1_2?gclid=CjwKCAiA6byqBhAWEiwAnGCA4MqmF0VUEawbaXsyip3xox1sKMM_pelEXYtRoTgJzZnQkdKHIRxO2xoCbBkQAvD_BwE&qid=1699745100&s=videogames&sr=1-2&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">COMPARE</a>
            </div>
            <div class="product-img">
                <img src="../img/ps5.png" alt="">
            </div>
        </section>
        <section class="product2">
            <div>
                <img src="../img/psvr.png" alt="">
            </div>
            <br>
                  <p><b>O nosso mais novo lançamento PS VR É um sistema de realidade virtual para PlayStation 4 ou 5. 
                    Trata-se de um equipamento de alta tecnologia que tem como objetivo ampliar a imersão nos jogos eletrônicos. 
                    O principal produto inclui: headset PS VR, cabos e jogos demonstrativos.</b></p>
        </section>
        <section class="product3" name="product" id="scrollProducts">

        </section>
        
            
        <footer>
            <div id="footer_content">
                <div id="footer_contacts">
                    <h1>PlayMania</h1>
                    <p>Contato</p>
    
                    <div id="footer_social_media">
                        <a href="#" class="footer-link" id="instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
    
                        <a href="#" class="footer-link" id="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
    
                        <a href="#" class="footer-link" id="whatsapp">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                
                <ul class="footer-list">
                    <li>
                        <h3>Sobre Nós</h3>
                    </li>
                        <p>Nós somos uma loja de videogames dedicada a proporcionar aos nossos clientes uma experiência excepcional
                         no mundo dos jogos. Com uma ampla seleção de títulos para todas as principais plataformas, 
                         desde consoles até Jogos, estamos comprometidos em atender às necessidades dos jogadores mais exigentes.</p>
                    </li>
                </ul>
    
                <ul class="footer-list">
                    <li>
                        <h3>Produtos</h3>
                    </li>
                    <li>
                        <p>Consoles</p>
                    </li>
                    <li>
                        <p>Controles</p>
                    </li>
                    <li>
                        <p>Jogos</p>
                    </li>
                    <li>
                        <p>PS VR</p>
                    </li>
                </ul>
    
                <div id="footer_subscribe">
                    <h3>Email</h3>
    
                    <p>
                        Digite seu email para contato
                    </p>
    
                    <div id="input_group">
                        <input type="email" id="FooterEmail">
                        <button>
                            <i class="fa-regular fa-envelope"></i>
                        </button>
                    </div>
                </div>
            </div>
    
            <div id="footer_copyright">
                &#169
                2023 copyright
            </div>
        </footer>
    </body>
</html>