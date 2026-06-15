import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home-page">
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>📚 BookSwap</h1>
        <h2>Online Book Exchange Platform</h2>

        <p>
          Buy, sell and exchange academic books with students.
          Discover affordable textbooks and give your old books a new home.
        </p>

        <div className="hero-buttons">
          <Link to="/browse">
            <button className="primary-btn">Browse Books</button>
          </Link>

          <Link to="/add-book">
            <button className="secondary-btn">List Your Book</button>
          </Link>
        </div>
      </motion.section>

      <section className="stats-section">
  <div className="stat-card">
    <h2>📚</h2>
    <h3>20+</h3>
    <p>Books Available</p>
  </div>

  <div className="stat-card">
    <h2>🔄</h2>
    <h3>Book Trading</h3>
    <p>Buy, Sell & Exchange</p>
  </div>

  <div className="stat-card">
    <h2>👨‍🎓</h2>
    <h3>Growing</h3>
    <p>Student Community</p>
  </div>
</section>

      <section className="features-section">
        <motion.div
          className="feature-card"
          whileHover={{ y: -10 }}
        >
          <h2>📚</h2>
          <h3>Browse Books</h3>
          <p>
            Explore textbooks from Programming, AI, Database,
            Web Development and many more categories.
          </p>
        </motion.div>

        <motion.div
          className="feature-card"
          whileHover={{ y: -10 }}
        >
          <h2>🔄</h2>
          <h3>Buy, Sell & Exchange</h3>
          <p>
            List your old books for sale or exchange them
            with fellow students.
          </p>
        </motion.div>

        <motion.div
          className="feature-card"
          whileHover={{ y: -10 }}
        >
          <h2>👨‍🎓</h2>
          <h3>Student Community</h3>
          <p>
            Connect with other students and find affordable
            academic resources.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;