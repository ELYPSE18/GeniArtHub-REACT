import '../styles/cart.css'



function Cart() {

    return (




<body class="page">
    <header>
        <div>
            <a href="index.html">
                <img src="img/logo-black.png" alt="Logo GeniArtHub version sombre"/>
            </a>
            <a id="carticon" href="cart.html"><img src="img/cart.svg" alt="Aller au panier"/></a>
        </div>
    </header>

    <section>
        <div class="row">
            <h1>Votre Panier</h1>
        </div>
    </section>

    <section id="cart" class="productlist">
        <div class="products">     
        </div>
    </section>
    <div id="panier">
       
    </div>

    <div class="cart-summary">
        <p>Total de la commande </p>
        <span id="total-articles">0 </span> articles pour un montant de <span id="total-amount"> 0€</span>
    </div>
    

    <section class="order-form">
        <h2>Formulaire de Commande</h2>
        <form id="orderForm">
            <div id="orderForm-grid">
                <div>
                    <label for="firstName">Prénom :</label>
                    <input type="text" id="firstName"   name="firstName"  required/>
                </div>

                <div>
                    <label for="lastName">Nom :</label>
                    <input type="text" id="lastName"    name="lastName"    required/>
                </div>
                <div>
                    <label for="address">Adresse :</label>
                    <input type="text" id="address" name="address"      required/>
                </div>

                <div>
                    <label for="city">Ville :</label>
                    <input type="text" id="city" name="city" required/>
                </div>
                <div>
                    <label for="email">Email :</label>
                    <input type="email" id="email" name="email"     required/>
                </div>
            </div>

           <div id="cart-div-submit"><button id="cart-submit" type="submit">Passer Commande</button></div> 
            
        </form>
    </section>



    <footer>
        <p><a href="https://www.errantecreation.com/">Errante Creation</a> © 2023 - GeniArtHub</p>
    </footer>



<div class="modal" id="modal">
    <div class="modal-content">
        <p class="modal-message">Félicitations, votre commande a été passée avec succès.</p>
        <p>Voici votre numéro de commande : <span id="order-number"></span></p>
    </div>
</div>

    <script src="js/modal.js"></script>
    <script src="js/numberitem.js"></script>
    <script src="js/cart.js"></script>
</body>
    
        );
}

export default Cart;

