import Slider from "react-slick";
import { Link } from "react-router-dom";
import  { useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { slides, products } from "../script"; 

const Landing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  useEffect(() => {
  document.title = "Flowers Home";
}, []);

const categoriesKeys = ["ChocoBoqute", "Giftbox", "Graduation", "birthdays", "MiniBouquets", "ShabkaTrays"];
const featuredProducts = categoriesKeys.flatMap(key => (products[key] || []).slice(0,1));

  return (
    <div>
      <section className="landing-slider-container">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div key={i} className="slide">
              <div className="slide-content">
                <div className="text">
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  <Link to={slide.link} className="slide-btn">
                    Explore {slide.title}
                  </Link>
                </div>
                <div className="image">
                  <img src={slide.img} alt={slide.title} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="about-shop">
        <div className="about-container">
          <h2>About Our Flower Shop</h2>
          <p>
            Welcome to our beautiful flower shop! We provide fresh bouquets, unique arrangements, 
            and gifts for every occasion. Whether you're celebrating a birthday, anniversary, 
            or just want to brighten someone's day, we've got the perfect flowers for you.
          </p>
          <Link to="/home" className="about-btn">
            Explore Our Categories
          </Link>
        </div>
      </section>
      <section className="featured-products">
        <h2 style={{textAlign: 'center', margin: '40px 0', color: '#80244e'}}>Featured Products</h2>
        <div className="products">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
             <Link to={`/product/${product.id}`} className="about-btn">View</Link>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;



