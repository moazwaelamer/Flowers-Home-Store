import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // تعيين عنوان الصفحة
  useEffect(() => {
    document.title = "Flowers Home";
  }, []); // ✅ مصحح

  // تحميل الفئات
  useEffect(() => {
    const cats = [
      { name: "ChocoBoqute", path: "/ChocoBoqute", image: "/images/chocoboquet2.jpg" },
      { name: "Graduation", path: "/graduation", image: "/images/gradution1.jpg" },
      { name: "birthdays", path: "/birthdays", image: "/images/birthday2.jpg" },
      { name: "MiniBouquets", path: "/minibouquets", image: "/images/miniboquet1.jpg" },
      { name: "ShabkaTrays", path: "/shabkatrays", image: "/images/shabka3.jpg" },
      { name: "Giftbox", path: "/giftbox", image: "/images/giftbox1.jpg" },
    ];
    setCategories(cats);
  }, []);

  return (
    <div>
      <main>
        <h1 style={{ textAlign: "center", margin: "30px 0" }}>Categories</h1>

        <div className="products">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="product-card"
              onClick={() => navigate(cat.path)}
              style={{ cursor: "pointer" }}
            >
              <img src={cat.image} alt={cat.name} />
              <h3>{cat.name}</h3>
              <p>Explore the latest {cat.name} lineup</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;


