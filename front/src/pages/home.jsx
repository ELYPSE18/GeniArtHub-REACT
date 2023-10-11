import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import Card from "../components/cards";
import { useEffect, useState } from "react";



function Home() {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((data) => setCardData(data));
    }, []);
  return (
    <>


<header>
    <div className="row">
        <Link to="/">
            <img src="img/logo-white.png" alt="Logo du site GeniArtHub"/>
        </Link>
    </div>
</header>
<section className="hero">
    <div className="row">
        <h1>Explorez l'AI-magination artistique</h1>
        <Link to="#aiartshop">AI Art Shop</Link>
    </div>
</section>

<section id="aiartshop" className="productlist">
    <div>
        <img src="img/logo-black.png" alt="Logo GeniArtHub version sombre" />
        <Link to="/cart"><img src="img/cart.svg" alt="Aller au panier"/></Link>
    </div>
    <section className="products">
        {cardData.map((product) => (
            <Card
            key={product._id}
            Id={product._id}
            image={product.image}
            titre={product.titre}
            shorttitle={product.shorttitle}

               

            />
        ))}





    

    </section>
</section>

    <Footer />
    
    
    </>
  
  )
}

export default Home;