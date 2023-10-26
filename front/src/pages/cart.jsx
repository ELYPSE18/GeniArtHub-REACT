
import { useEffect, useState } from 'react';
import { useCart } from '../components/cartContext';
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/cart.css'
import { Link } from 'react-router-dom';


export function Cart(){
    document.body.classList.add('page')
    const [ totalAmount, setTotalAmount ] = useState(0)
    // Récupérer le panier

    // Fait un appel à l'api pour récupérer les produits
    // Faire la comparaison entre les produits du panier et les produits de l'api pour récupérer le prix
    // Afficher les produits sur le panier
    // Mettre à jour le nombre total de produits et le montant total
    // Mettre en place la fonction de changement de quantité
    // Mettre en place la fonction de suppression de produit
    // Mettre en place la fonction de commande en vérifiant si les données sont remplies correctement (regex)
    // Récupérer le numéro de commande et l'afficher
        const { cart, setCart } = useCart();
    
        const [orderData, setOrderData] = useState({
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          email: ''
        });


        // faire appel a la l'api en faisant une correspondance entre les produits du panier et les produits de l'api:



    const totalArticles = cart.reduce((total, product) => total + product.quantity, 0);

    




    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        // Effectuer un fetch pour chaque produit dans le panier
        async function getDatas (){
            const uptatedData = [];

            for (const product of cart) {
                const response = await fetch('http://localhost:3000/api/products/' + product.id);
                const data = await response.json();

                product.image = data.image;
                product.titre = data.titre;
                product.price = data.declinaisons.find(format => format.taille === product.format).prix;

                uptatedData.push(data);
            }

            setProductDetails(uptatedData);
        }

        getDatas()
        // setTotalAmount(cart.reduce((total, product) => total + parseInt(product.quantity) * parseFloat(product.price), 0))
    }, [cart]);


document.body.classList.add('page');


const handleRemoveClick = (id, format) =>{
    const newCart = [...cart];
    const productIndex = newCart.findIndex(item => item.id === id && item.format === format);
    newCart.splice(productIndex, 1);
    setCart(newCart);
}

// fonction pour mettre à jour la quantité
const handleQuantityChange = (event) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex(item => item.id === event.target.dataset.id && item.format === event.target.dataset.format);
    newCart[productIndex].quantity = newQuantity > 100 ? 100 : newQuantity;
    event.target.value = newCart[productIndex].quantity
    setCart(newCart);
}








    return (
        <>
            <Header />
            <main className="cart">
                <section>
                    <h2>Votre Panier</h2>
                    <div id="panier">
                    {productDetails.map((product, index) => (
                        <article key={index} className="article">
                        <img src={product.image} alt="Titre de l'oeuvre" />
                            <h3>{product.titre}</h3>
                            <p>Format : {product.format}</p>
                            <p className="price">declinaison.prix €</p>
                            <div>
                            <p>Quantité : </p>
                            <input type="number" onChange={handleQuantityChange} data-id={product._id} data-format={product.format} defaultValue={product.quantity} min="1" />
                            </div>
                            <Link onClick={() => handleRemoveClick(product._id, product.format)} >Supprimer</Link>
                            

                        </article>
                    ))}

                    </div>

                    <div className="total">
                        <h3>Total de la commande</h3>
                        <p id="total"><span id="totalarticle">{totalArticles}</span> articles pour un montant de <span id="montanttotal">{totalAmount}</span>€</p>
                    </div>
                </section>

                <section>
                    <h2>Formulaire de commande</h2>
                    <form id="command">
                        <div>
                            <div>
                                <label htmlFor="prenom">Prénom: </label>
                                <input type="text" name="prenom" />
                            </div>
                            <div>
                                <label htmlFor="nom">Nom: </label>
                                <input type="text" name="nom" />
                            </div>
                            <div>
                                <label htmlFor="adresse">Adresse: </label>
                                <input type="text" name="adresse" /> 
                            </div>
                            <div>
                                <label htmlFor="ville">Ville: </label>
                                <input type="text" name="ville" />
                            </div>
                            <div>
                                <label htmlFor="mail">Email: </label>
                                <input type="text" name="mail" />
                            </div>
                        </div>

                        <button className="button-buy" href="#">Passer commande</button>
                    </form>
                    
                    
                </section>
            </main>
            <Footer />

            <div className="modal" id="modal">
            <div className="modal-content">
                <p className="modal-message">Félicitations,     votre commande a été passée avec succès.</p>
                <p>Voici votre numéro de commande : <span   id="order-number"></span></p>
            </div>
            </div>

        </>
    );
}