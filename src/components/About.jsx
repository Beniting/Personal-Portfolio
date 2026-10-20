import { motion } from "framer-motion";
import { 
  FaJava, FaReact, FaDatabase, FaGitAlt, FaCss3Alt, FaHtml5,
  FaNode, FaGithub, FaAws, FaDocker, FaLinux, FaCode 
} from "react-icons/fa";

const skills = [
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Node.js", icon: FaNode, color: "#68a063" },
  { name: "Spring Boot", icon: FaJava, color: "#6db33f" },
  { name: "SQL", icon: FaDatabase, color: "#0066cc" },
  { name: "MongoDB", icon: FaDatabase, color: "#00ed64" },
  { name: "Git", icon: FaGitAlt, color: "#f1502f" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  // { name: "Docker", icon: FaDocker, color: "#2496ed" },
  { name: "AWS", icon: FaAws, color: "#ff9900" },
  // { name: "Linux", icon: FaLinux, color: "#fcc624" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
  { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
  // { name: "DevOps", icon: FaCode, color: "#ff6b6b" }, 
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      id="about"
      className="section about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5 section-title"
        >
          About Me
        </motion.h2>

        <div className="row align-items-center">
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="lead mb-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              I'm a passionate Full Stack Developer with a strong foundation in Java, React, and Spring Boot. 
              I love building scalable applications that solve real-world problems and provide excellent user experiences.
            </motion.p>
            <motion.p 
              className="mb-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              With 2+ years of experience in full-stack development, I've worked on diverse projects ranging from 
              admin dashboards to customer-facing applications. I'm always eager to learn new technologies and best practices 
              in web development.
            </motion.p>
            <motion.p 
              className="mb-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              When I'm not coding, you'll find me exploring new tech trends, contributing to open-source projects, 
              or enjoying a good cup of coffee 
            </motion.p>
          </motion.div>

          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-4">My Skills</h3>
            <motion.div
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="skill-card"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -15,
                      boxShadow: "0 15px 30px rgba(56, 189, 248, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={40} color={skill.color} className="mb-2" />
                    </motion.div>
                    <p>{skill.name}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}