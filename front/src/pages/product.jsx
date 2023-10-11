import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const [productData, setProductData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Effectuez un appel à l'API ici
    fetch('http://localhost:3000/api/products/'+id)
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []); // Le tableau vide en tant que deuxième argument signifie que ce useEffect s'exécute une seule fois après le premier rendu du composant

  return (
    <section class="detailoeuvre">
        <article>
            <figure>
                <img src={productData.image} alt="Titre de l'oeuvre"/>
            </figure>
            <div>
                <h1>Éclat Éthéré : Bird</h1>
                <p>Plongez dans l'univers mystique de 'Bird', une œuvre d'art captivante qui transcende les limites de la réalité. Réalisée dans le style éthéré et spectral, cette pièce évoque la présence d'un oiseau envoûtant qui semble flotter dans l'au-delà. </p>
                <div class="price">
                    <p>Acheter pour</p>
                    <span class="showprice">35.25€</span>
                </div>
                <div class="declinaison">
                    <input type="number" name="quantity" id="quantity" placeholder="1" defaultValue="1" minlength="1" />
                    <select name="format" id="format">
                    </select>
                </div>
                <a class="button-buy" href="#">Buy bird</a>
            </div>
        </article>

        <aside>
            <h2>Description de l’oeuvre :  Éclat Éthéré : Bird</h2>
            <p></p>
        </aside>
        
    </section>
  );
}

export default Product;
