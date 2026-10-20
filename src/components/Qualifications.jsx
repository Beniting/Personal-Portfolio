import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaBookmark, FaTrophy, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const qualifications = [
  {
    id: 1,
    level: "Postgraduate (PG)",
    type: "Master of Business Administration (MBA)",
    field: "Artificial Intelligence (AI)",
    institution: "Amrita University",
    location: "Tamil Nadu, India",
    duration: "2025 - 2027",
    status: "Pursuing",
    description: "Pursuing MBA in Artificial Intelligence, focusing on modern AI technologies, business analytics, machine learning applications, and strategic technology management.",
    courses: [
      "Artificial Intelligence & Machine Learning",
      "Business Analytics & Data Intelligence",
      "Deep Learning & Predictive Modeling",
      "Strategic Management in AI",
      "Big Data Analytics",
      "Enterprise AI Solutions"
    ],
    achievements: [
      "Specialization in Artificial Intelligence & Management",
      "Hands-on work with AI-driven business solutions and predictive models"
    ]
  },
  {
    id: 2,
    level: "Undergraduate (UG)",
    type: "Bachelor of Engineering (B.E.)",
    field: "Computer Science & Engineering (CSE)",
    institution: "St. Xavier's Catholic College of Engineering",
    location: "Affiliated to Anna University, Tamil Nadu",
    duration: "2020 - 2024",
    cgpa: "7.89 CGPA",
    description: "Completed Bachelor of Engineering in Computer Science and Engineering with a strong foundation in core computer science, software engineering, algorithms, and full-stack web development.",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (Java)",
      "Full Stack Web Development",
      "Operating Systems & Computer Networks",
      "Software Engineering & Agile Practices"
    ],
    achievements: [
      "Graduated with 7.89 CGPA",
      "Developed robust academic and practical engineering projects"
    ]
  }
];

export default function Qualifications() {
  const [expandedIds, setExpandedIds] = useState([1]);

  const toggleQualification = (id) => {
    const isExpanding = !expandedIds.includes(id);

    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );

    if (isExpanding) {
      setTimeout(() => {
        const element = document.getElementById(`qualification-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 100);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="qualifications" className="section qualifications-section-minimal">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 section-title"
        >
          Qualifications
        </motion.h2>

        <div className="qualifications-accordion">
          {qualifications.map((qualification, index) => {
            const isExpanded = expandedIds.includes(qualification.id);
            return (
              <motion.div
                key={qualification.id}
                id={`qualification-${qualification.id}`}
                className="qualification-accordion-item"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  className="accordion-header"
                  onClick={() => toggleQualification(qualification.id)}
                  whileHover={{ boxShadow: "0 10px 30px rgba(56, 189, 248, 0.15)" }}
                >
                  <div className="header-content">
                    <div className="header-icon">
                      <FaGraduationCap size={24} />
                    </div>
                    <div className="header-text">
                      <h4 className="qual-level">{qualification.level}</h4>
                      <p className="qual-type">{qualification.type}</p>
                      <p className="qual-institution-acc">{qualification.institution}</p>
                    </div>
                  </div>
                  <motion.div
                    className="chevron-icon"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown size={18} />
                  </motion.div>
                </motion.button>

                <motion.div
                  className="accordion-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    height: isExpanded ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                <div className="content-inner">
                  {qualification.field && (
                    <p className="qual-field-acc">{qualification.field}</p>
                  )}

                  <div className="qual-location-acc">
                    <p>{qualification.location}</p>
                  </div>

                  <div className="qual-meta-acc">
                    <span>
                      <FaCalendarAlt size={13} /> {qualification.duration}
                    </span>
                    <span className="qual-score-acc">
                      {qualification.cgpa || qualification.percentage || qualification.status}
                    </span>
                  </div>

                  <p className="qual-description-acc">{qualification.description}</p>

                  {qualification.courses && (
                    <div className="qual-courses-acc">
                      <h6 className="courses-title-acc">
                        <FaBookmark size={13} className="me-2" />
                        Relevant Coursework
                      </h6>
                      <div className="courses-list-acc">
                        {qualification.courses.map((course, idx) => (
                          <motion.span 
                            key={idx} 
                            className="course-tag-acc"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {qualification.grades && (
                    <div className="qual-grades-acc">
                      <h6 className="grades-title-acc">Subject Grades</h6>
                      <div className="grades-list-acc">
                        {qualification.grades.map((grade, idx) => (
                          <div key={idx} className="grade-item">
                            {grade}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {qualification.achievements && (
                    <div className="qual-achievements-acc">
                      <h6 className="achievements-title-acc">
                        <FaTrophy size={13} className="me-2" />
                        Achievements
                      </h6>
                      <ul className="achievements-list-acc">
                        {qualification.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
