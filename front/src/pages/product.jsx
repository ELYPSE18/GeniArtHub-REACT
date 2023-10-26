import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/cartContext';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/styles.css';


function Product() {
  const [productData, setProductData] = useState([]);
  const [selectedFormat, setSelectedFormat] = useState('');
  const { id } = useParams();
  const { cart, setCart, addToCart } = useCart();


    // const { cart, setCart } = useCart();
  
    // const productIndex = cart.findIndex(item => item.id === id && item.format === format);
    // if (productIndex !== -1) {
    //   const newCart = [...cart];
    //   newCart[productIndex].quantity = parseInt(newCart[productIndex].quantity) + parseInt(quantity);
    //   if (newCart[productIndex].quantity > 100) {
    //     alert('Vous ne pouvez pas commander plus de 100 exemplaires d\'une même oeuvre');
    //     return;
    //   }
    //   setCart(newCart);
    //   return
    // }

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
    
    function addToCart2(){
      const quantity = document.querySelector('#quantity').value;
      const format = document.querySelector('#format').value;
      const product = {
        id: productData._id,
        titre: productData.titre,
        format: format,
        quantity: quantity,
      };
   
      // on fait les tests pour voir si le produit n'existe pas déjà, ou s'il ne dépasse pas les 100
      const productIndex = cart.findIndex(item => item.id === id && item.format === format);
      if (productIndex !== -1) {
        const newCart = [...cart];
        newCart[productIndex].quantity = parseInt(newCart[productIndex].quantity) + parseInt(quantity);
        if (newCart[productIndex].quantity > 100) {
          alert('Vous ne pouvez pas commander plus de 100 exemplaires d\'une même oeuvre');
          return;
        }
        setCart(newCart);
        return
      }
      addToCart(product);
      
    }


document.body.classList.add('page');

  return !productData.declinaisons ? "Chargement" : (
    <>
<Header />
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
          <a className="button-buy" onClick={addToCart2} href="#">
            Buy {productData.shorttitle}
          </a>
        </div>
      </article>

      <aside>
        <h2>Description de l’oeuvre : {productData.titre}</h2>
        <p>{productData.description}</p>
      </aside>
    </section>
<Footer />
    </>);

}

export default Product
