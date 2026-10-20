import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "MyTodoApp",
    description: "Offline-first mobile To-Do application built with React Native, Expo, and SQLite featuring local on-device persistence, productivity analytics, and calendar scheduling.",
    detailedDescription: "MyTodoApp is an offline-first mobile productivity application engineered with React Native, Expo, and TypeScript. Designed for fast, privacy-focused task management without internet dependency, all tasks, categories, and completion history are stored securely on-device with SQLite. Key features include an interactive productivity dashboard with 7-day activity metrics, priority and due-date tracking, dynamic category filtering (Work, Personal, Study, Health), full-text search, and an interactive monthly and weekly calendar scheduling view.",
    technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Mobile UI"],
    image: "/screenshots/mytodoapp_1.jpg",
    liveLink: null,
    githubLink: "https://github.com/Beniting",
    featured: true,
    screenshots: [
      "/screenshots/mytodoapp_1.jpg",
      "/screenshots/mytodoapp_2.jpg",
      "/screenshots/mytodoapp_3.jpg"
    ],
    keyFeatures: [
      "Offline-first architecture with high-performance local SQLite storage",
      "Productivity dashboard with pending, overdue, and completion rate metrics",
      "7-day activity tracking bar chart visualizing task completion trends",
      "Dynamic task categorization (Work, Personal, Study, Health) with priority flags",
      "Interactive Calendar view with Month View and Week Strip modes",
      "Fast on-device search and filtering across task titles, notes, and categories",
      "Modern native mobile interface with intuitive bottom navigation"
    ],
    challenges: "Architecting a dependable offline-first data model capable of fast querying, filtering by category and date, and instant updates without cloud or server reliance.",
    solution: "Implemented an optimized SQLite database schema with indexed lookups, paired with clean TypeScript interfaces and responsive state management for a smooth 60fps mobile experience."
  },
  {
    id: 2,
    title: "AGGE",
    description: "Dynamic membership-based web platform for the Association of Geosciences & Geo Engineering built with Java Spring Boot and dynamic admin CMS.",
    detailedDescription: "AGGE (Association of Geosciences & Geo Engineering) is a dynamic, full-featured web platform engineered using Java Spring Boot. It provides a complete membership lifecycle management system, secure user authentication, event and conference registration, notification broadcasts, and research publication access. The platform features an intuitive Admin Dashboard with CMS capability enabling non-technical administrators to manage content, images, and announcements without code redeployment.",
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "HTML5", "CSS3", "JavaScript", "REST APIs"],
    image: "/screenshots/agge.png",
    liveLink: "https://agge.in/",
    githubLink: null,
    featured: true,
    screenshots: [
      "/screenshots/agge.png"
    ],
    keyFeatures: [
      "Java Spring Boot enterprise backend with clean MVC architecture",
      "Dynamic tiered membership management and registration system",
      "Admin CMS dashboard for real-time content and image updates",
      "Event and conference registration system with alert notifications",
      "Member portal with personalized dashboard and profile management",
      "Role-based access control (RBAC) and secure session authentication",
      "Responsive, modern user interface across desktop and mobile devices"
    ],
    challenges: "Building a scalable, high-performance portal in Spring Boot that allows administrators to update announcements and manage member applications seamlessly with zero downtime.",
    solution: "Engineered a Spring Boot architecture with Spring Data JPA, RESTful services, secure Spring Security authentication, and a modular admin panel for effortless content management."
  },
  {
    id: 3,
    title: "Telecare Health",
    description: "24/7 physician-led medical support & telehealth services platform with dynamic PHP admin CMS for real-time content updates.",
    detailedDescription: "Telecare Health is an Australian-based healthcare platform providing 24/7 physician-led virtual medical support, telemedicine consultations, and emergency triage for aviation, maritime, remote industrial sites, and global workforces. Built with a dynamic PHP backend, it features a comprehensive Admin CMS dashboard allowing authorized personnel to update clinical services, medical guidelines, announcements, and team information in real-time.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Admin CMS", "RESTful APIs"],
    image: "/screenshots/telecarehealth.png",
    liveLink: "https://telecarehealth.com.au/",
    githubLink: null,
    featured: true,
    screenshots: [
      "/screenshots/telecarehealth.png",
      "/screenshots/telecarehealth_2.png"
    ],
    keyFeatures: [
      "Dynamic Admin Panel with CMS functionality for content and service updates",
      "24/7 physician-led emergency medical support & telemedicine consultations",
      "Specialized industry portals for Aviation, Maritime, and Remote Workforces",
      "Real-time biometric monitoring coordination and medical kit logistics",
      "Secure patient consultation inquiry handling and triage dispatch",
      "High-reliability responsive interface engineered for mission-critical care"
    ],
    challenges: "Developing an enterprise-grade medical portal that communicates clinical trust and gives administrators full control over dynamic services and content.",
    solution: "Designed a secure PHP admin CMS with database-driven content modules, role authentication, and a clean, accessible healthcare interface."
  },
  {
    id: 4,
    title: "TeamWeb",
    description: "Responsive digital solutions & web development agency platform featuring service showcase, client inquiry processing, and interactive UI.",
    detailedDescription: "TeamWeb is a modern digital agency website designed to showcase web and application development services, e-commerce solutions, and billing software. Built with responsive design principles, smooth CSS animations, and a secure PHP backend for lead generation, quotation inquiries, and customer outreach.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    image: "/screenshots/teamweb.png",
    liveLink: "https://teamweb.in/",
    githubLink: null,
    featured: false,
    screenshots: [
      "/screenshots/teamweb.png"
    ],
    keyFeatures: [
      "Full digital service showcase (Web Apps, E-commerce, Billing Software)",
      "Interactive inquiry and quotation request workflows with backend processing",
      "Modern multi-device responsive design with smooth transition animations",
      "Client testimonials, case studies, and service portfolio showcase",
      "SEO-friendly semantic structure and optimized page speed"
    ],
    challenges: "Designing an engaging, high-conversion agency portfolio that communicates technical capabilities clearly while maintaining fast load times.",
    solution: "Implemented lightweight CSS animations, optimized high-definition graphics, and created a secure PHP form processing pipeline for instant inquiries."
  },
  {
    id: 5,
    title: "Aviation Medicals",
    description: "Certified Australian aviation medical examination platform for pilots, aircrew, and aviation personnel under CASA guidelines.",
    detailedDescription: "Aviation Medicals (aviationmedicals.au) is a dedicated Australian healthcare platform offering certified aviation medical examinations for pilots, aircrew, and air traffic controllers under CASA regulations. Featuring an aerodynamic modern design, detailed guidance on medical certification classes, and an appointment booking flow.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap"],
    image: "/screenshots/aviationmedicals.png",
    liveLink: "https://aviationmedicals.au/",
    githubLink: null,
    featured: false,
    screenshots: [
      "/screenshots/aviationmedicals.png"
    ],
    keyFeatures: [
      "CASA aviation medical class guidance (Class 1, 2, 3 & Basic)",
      "Appointment consultation enquiry system for pilots and aviation professionals",
      "Clinic locations, examiner credentials, and flight fitness criteria display",
      "Mobile-optimized, clean aerodynamic branding",
      "Robust client-side validation and secure PHP backend handling"
    ],
    challenges: "Presenting rigorous regulatory aviation medical requirements in an accessible, reassuring, and professional manner.",
    solution: "Created a structured information architecture with clear medical class categorization and direct appointment access."
  },
  {
    id: 6,
    title: "I M Vijayan",
    description: "Official tribute and portfolio website celebrating legendary Indian football icon I M Vijayan (Padma Shri 2025, Arjuna Awardee).",
    detailedDescription: "IMVijayan.in is the official portfolio and tribute website honoring legendary Indian football captain and icon I M Vijayan. Highlighting his historic career, Padma Shri 2025 honor, Arjuna Award, international record sub-12-second goal, interactive photo and video galleries, and direct fan/media contact portal.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Interactive Gallery"],
    image: "/screenshots/imvijayan.png",
    liveLink: "https://imvijayan.in/",
    githubLink: null,
    featured: false,
    screenshots: [
      "/screenshots/imvijayan.png",
      "/screenshots/imvijayan_2.png"
    ],
    keyFeatures: [
      "Career timeline and prestigious honors showcase (Padma Shri 2025, Arjuna Award)",
      "Interactive video gallery highlighting legendary international goals",
      "Historic records display including the famous sub-12-second international goal",
      "Direct fan and media inquiry portal with PHP email integration",
      "Responsive visual slider and mobile-optimized sports portfolio layout"
    ],
    challenges: "Honoring an iconic sports legend's heritage with dynamic storytelling while ensuring modern performance and accessibility across all devices.",
    solution: "Engineered bold visual storytelling with responsive media carousels and clean, lightweight backend inquiry processing."
  }
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
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-image-placeholder">
                      <span className="display-6">💻</span>
                      <p className="mt-2">{project.title}</p>
                    </div>
                  )}
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
                  <p className="card-text flex-grow-1">
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
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-primary btn-sm ${project.githubLink ? 'flex-grow-1' : 'w-100'} d-flex align-items-center justify-content-center gap-2`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={12} /> Live Preview
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-outline-primary btn-sm ${project.liveLink ? 'flex-grow-1' : 'w-100'} d-flex align-items-center justify-content-center gap-2`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={12} /> Code
                      </motion.a>
                    )}
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
                      <div className="screenshot-container">
                        {selectedProject.screenshots && selectedProject.screenshots[currentImageIndex] ? (
                          <img
                            src={selectedProject.screenshots[currentImageIndex]}
                            alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                            className="screenshot-img"
                          />
                        ) : (
                          <div className="screenshot-placeholder">
                            <span className="display-1">📸</span>
                            <p>Screenshot {currentImageIndex + 1} of {selectedProject.screenshots ? selectedProject.screenshots.length : 1}</p>
                          </div>
                        )}
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
                  {selectedProject.liveLink && (
                    <motion.a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> View Live Site
                    </motion.a>
                  )}
                  {selectedProject.githubLink && (
                    <motion.a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}