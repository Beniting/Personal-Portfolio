import { motion } from "framer-motion";
import { FaCertificate, FaCheckCircle } from "react-icons/fa";

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issueDate: "January 2024"
  },
  {
    id: 2,
    name: "Oracle Certified Associate Java Programmer",
    issuer: "Oracle University",
    issueDate: "June 2023"
  },
  {
    id: 3,
    name: "React – The Complete Guide",
    issuer: "Udemy",
    issueDate: "July 2023"
  }
];

export default function Certifications() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certifications" className="section certifications-section-minimal">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 section-title"
        >
          Certifications
        </motion.h2>

        <div className="certifications-minimal">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-item-minimal"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                boxShadow: "0 15px 40px rgba(56, 189, 248, 0.2)",
                y: -3
              }}
            >
              <div className="cert-icon-minimal">
                <FaCertificate size={24} />
              </div>

              <div className="cert-content">
                <h4 className="cert-name-minimal">{cert.name}</h4>
                <p className="cert-issuer-minimal">{cert.issuer}</p>
                <p className="cert-date-minimal">
                  <FaCheckCircle size={12} className="me-2" />
                  {cert.issueDate}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
