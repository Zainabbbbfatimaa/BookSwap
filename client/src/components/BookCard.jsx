import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function BookCard({ book }) {
  const navigate = useNavigate();

  const addToWishlist = (book) => {
    // Check if user is logged in
    const currentUser = JSON.parse(
      localStorage.getItem("bookswapUser")
    );

    if (!currentUser) {
      alert("Please login first to use Wishlist.");
      return;
    }

    // Create separate wishlist for every user
    const wishlistKey = `wishlist_${currentUser.email}`;

    const existing =
      JSON.parse(localStorage.getItem(wishlistKey)) || [];

    const alreadyAdded = existing.find(
      (item) => item._id === book._id
    );

    if (alreadyAdded) {
      alert("This book is already in your wishlist!");
      return;
    }

    const updatedWishlist = [...existing, book];

    localStorage.setItem(
      wishlistKey,
      JSON.stringify(updatedWishlist)
    );

    alert("Book added to wishlist!");
  };

  return (
    <motion.div
      className="book-card"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="book-icon">📚</div>

      <h2>{book.title}</h2>

      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Category:</strong> {book.category}
      </p>
      <p>
        <strong>Condition:</strong> {book.condition}
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
            className="wishlist-btn"
            onClick={() => addToWishlist(book)}
          >
            ❤️ Wishlist
          </button>

          <button
            onClick={() =>
              navigate(`/book/${book._id}`)
            }
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default BookCard;