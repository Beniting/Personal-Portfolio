import emailjs from 'emailjs-com'
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    function sendEmail(e) {
        e.preventDefault()
        setIsSubmitting(true);

        emailjs.sendForm(
            'service_mn0krcg',
            'template_33lwpmm',
            e.target,
            '2OFSkNi8s4BnhWv2N'
        ).then(() => {
            alert("Message sent successfully!")
            e.target.reset();
            setIsSubmitting(false);
        }, () => {
            alert("Failed to send message")
            setIsSubmitting(false);
        })
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <motion.section
            id="contact"
            className="section contact-section"
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
                    className="text-center mb-4 section-title"
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center lead mb-5 mx-auto"
                    style={{ maxWidth: '600px' }}
                >
                    Have a question or want to work together? I'd love to hear from you! 
                    Drop me a message and I'll get back to you as soon as possible.
                </motion.p>

                <div className="row">
                    <motion.div
                        className="col-lg-6 mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.form 
                            onSubmit={sendEmail} 
                            className="contact-form" 
                            variants={itemVariants}
                        >
                            <div className="mb-3">
                                <motion.input
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="form-control form-control-lg"
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </div>
                            <div className="mb-3">
                                <motion.input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    className="form-control form-control-lg"
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </div>
                            <div className="mb-3">
                                <motion.textarea
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    rows="5"
                                    className="form-control form-control-lg"
                                    whileFocus={{ scale: 1.02 }}
                                ></motion.textarea>
                            </div>
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary btn-lg w-100"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>

                <motion.div
                    className="row mt-5 pt-5 border-top border-secondary"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div
                        className="col-md-6 col-lg-3 text-center mb-4"
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaEnvelope size={30} className="mb-3 text-primary" />
                        </motion.div>
                        <h6>Email</h6>
                        <a href="mailto:benitingraj@gmail.com" className="text-decoration-none">
                            benitingraj@gmail.com
                        </a>
                    </motion.div>

                    <motion.div
                        className="col-md-6 col-lg-3 text-center mb-4"
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaPhone size={30} className="mb-3 text-primary" />
                        </motion.div>
                        <h6>Phone</h6>
                        <a href="tel:+918870736865" className="text-decoration-none">
                            +91 8870736865
                        </a>
                    </motion.div>

                    <motion.div
                        className="col-md-6 col-lg-3 text-center mb-4"
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaLinkedin size={30} className="mb-3 text-primary" />
                        </motion.div>
                        <h6>LinkedIn</h6>
                        <a href="https://www.linkedin.com/in/beniting" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            linkedin.com/in/beniting
                        </a>
                    </motion.div>

                    <motion.div
                        className="col-md-6 col-lg-3 text-center mb-4"
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaGithub size={30} className="mb-3 text-primary" />
                        </motion.div>
                        <h6>GitHub</h6>
                        <a href="https://github.com/Beniting" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            github.com/Beniting
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="text-center mt-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <p className=" small">© 2026 BENITING. All rights reserved.</p>
                </motion.div>
            </div>
        </motion.section>
    )
}