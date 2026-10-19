import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaBookmark, FaTrophy, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const qualifications = [
  {
    id: 1,
    level: "Postgraduate (PG)",
    type: "Master of Technology",
    field: "Computer Science (Optional - Add if applicable)",
    institution: "Pursuing / Planned",
    location: "City, State",
    duration: "2024 - 2026 (Planned)",
    status: "In Progress",
    description: "Advanced specialization in emerging technologies including AI/ML, cloud architecture, and distributed systems. Focus on industry-relevant projects and research.",
    courses: [
      "Artificial Intelligence & Machine Learning",
      "Cloud Architecture & DevOps",
      "Advanced Database Systems",
      "Cybersecurity",
      "Microservices Architecture",
      "Advanced Algorithms"
    ],
    achievements: [
      "Research Paper Publications",
      "Industry Internship",
      "Capstone Project"
    ]
  },
  {
    id: 2,
    level: "Undergraduate (UG)",
    type: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "ABC University",
    location: "City, State",
    duration: "2019 - 2023",
    cgpa: "8.2/10",
    description: "Comprehensive program covering full-stack web development, data structures, algorithms, and database management systems. Completed advanced coursework in software engineering and cloud computing.",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Development",
      "Object-Oriented Programming",
      "Software Engineering",
      "Cloud Computing"
    ],
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "Best Project Award 2023",
      "Active Member of Developer's Club"
    ]
  },
  {
    id: 3,
    level: "Schooling",
    type: "Senior Secondary (12th)",
    institution: "XYZ School of Excellence",
    location: "City, State",
    duration: "2017 - 2019",
    percentage: "92%",
    description: "Completed senior secondary education with focus on Science and Mathematics. Strong foundation in physics, chemistry, and mathematics.",
    grades: [
      "Physics: 95/100",
      "Chemistry: 90/100",
      "Mathematics: 94/100"
    ],
    achievements: [
      "State Level Science Olympiad Rank 3",
      "200+ Score in JEE Main",
      "Merit Scholarship Awardee"
    ]
  }
];

export default function Qualifications() {
  const [expandedId, setExpandedId] = useState(1);

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
          {qualifications.map((qualification, index) => (
            <motion.div
              key={qualification.id}
              className="qualification-accordion-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.button
                className="accordion-header"
                onClick={() => setExpandedId(expandedId === qualification.id ? null : qualification.id)}
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
                  animate={{ rotate: expandedId === qualification.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown size={18} />
                </motion.div>
              </motion.button>

              <motion.div
                className="accordion-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: expandedId === qualification.id ? 1 : 0,
                  height: expandedId === qualification.id ? "auto" : 0,
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
          ))}
        </div>
      </div>
    </section>
  );
}
