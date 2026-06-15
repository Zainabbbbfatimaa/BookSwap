import express from "express";
import Book from "../models/Book.js";

import {
  getBooks,
  getBookById,
  addBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", addBook);
router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(
      req.params.id
    );

    if (!deletedBook) {
      return res
        .status(404)
        .json({ message: "Book not found" });
    }

    res.json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updatedBook =
      await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;