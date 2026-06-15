import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>📚 BookSwap</h2>
        <p>
          An online platform where students can buy, sell, and exchange
          academic books with ease.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/add-book">Add Book</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/about">About</Link>
        </div>

        <hr />

        <p className="copyright">
          © 2026 BookSwap | Web Engineering Project
        </p>
      </div>
    </footer>
  );
}

export default Footer;