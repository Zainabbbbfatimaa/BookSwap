import { useEffect, useState } from "react";
import api from "../services/api";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
  "All",
  "Programming",
  "AI",
  "Database",
  "Web Development",
];

 const filteredBooks = books.filter((book) => {
  const matchesSearch =
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) ||
    book.category.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    book.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <div className="browse-page">
      <h1>Browse Books 📚</h1>

      <input
        type="text"
        placeholder="Search by title, author or category..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="category-filter">
  {categories.map((category) => (
    <button
      key={category}
      className={
        selectedCategory === category
          ? "filter-btn active-filter"
          : "filter-btn"
      }
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  ))}
</div>



      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))
        ) : (
          <h3>No books found.</h3>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;