import { Link } from "react-router-dom";
import { products } from "../script";


const Minibouquets = () => {
  const MinibouquetsProducts = products.MiniBouquets;

  return (
    <div>
      <main>
        <h1 style={{ textAlign: "center", margin: "30px 0" }}>Decor</h1>

        <div className="products">
          {MinibouquetsProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="buttons">
                 <Link to={`/product/${item.id}`}>
                    <button className="details-btn">Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Minibouquets;
