import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    condition: "",
    type: "",
    price: "",
    sellerName: "",
    contactNumber: "",
  });

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await api.get(
        `/books/${id}`
      );

      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(
        `/books/${id}`,
        formData
      );

      alert(
        "Book updated successfully!"
      );

      navigate("/my-books");
    } catch (error) {
      console.log(error);
      alert(
        "Failed to update book."
      );
    }
  };

  return (
    <div className="add-book-container">
      <div className="form-card">
        <h1>Edit Book ✏️</h1>

        <form
          onSubmit={handleSubmit}
        >
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
            placeholder="Description"
            value={
              formData.description
            }
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="condition"
            placeholder="Condition"
            value={
              formData.condition
            }
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="type"
            placeholder="Sale or Exchange"
            value={formData.type}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            value={
              formData.sellerName
            }
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={
              formData.contactNumber
            }
            onChange={handleChange}
            required
          />

          <button type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBook;