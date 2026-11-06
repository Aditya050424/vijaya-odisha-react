
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";

const BASE = import.meta.env.BASE_URL;
const A = `${BASE}assets/images/`;
const page = (path = "") => `${BASE}${path}`;

const logo = `${A}vijay-odisha-logo.jpg`;

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(
            form.subject || "Website enquiry"
        );

        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        );

        window.location.href =
            `mailto:orissavijaya@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="contact-page">

            {/* SHARED WEBSITE NAVIGATION */}
            <SiteHeader activePage="Contact" />

            <main>

                {/* EDITORIAL CONTACT HERO */}
                <section className="contact-hero">
                    <div className="contact-hero-inner">

                        <div className="contact-hero-copy">

                            <div className="contact-eyebrow">
                                <span></span>
                                <span className="contact-eyebrow-line"></span>
                                A CONVERSATION STARTS HERE
                            </div>

                            <h1>
                                Good things
                                <br />
                                begin with
                                <br />
                                <em>a conversation.</em>
                            </h1>

                            <p>
                                Have a thought, a question, or an idea for change?
                                We'd love to hear it. Tell us what's on your mind
                                and let's find a way forward together.
                            </p>

                            <a href="#contact-details" className="contact-scroll">
                                GET IN TOUCH <span>↓</span>
                            </a>

                        </div>

                        <div className="contact-hero-visual">

                            <div className="contact-hero-photo">
                                <img
                                    src={`${A}IMG20250130122215-1024x576.jpg`}
                                    alt="Vijaya Odisha community initiative"
                                />
                            </div>

                            <div className="contact-photo-caption">
                                <span>OUR WORK, OUR PEOPLE</span>
                                <p>Building stronger communities, together.</p>
                            </div>

                            <div className="contact-photo-index">
                                BHUBANESWAR <span>·</span> ODISHA
                            </div>

                        </div>

                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="contact-intro" id="contact-details">

                    <div className="contact-section-label">
                        WE’RE HERE TO LISTEN
                    </div>

                    <div className="contact-intro-grid">

                        <h2>
                            Let’s make
                            <br />
                            <span>something meaningful</span>
                            <br />
                            happen.
                        </h2>

                        <p>
                            Whether you have a question about our initiatives, want to
                            collaborate, or simply wish to know more about Vijaya Odisha,
                            we would be glad to hear from you.
                        </p>

                    </div>
                </section>

                {/* CONTACT DETAILS + FORM */}
                <section className="contact-main">

                    <div className="contact-information">

                        <div className="contact-section-label">
                            CONTACT INFORMATION
                        </div>

                        <h2>
                            We’d love to
                            <br />
                            hear from you.
                        </h2>

                        <p className="contact-info-description">
                            Reach out to us through any of the following channels.
                            Our office is located in Saheed Nagar, Bhubaneswar.
                        </p>

                        <div className="contact-info-list">

                            {/* OFFICE */}
                            <div className="contact-info-item">

                                <div className="contact-info-icon">⌖</div>

                                <div>
                                    <span>OUR OFFICE</span>

                                    <p>
                                        Plot No. 507, 3rd Floor,
                                        <br />
                                        In front of State Bank of India,
                                        <br />
                                        Saheed Nagar, Bhubaneswar,
                                        <br />
                                        Pin-751007, Dist: Khurdha, Odisha.
                                    </p>

                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Plot+No+507+Saheed+Nagar+Bhubaneswar+Odisha+751007"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View location <span>↗</span>
                                    </a>
                                </div>

                            </div>

                            {/* PHONE */}
                            <div className="contact-info-item">

                                <div className="contact-info-icon">↗</div>

                                <div>
                                    <span>PHONE</span>

                                    <a
                                        href="tel:06742549176"
                                        className="contact-info-link"
                                    >
                                        0674-2549176
                                    </a>
                                </div>

                            </div>

                            {/* EMAIL */}
                            <div className="contact-info-item">

                                <div className="contact-info-icon">@</div>

                                <div>
                                    <span>EMAIL</span>

                                    <a
                                        href="mailto:orissavijaya@gmail.com"
                                        className="contact-info-link"
                                    >
                                        orissavijaya@gmail.com
                                    </a>
                                </div>

                            </div>

                        </div>

                        <div className="contact-note">
                            <span className="contact-note-mark">“</span>

                            <p>
                                Stronger communities begin when people come together
                                with a shared purpose.
                            </p>
                        </div>

                    </div>

                    {/* CONTACT FORM */}
                    <div className="contact-form-panel">

                        <div className="contact-form-heading">
                            <span>WRITE TO US</span>

                            <h2>Send us a message.</h2>

                            <p>
                                Fill in the details below. Your email application will open
                                with your message ready to send.
                            </p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>

                            <div className="contact-form-row">

                                <label>
                                    Your name

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>
                                    Email address

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                            </div>

                            <label>
                                Subject

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="What would you like to discuss?"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <label>
                                Your message

                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Write your message here..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </label>

                            <button type="submit" className="contact-submit">
                                Prepare email <span>↗</span>
                            </button>

                            <p className="contact-form-disclaimer">

                            </p>

                        </form>

                    </div>

                </section>

                {/* CLOSING CTA */}
                <section className="contact-cta">

                    <div className="contact-cta-inner">

                        <div>
                            <span>BE PART OF THE JOURNEY</span>

                            <h2>
                                Change begins
                                <br />
                                with <em>connection.</em>
                            </h2>
                        </div>

                        <a href={page("about-us.html")}>
                            Discover our work <span>↗</span>
                        </a>

                    </div>

                </section>

            </main>

            {/* FOOTER */}
            <footer className="contact-footer">

                <div className="contact-footer-grid">

                    <div className="contact-footer-about">

                        <a href={page()}>
                            <img src={logo} alt="Vijaya Odisha" />
                        </a>

                        <p>
                            Vijaya Odisha works towards the welfare and development
                            of communities through social initiatives, education,
                            rehabilitation and empowerment.
                        </p>

                    </div>

                    <div className="contact-footer-column">

                        <h3>Explore</h3>

                        <a href={page("about-us.html")}>About Us</a>
                        <a href={page("objectives.html")}>Objectives</a>
                        <a href={page("activities.html")}>Activities</a>
                        <a href={page("projects.html")}>Projects</a>
                        <a href={page("photo-gallery.html")}>Gallery</a>

                    </div>

                    <div className="contact-footer-column">

                        <h3>Information</h3>

                        <a href={page("news.html")}>News</a>
                        <a href={page("strength.html")}>Strength</a>
                        <a href={page("contact.html")}>Contact</a>
                        <a href={page("donate.html")}>Donate</a>

                    </div>

                    <div className="contact-footer-column contact-footer-address">

                        <h3>Visit Us</h3>

                        <p>
                            Plot No. 507, 3rd Floor,
                            <br />
                            Saheed Nagar, Bhubaneswar,
                            <br />
                            Odisha - 751007.
                        </p>

                        <a href="tel:06742549176">
                            0674-2549176
                        </a>

                        <a href="mailto:orissavijaya@gmail.com">
                            orissavijaya@gmail.com
                        </a>

                    </div>

                </div>

                <div className="contact-footer-bottom">

                    <p>© 2024 VIJAYA ODISHA. All Rights Reserved.</p>

                    <a
                        href="#top"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        Back to top ↑
                    </a>

                </div>

            </footer>

        </div>
    );
}
