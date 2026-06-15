import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await api.get(`/books/${id}`);
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!book) {
    return (
      <div className="details-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-card">
        <div className="details-icon">📚</div>

        <h1>{book.title}</h1>

        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Condition:</strong> {book.condition}</p>
        <p><strong>Type:</strong> {book.type}</p>
        <p><strong>Price:</strong> Rs. {book.price}</p>

        <hr />

        <h3>👤 Seller Information</h3>

<p><strong>Seller:</strong> {book.sellerName}</p>
<p><strong>Phone:</strong> {book.contactNumber}</p>

<p
  style={{
    marginTop: "15px",
    color: "#666",
    fontStyle: "italic",
  }}
>
  Contact the seller directly to arrange
  the sale or exchange.
</p>

        <div
  style={{
    display: "flex",
    gap: "15px",
    marginTop: "25px",
    justifyContent: "center",
    flexWrap: "wrap",
  }}
>
  <button
    className="back-btn"
    onClick={() =>
      alert(
        `Contact ${book.sellerName} at ${book.contactNumber}`
      )
    }
  >
    {book.type === "Sale"
      ? "📞 Contact Seller"
      : "🔄 Request Exchange"}
  </button>

  <Link to="/browse">
    <button className="back-btn">
      ← Back to Browse
    </button>
  </Link>
</div>
      </div>
    </div>
  );
}

export default BookDetails;