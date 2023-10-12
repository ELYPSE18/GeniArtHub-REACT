import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const [productData, setProductData] = useState([]);
  const [selectedFormat, setSelectedFormat] = useState('');
  const { id } = useParams();

  useEffect(() => {
    // Effectuez un appel à l'API ici
    fetch('http://localhost:3000/api/products/' + id)
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, [id]);

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  useEffect(() => {
    if (selectedFormat && productData.declinaisons) {
      const selectedFormatData = productData.declinaisons.find(
        (format) => format.taille === selectedFormat
      );
      if (selectedFormatData) {
        const formattedPrice = `${selectedFormatData.prix.toFixed(2)} €`;
        document.querySelector('.showprice').textContent = formattedPrice;
      }
    }
  }, [selectedFormat, productData.declinaisons]);






  function addToCart(){
    const quantity = document.querySelector('#quantity').value;
    const format = document.querySelector('#format').value;
    const product = {
      id: productData._id,
      titre: productData.titre,
      format: format,
      quantity: quantity,
    };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(cart);
  }
//    // au clic sur le bouton, on appelle la fonction addToCart et on redirige vers la page panier:
//     document.querySelector('.button-buy').addEventListener('click', () => {
//      addToCart();
//      window.location.href = '/cart';
//     });

    // //on affiche le nombre d'articles dans le panier:
    // const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // document.querySelector('#total-articles').textContent = cart.length;

    // //on affiche le montant total du panier:
    // let total = 0;
    // cart.forEach((product) => {
    //   total += product.quantity * product.price;
    // });
    // document.querySelector('#total-amount').textContent = total.toFixed(2) + ' €';

    












  return !productData.declinaisons ? "Chargement" : (
    <section className="detailoeuvre">
      <article>
        <figure>
          <img src={productData.image} alt="Titre de l'oeuvre" />
        </figure>
        <div>
          <h1>{productData.titre}</h1>
          <p>{productData?.description?.substring(0, 200) + '...'} </p>
          <div className="price">
            <p>Acheter pour</p>
            <span className="showprice"> {productData.declinaisons[0].prix.toFixed(2)} €</span>
          </div>
          <div className="declinaison">
            <input type="number" name="quantity" id="quantity" placeholder="1" defaultValue="1" min="1" />
            <select name="format" id="format" onChange={handleFormatChange}>
              {productData?.declinaisons?.map((declinaison) => (
                <option key={declinaison.taille} value={declinaison.taille}>
                  Format : {declinaison.taille}
                </option>
              ))}
            </select>
          </div>
          <a className="button-buy" onClick={addToCart} href="#">
            Buy {productData.shorttitle}
          </a>
        </div>
      </article>

      <aside>
        <h2>Description de l’oeuvre : {productData.titre}</h2>
        <p>{productData.description}</p>
      </aside>
    </section>
  );
}

export default Product;
