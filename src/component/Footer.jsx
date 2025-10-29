import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    document.title = "Flowers Home";
  }, []); // تتنفذ مرة واحدة عند التحميل

  return (
    <footer>
      <div className="footer-container">
        <h3>Flowers Home</h3>
        <br />
        <p>Fresh blooms & elegant gifts. Stay connected with us!</p>

        <div className="social-icons">
          <a href="whatsapp://send?phone=201286177376">
            <img src="/images/icons8-facebook-logo-100.png" alt="Facebook" />
          </a>

          <a
            href="https://www.instagram.com/flowers_home11?igsh=NXl1NW9zbmxtMHpy"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/icons8-instagram-logo-100.png" alt="Instagram" />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=+201286177376"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/icons8-tiktok-100.png" alt="TikTok" />
          </a>
        </div>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <p className="copyright">
          © 2025 Flowers Home 🌸. <br />
          All rights reserved. Made with love and petals 💐
        </p>
      </div>
    </footer>
  );
};

export default Footer;




