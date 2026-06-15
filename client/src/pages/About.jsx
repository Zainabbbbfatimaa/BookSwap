import { motion } from "framer-motion";

function About() {
  return (
    <div className="about-page">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About BookSwap</h1>

        <p>
          <strong>BookSwap</strong> is an Online Book Exchange Platform
          designed for students to buy, sell, and exchange academic books
          conveniently. The platform helps students find affordable study
          materials while giving unused books a second life.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>📖 Browse and search books.</li>
          <li>➕ Add books for sale or exchange.</li>
          <li>🔍 Filter books by category.</li>
          <li>❤️ Save favorite books to Wishlist.</li>
          <li>📋 View complete book and seller details.</li>
          <li>☁️ Store data securely using MongoDB Atlas.</li>
        </ul>

        <h2>Technologies Used</h2>
        <div className="tech-grid">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB Atlas</span>
          <span>Axios</span>
          <span>Framer Motion</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript (ES6+)</span>
        </div>

        <h2>Academic Project</h2>
        <p>
          This application was developed as a <strong>Web Engineering Project</strong> to demonstrate full-stack web development concepts,
          including frontend development, backend APIs, database integration,
          and responsive user interface design.
        </p>
      </motion.div>
    </div>
  );
}

export default About;