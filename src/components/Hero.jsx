import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="hero d-flex align-items-center justify-content-center overflow-hidden">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Text Content */}
          <motion.div
            className="col-lg-6 text-center text-lg-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-primary gradient-text">BENITING</span>
            </motion.h1>

            <motion.h3 variants={itemVariants} className="mt-3 mb-4 fw-light">
              <ReactTyped
                strings={[
                  "Java Full Stack Developer",
                  "React Developer",
                  "Spring Boot Expert",
                  "Node.js Developer",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </motion.h3>

            <motion.p variants={itemVariants} className="lead mb-4">
              Crafting beautiful, responsive, and functional web applications with modern technologies
            </motion.p>

            <motion.div variants={itemVariants} className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start mb-4">
              <a href="/resume.pdf" download className="btn btn-outline-primary btn-lg">
                Download Resume
              </a>
              <a href="#projects" className="btn btn-primary btn-lg">
                 View Projects
              </a>
            </motion.div>

            {/* Social & Contact Icons */}
            <motion.div
              variants={itemVariants}
              className="hero-social-links d-flex gap-3 align-items-center justify-content-center justify-content-lg-start"
            >
              <a
                href="mailto:benitingraj@gmail.com"
                className="hero-social-icon"
                title="Email: benitingraj@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href="tel:+918870736865"
                className="hero-social-icon"
                title="Phone: +91 8870736865"
                aria-label="Phone"
              >
                <FaPhone size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/beniting"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={19} />
              </a>
              <a
                href="https://github.com/Beniting"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <FaGithub size={19} />
              </a>
            </motion.div>

            {/* <motion.div variants={itemVariants} className="mt-5">
              <p className="text-muted">Scroll to explore my work 👇</p>
            </motion.div> */}
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="col-lg-6 d-flex justify-content-center mt-4 mt-lg-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img src="/profile.jpeg" alt="Profile" className="hero-image" />
                <div className="hero-image-glow"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}