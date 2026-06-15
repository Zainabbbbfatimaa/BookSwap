import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function MyBooks() {
  const [myBooks, setMyBooks] = useState([]);
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("bookswapUser")
  );

  useEffect(() => {
    fetchMyBooks();
  }, []);

  const fetchMyBooks = async () => {
    try {
      const response = await api.get("/books");

      const userBooks = response.data.filter(
        (book) =>
          book.ownerEmail === currentUser.email
      );

      setMyBooks(userBooks);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this book?"
  );

  if (!confirmDelete) return;

  try {
    await api.delete(`/books/${id}`);

    setMyBooks(
      myBooks.filter(
        (book) => book._id !== id
      )
    );

    alert("Book deleted successfully!");
  } catch (error) {
    console.log(error);
    alert("Failed to delete book.");
  }
};

  return (
    <div className="browse-page">
      <h1>My Listed Books 📚</h1>

      {myBooks.length === 0 ? (
        <h3>You have not listed any books yet.</h3>
      ) : (
        <div className="books-grid">
          {myBooks.map((book) => (
            <div
              className="book-card"
              key={book._id}
            >
              <div className="book-icon">📚</div>

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
                <strong>Type:</strong>{" "}
                {book.type}
              </p>

              <div className="card-footer">
                <span className="price">
                  Rs. {book.price}
                </span>

                <div className="card-buttons">
  <button
    onClick={() =>
      navigate(`/edit-book/${book._id}`)
    }
  >
    ✏️ Edit
  </button>

  <button
    className="remove-btn"
    onClick={() =>
      deleteBook(book._id)
    }
  >
    🗑 Delete
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

export default MyBooks;