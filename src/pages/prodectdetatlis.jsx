import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../script";

const Prodectdetatlis = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // لتغيير عنوان الصفحة
  useEffect(() => {
    document.title = "Flowers Home";
  }, []); // ✅ فاضي لأنك مش معتمد على متغيرات

  // لجلب المنتج حسب id
  useEffect(() => {
    const allProducts = Object.values(products).flat();
    const found = allProducts.find((p) => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Product not found ❌
      </h2>
    );
  }

  return (
    <main style={{ textAlign: "center", margin: "40px 0" }}>
      <div
        id="product-details"
        style={{
          display: "inline-block",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
        <h2 style={{ margin: "20px 0 10px", color: "#333" }}>
          {product.title}
        </h2>
        <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.6" }}>
          {product.description}
        </p>

        <div style={{ marginTop: "20px" }}>
          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "#ff6fa3",
              fontWeight: "bold",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Prodectdetatlis;

