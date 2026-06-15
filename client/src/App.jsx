import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import Wishlist from "./pages/Wishlist";
import MyBooks from "./pages/MyBooks";
import EditBook from "./pages/EditBook";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./styles/global.css";
import "./styles/forms.css";
import "./styles/card.css";
import "./styles/home.css";

function App() {
  const currentUser = JSON.parse(
    localStorage.getItem("bookswapUser")
  );

  // User is NOT logged in
  if (!currentUser) {
    return (
      <div className="app-container">
        <main className="page-content">
          <Routes>
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
            <Route
              path="*"
              element={
                <Navigate
                  to="/register"
                  replace
                />
              }
            />
          </Routes>
        </main>
      </div>
    );
  }

  // User IS logged in
  return (
    <div className="app-container">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/browse"
            element={<BrowseBooks />}
          />
          <Route
            path="/add-book"
            element={<AddBook />}
          />
          <Route
          path="/my-books"
          element={<MyBooks />}
          />
          <Route
  path="/edit-book/:id"
  element={<EditBook />}
/>
          <Route
            path="/book/:id"
            element={<BookDetails />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/login"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
          <Route
            path="/register"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;