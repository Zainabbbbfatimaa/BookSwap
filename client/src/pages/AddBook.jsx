import { useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";

function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    condition: "Good",
    type: "Sale",
    price: "",
    sellerName: "",
    contactNumber: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const currentUser = JSON.parse(
  localStorage.getItem("bookswapUser")
);

await api.post("/books", {
  ...formData,
  price: Number(formData.price),
  ownerEmail: currentUser.email,
});
      setMessage("✅ Book added successfully!");

      setFormData({
        title: "",
        author: "",
        category: "",
        description: "",
        condition: "Good",
        type: "Sale",
        price: "",
        sellerName: "",
        contactNumber: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to add book.");
    }
  };

  return (
    <motion.div
      className="add-book-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-card">
        <h1>List Your Book 📚</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Book Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          >
            <option>New</option>
            <option>Good</option>
            <option>Fair</option>
          </select>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option>Sale</option>
            <option>Exchange</option>
          </select>

          <input
            type="number"
            name="price"
            placeholder="Price (Rs.)"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            value={formData.sellerName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Book</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </motion.div>
  );
}

export default AddBook;