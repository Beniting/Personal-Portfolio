import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "AGGE.IN",
    description: "Dynamic membership-based web application with admin-controlled content and complete membership management system.",
    detailedDescription: "AGGE.IN is a fully dynamic membership-based web application designed for membership management companies. It features admin-controlled content and image management, comprehensive membership plans, secure user authentication, and role-based access control. The platform includes Admin and User Dashboards with complete CRUD operations and CMS-like functionality to manage website content without code changes.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/project1.jpg",
    liveLink: "https://agge.in/",
    githubLink: "#",
    featured: true,
    screenshots: [
      "/screenshots/agge1.jpg",
      "/screenshots/agge2.jpg",
      "/screenshots/agge3.jpg",
    ],
    keyFeatures: [
      "Flexible membership plans with multiple tiers",
      "User authentication and authorization",
      "Admin Dashboard for content management",
      "User Dashboard with membership details",
      "Complete CRUD operations",
      "Image and content management system",
      "Role-based access control",
      "Responsive design for all devices"
    ],
    challenges: "Building a dynamic system that allows admin to manage content without technical knowledge",
    solution: "Implemented an intuitive admin panel with CMS-like functionality for content management"
  },
  {
    id: 2,
    title: "ThinkSynapseCare",
    description: "Healthcare appointment booking system with dashboards for Admin, Doctors, and Patients with secure backend logic.",
    detailedDescription: "ThinkSynapseCare is a comprehensive healthcare appointment booking system designed for seamless patient-doctor interactions. The system features specialized dashboards for Admin, Doctors, and Patients, appointment scheduling with real-time availability, patient records management, and secure booking management. It includes robust backend logic with session handling and complete CRUD operations for all entities.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/project2.jpg",
    liveLink: "https://thinksynapsecare.org/",
    githubLink: "#",
    featured: true,
    screenshots: [
      "/screenshots/thinksynapsecare1.jpg",
      "/screenshots/thinksynapsecare2.jpg",
      "/screenshots/thinksynapsecare3.jpg",
    ],
    keyFeatures: [
      "Admin Dashboard for system management",
      "Doctor Dashboard for appointment management",
      "Patient Dashboard with appointment history",
      "Real-time appointment scheduling",
      "Patient records management",
      "Doctor availability management",
      "Secure session handling",
      "Booking confirmation and notifications"
    ],
    challenges: "Managing appointment conflicts and ensuring real-time availability updates across multiple doctors",
    solution: "Implemented transaction-based booking system with proper locking mechanisms"
  },
  {
    id: 3,
    title: "TeamWeb",
    description: "Responsive company portfolio website with contact form and backend validation for client inquiries.",
    detailedDescription: "TeamWeb is a professional company portfolio website designed to showcase services and attract clients. It features a responsive design that works seamlessly across all devices, a fully functional contact form with backend processing and validation, and a clean, modern UI that represents the company professionally.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "/project3.jpg",
    liveLink: "https://teamweb.in/",
    githubLink: "#",
    featured: false,
    screenshots: [
      "/screenshots/teamweb1.jpg",
      "/screenshots/teamweb2.jpg",
      "/screenshots/teamweb3.jpg",
    ],
    keyFeatures: [
      "Responsive design for mobile and desktop",
      "Service showcase sections",
      "Contact form with backend processing",
      "Form validation and error handling",
      "Professional portfolio layout",
      "Social media integration",
      "Clean and modern UI",
      "SEO-friendly structure"
    ],
    challenges: "Creating an engaging portfolio while maintaining fast load times",
    solution: "Optimized images and implemented efficient backend processing"
  },
  {
    id: 4,
    title: "AviationMedicals.au",
    description: "Responsive portfolio website for aviation medicals service provider with contact form and client-side validation.",
    detailedDescription: "AviationMedicals.au is a specialized portfolio website for aviation medical examination services. It features a responsive, modern design that adapts to all screen sizes, a professional contact form with robust client-side validation, and clear information about aviation medical services.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/project4.jpg",
    liveLink: "https://aviationmedicals.au/",
    githubLink: "#",
    featured: false,
    screenshots: [
      "/screenshots/aviationmedicals1.jpg",
      "/screenshots/aviationmedicals2.jpg",
      "/screenshots/aviationmedicals3.jpg",
    ],
    keyFeatures: [
      "Responsive portfolio design",
      "Service information sections",
      "Contact form with validation",
      "Professional medical branding",
      "Mobile-optimized layout",
      "Clear call-to-action buttons",
      "Client testimonials section",
      "Appointment information display"
    ],
    challenges: "Presenting medical information while maintaining professional appearance",
    solution: "Used clean typography and professional color schemes"
  },
  {
    id: 5,
    title: "IMVijayan.in",
    description: "Personal portfolio website showcasing projects and skills with responsive UI and smooth navigation.",
    detailedDescription: "IMVijayan.in is a personal portfolio website designed to showcase projects, skills, and professional experience. It features a responsive user interface that works perfectly on all devices and smooth navigation that enhances user experience. The site effectively presents a professional profile with project highlights and technical skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/project5.jpg",
    liveLink: "https://imvijayan.in/",
    githubLink: "#",
    featured: false,
    screenshots: [
      "/screenshots/imvijayan1.jpg",
      "/screenshots/imvijayan2.jpg",
      "/screenshots/imvijayan3.jpg",
    ],
    keyFeatures: [
      "Responsive portfolio layout",
      "Project showcase section",
      "Skills and expertise display",
      "Professional experience timeline",
      "Smooth navigation and animations",
      "Mobile-friendly design",
      "Contact and social links",
      "About section with bio"
    ],
    challenges: "Creating an engaging portfolio that stands out and effectively showcases skills",
    solution: "Implemented smooth animations and clean, modern design principles"
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      selectedProject ? (prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1) : 0
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      selectedProject ? (prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1) : 0
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5 section-title"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="col-md-6 col-lg-4 mb-4"
              variants={cardVariants}
            >
              <motion.div
                className="project-card h-100 cursor-pointer"
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 30px 60px rgba(56, 189, 248, 0.4)" 
                }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <motion.div
                  className="project-image-wrapper"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-image-placeholder">
                    <span className="display-6">💻</span>
                    <p className="mt-2">{project.title}</p>
                  </div>
                  {project.featured && (
                    <motion.div 
                      className="featured-badge"
                      whileHover={{ scale: 1.1 }}
                    >
                      ⭐ Featured
                    </motion.div>
                  )}
                </motion.div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-2">{project.title}</h5>
                  <p className="card-text flex-grow-1 text-muted small">
                    {project.description}
                  </p>

                  <div className="technologies mb-3">
                    {project.technologies.map((tech, idx) => (
                      <motion.span 
                        key={idx} 
                        className="tech-badge"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="d-flex gap-2">
                    <motion.a
                      href={project.liveLink}
                      className="btn btn-primary btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt size={12} /> Live
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      className="btn btn-outline-primary btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub size={12} /> Code
                    </motion.a>
                  </div>

                  <motion.button
                    className="btn btn-secondary btn-sm mt-2 w-100"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="modal-close-btn"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={24} />
              </motion.button>

              {/* Screenshots Carousel */}
              <div className="modal-screenshots-section">
                <div className="screenshot-carousel">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      className="screenshot-container"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="screenshot-placeholder">
                        <span className="display-1">📸</span>
                        <p>Screenshot {currentImageIndex + 1} of {selectedProject.screenshots.length}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <motion.button
                        className="carousel-btn carousel-btn-prev"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePrevImage}
                      >
                        <FaChevronLeft size={20} />
                      </motion.button>
                      <motion.button
                        className="carousel-btn carousel-btn-next"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNextImage}
                      >
                        <FaChevronRight size={20} />
                      </motion.button>
                    </>
                  )}
                </div>

                {/* Dots Indicator */}
                {selectedProject.screenshots.length > 1 && (
                  <div className="carousel-dots">
                    {selectedProject.screenshots.map((_, idx) => (
                      <motion.div
                        key={idx}
                        className={`dot ${idx === currentImageIndex ? "active" : ""}`}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentImageIndex(idx)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="modal-content-section">
                <h2 className="modal-title">{selectedProject.title}</h2>
                
                <div className="modal-section">
                  <h4>Overview</h4>
                  <p>{selectedProject.detailedDescription}</p>
                </div>

                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {selectedProject.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="modal-section">
                      <h4>Challenge</h4>
                      <p className="text-danger">{selectedProject.challenges}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modal-section">
                      <h4>Solution</h4>
                      <p className="text-success">{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="modal-technologies">
                    {selectedProject.technologies.map((tech, idx) => (
                      <motion.span 
                        key={idx} 
                        className="tech-badge"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <motion.a
                    href={selectedProject.liveLink}
                    className="btn btn-primary btn-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> View Live
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubLink}
                    className="btn btn-outline-primary btn-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}