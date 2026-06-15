import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Sale", "Exchange"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerName: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },

    // NEW: Save which user added this book
    ownerEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;