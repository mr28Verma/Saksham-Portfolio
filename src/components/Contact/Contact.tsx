import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./Contact.css";
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle,
} from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
        type: "",
        message: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            setStatus({
                type: "error",
                message: "Contact form is not configured. Please try again later.",
            });
            console.error("VITE_WEB3FORMS_ACCESS_KEY is missing!");
            return;
        }

        setIsSending(true);
        setStatus({ type: "", message: "" });

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", accessKey);
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("subject", formData.subject);
        formDataToSend.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend,
            });

            const data = await response.json();

            if (data.success) {
                setStatus({
                    type: "success",
                    message: "Message sent successfully! I'll get back to you soon.",
                });

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                console.error("Web3Forms error:", data);
                setStatus({
                    type: "error",
                    message: "Failed to send message. Please try again.",
                });
            }
        } catch (error) {
            console.error("Something went wrong:", error);
            setStatus({
                type: "error",
                message: "Something went wrong. Please try again later.",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <span className="contact-subtitle">LET'S CONNECT</span>
                    <h2 className="contact-title">Contact Me</h2>
                    <p className="contact-description">
                        Have a project, opportunity, or just want to connect? Feel free to reach out.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info-column">
                        <h3 className="column-heading">Reach Out Directly</h3>
                        <div className="contact-cards-container">
                            <a href="mailto:2006sakshamchd@gmail.com" className="contact-card">
                                <div className="contact-icon-box"><FaEnvelope /></div>
                                <div className="contact-details">
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">2006sakshamchd@gmail.com</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/saksham-verma-9275b631b/" className="contact-card" target="_blank" rel="noopener noreferrer">
                                <div className="contact-icon-box"><FaLinkedin /></div>
                                <div className="contact-details">
                                    <span className="contact-label">LinkedIn</span>
                                    <span className="contact-value">Connect on LinkedIn</span>
                                </div>
                            </a>

                            <a href="https://github.com/mr28Verma" className="contact-card" target="_blank" rel="noopener noreferrer">
                                <div className="contact-icon-box"><FaGithub /></div>
                                <div className="contact-details">
                                    <span className="contact-label">GitHub</span>
                                    <span className="contact-value">View GitHub Profile</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-column">
                        <h3 className="column-heading">Send a Message</h3>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={isSending}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isSending}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    disabled={isSending}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Your Message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={isSending}
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-btn" disabled={isSending}>
                                <span>{isSending ? "Sending..." : "Send Message"}</span>
                                <span className={`btn-icon ${isSending ? "spinning" : ""}`}>
                                    <FaPaperPlane />
                                </span>
                            </button>

                            {/* Enhanced Feedback Status Banner */}
                            {status.message && (
                                <div
                                    aria-live="polite"
                                    className={`form-status ${status.type}`}
                                >
                                    {status.type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
                                    <span>{status.message}</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}