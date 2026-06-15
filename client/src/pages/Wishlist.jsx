import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();

  // Get current logged in user
  const currentUser = JSON.parse(
    localStorage.getItem("bookswapUser")
  );

  // Create unique wishlist key for each user
  const wishlistKey = currentUser
    ? `wishlist_${currentUser.email}`
    : "wishlist_guest";

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () => {
    const saved =
      JSON.parse(localStorage.getItem(wishlistKey)) || [];

    setWishlist(saved);
  };

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (book) => book._id !== id
    );

    localStorage.setItem(
      wishlistKey,
      JSON.stringify(updatedWishlist)
    );

    setWishlist(updatedWishlist);
  };

  // User must login first
  if (!currentUser) {
  return (
    <div className="form-container">
      <div className="register-card" style={{ maxWidth: "520px" }}>
        <h1 style={{ fontSize: "55px", marginBottom: "10px" }}>
          🔒
        </h1>

        <h2 style={{ marginBottom: "15px" }}>
          Wishlist Available for Members
        </h2>

        <p
          style={{
            color: "#666",
            lineHeight: "1.7",
            marginBottom: "25px",
          }}
        >
          Save books you love and access them
          anytime from your personal wishlist.
        </p>

        <p style={{ color: "#666" }}>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{
              color: "#3366dd",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

  return (
    <div className="browse-page">
      <h1>My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <h3>Your wishlist is empty.</h3>
      ) : (
        <div className="books-grid">
          {wishlist.map((book) => (
            <div
              className="book-card"
              key={book._id}
            >
              <div className="book-icon">
                📚
              </div>

              <h2>{book.title}</h2>

              <p>
                <strong>Author:</strong>{" "}
                {book.author}
              </p>
              <p>
                <strong>Category:</strong>{" "}
                {book.category}
              </p>
              <p>
                <strong>Condition:</strong>{" "}
                {book.condition}
              </p>
              <p>
                <strong>Type:</strong> {book.type}
              </p>

              <div className="card-footer">
                <span className="price">
                  Rs. {book.price}
                </span>

                <div className="card-buttons">
                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromWishlist(
                        book._id
                      )
                    }
                  >
                    🗑 Remove
                  </button>

                  <button
                    onClick={() =>
                      navigate(
                        `/book/${book._id}`
                      )
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;