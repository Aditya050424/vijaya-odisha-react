
import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";

const A = "/assets/images/";

const objectives = [
    {
        number: "01",
        icon: "✳",
        title: "Education",
        main: "Promoting access to education and learning opportunities for communities.",
        extra: "Education helps create opportunities for learning, confidence, personal growth and a better future for individuals and families.",
        phrase: "KNOWLEDGE CREATES OPPORTUNITY",
    },
    {
        number: "02",
        icon: "◎",
        title: "Rehabilitation",
        main: "Supporting individuals in rebuilding their lives with dignity and confidence.",
        extra: "Rehabilitation focuses on helping individuals regain confidence, strengthen their abilities and move towards greater independence.",
        phrase: "DIGNITY AND INDEPENDENCE",
    },
    {
        number: "03",
        icon: "✧",
        title: "Empowerment",
        main: "Creating opportunities for women and children to become independent.",
        extra: "Empowerment encourages people to build skills, confidence and the ability to make positive decisions for themselves and their families.",
        phrase: "CONFIDENCE TO MOVE FORWARD",
    },
    {
        number: "04",
        icon: "⌘",
        title: "Community Development",
        main: "Supporting stronger communities through sustainable social initiatives.",
        extra: "Community development encourages cooperation, participation and sustainable initiatives that can create positive long-term change.",
        phrase: "STRONGER COMMUNITIES TOGETHER",
    },
];

/* =========================================
   REVEAL ANIMATION
========================================= */

function ObjectivesReveal({ children, className = "" }) {
    return (
        <div className={`objectives-reveal ${className}`}>
            {children}
        </div>
    );
}

/* =========================================
   FOOTER
========================================= */

function ObjectivesFooter() {
    return (
        <footer className="objectives-footer">

            <div className="objectives-container objectives-footer-grid">

                <div className="objectives-footer-intro">

                    <a href="/" className="objectives-brand objectives-footer-brand">
                        <img
                            src={`${A}vijay-odisha-logo.jpg`}
                            alt="Vijaya Odisha Logo"
                        />

                        <span>
                            <strong>VIJAYA</strong>
                            <small>ODISHA</small>
                        </span>
                    </a>

                    <p>
                        A front ranking NGO in Odisha working towards
                        the welfare, rehabilitation and education of
                        women and children.
                    </p>

                    <span className="objectives-footer-note">
                        Working with purpose since 1996.
                    </span>

                </div>

                <div>
                    <h3>Discover</h3>
                    <a href="/about-us.html">About Us</a>
                    <a href="/objectives.html">Objectives</a>
                    <a href="/activities.html">Activities</a>
                    <a href="/strength.html">Strength</a>
                </div>

                <div>
                    <h3>Explore</h3>
                    <a href="/projects.html">Projects</a>
                    <a href="/photo-gallery.html">Gallery</a>
                    <a href="/news.html">News</a>
                    <a href="/donate.html">Donate</a>
                </div>

                <div>
                    <h3>Contact</h3>
                    <p>Bhubaneswar, Odisha</p>
                    <p>Serving communities since 1996</p>
                    <a href="/contact.html" className="objectives-footer-link">
                        Get in touch ↗
                    </a>
                </div>

            </div>

            <div className="objectives-footer-bottom">
                <div className="objectives-container">
                    <span>© 2026 Vijaya Odisha. All rights reserved.</span>
                    <a href="#objectives-top">Back to top ↑</a>
                </div>
            </div>

        </footer>
    );
}

/* =========================================
   MAIN OBJECTIVES PAGE
========================================= */

export default function Objectives() {

    const [expandedCard, setExpandedCard] = useState(null);

    useEffect(() => {
        document.title = "Objectives | Vijaya Odisha";

        const elements = document.querySelectorAll(".objectives-reveal");

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => {
                element.classList.add("visible");
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="objectives-page" id="objectives-top">

            {/* SHARED HOME PAGE NAVIGATION */}
            <SiteHeader activePage="Objectives" tagline="Serving since 1996" />

            <main>

                {/* =====================================
                    HERO
                ===================================== */}

                <section className="objectives-hero">

                    <div className="objectives-container objectives-hero-grid">

                        <div className="objectives-hero-content">

                            <div className="objectives-breadcrumb">
                                <a href="/">Home</a>
                                <span>/</span>
                                <span>Objectives</span>
                            </div>

                            <span className="objectives-eyebrow">
                                WHAT WE AIM TO ACHIEVE
                            </span>

                            <h1>
                                Creating meaningful
                                <br />
                                <em>change.</em>
                            </h1>

                            <p>
                                Our objectives focus on improving the lives
                                of women, children and communities through
                                education, rehabilitation and empowerment.
                            </p>

                            <a
                                href="#objective-cards"
                                className="objectives-hero-link"
                            >
                                Explore our objectives <span>↓</span>
                            </a>

                            <div className="objectives-hero-bottom">
                                <span>EDUCATION · REHABILITATION · EMPOWERMENT</span>
                                <span>OUR PURPOSE</span>
                            </div>

                        </div>

                        <div className="objectives-hero-visual">

                            <div className="objectives-hero-image">
                                <img
                                    src={`${A}IMG20250130122215-1024x576.jpg`}
                                    alt="Vijaya Odisha community activity"
                                />

                                <div className="objectives-hero-image-caption">
                                    <span>OUR PURPOSE · OUR COMMUNITY</span>
                                    <strong>Creating opportunities for change.</strong>
                                </div>
                            </div>

                            <div className="objectives-hero-card">
                                <span>OUR FOCUS</span>
                                <strong>04</strong>
                                <small>Core objectives</small>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================
                    INTRODUCTION
                ===================================== */}

                <section className="objectives-intro">

                    <div className="objectives-container objectives-intro-grid">

                        <ObjectivesReveal className="objectives-intro-heading">

                            <span className="objectives-eyebrow">
                                WHAT WE AIM TO ACHIEVE
                            </span>

                            <h2>
                                Building opportunities for
                                <br />
                                <em>positive change.</em>
                            </h2>

                        </ObjectivesReveal>

                        <ObjectivesReveal className="objectives-intro-text">

                            <p>
                                Vijaya Odisha works towards creating
                                opportunities that improve the lives of
                                individuals, families and communities.
                            </p>

                            <span>
                                OUR PURPOSE IS PEOPLE-CENTRED DEVELOPMENT
                            </span>

                        </ObjectivesReveal>

                    </div>

                </section>


                {/* =====================================
                    OBJECTIVE CARDS
                ===================================== */}

                <section
                    className="objectives-cards-section"
                    id="objective-cards"
                >

                    <div className="objectives-container">

                        <ObjectivesReveal className="objectives-section-heading">

                            <div>
                                <span className="objectives-eyebrow">
                                    OUR KEY OBJECTIVES
                                </span>

                                <h2>
                                    Areas where we
                                    <br />
                                    <em>create impact.</em>
                                </h2>
                            </div>

                            <p>
                                Explore the four areas that guide
                                our commitment to individuals and
                                communities.
                            </p>

                        </ObjectivesReveal>


                        <div className="objectives-card-grid">

                            {objectives.map((item, index) => {
                                const isExpanded = expandedCard === index;

                                return (
                                    <ObjectivesReveal
                                        className="objectives-card-wrap"
                                        key={item.number}
                                    >
                                        <article
                                            className={`objectives-card ${isExpanded ? "expanded" : ""}`}
                                        >

                                            <div className="objectives-card-top">
                                                <span>{item.number}</span>

                                                <span className="objectives-card-symbol">
                                                    {item.icon}
                                                </span>
                                            </div>

                                            <div className="objectives-card-icon">
                                                {item.icon}
                                            </div>

                                            <h3>{item.title}</h3>

                                            <p className="objectives-card-main">
                                                {item.main}
                                            </p>

                                            <div
                                                className={`objectives-card-extra ${isExpanded ? "show" : ""}`}
                                                aria-hidden={!isExpanded}
                                            >
                                                <p>{item.extra}</p>
                                            </div>

                                            <div className="objectives-card-bottom">

                                                <span>{item.phrase}</span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setExpandedCard(
                                                            isExpanded ? null : index
                                                        )
                                                    }
                                                    aria-expanded={isExpanded}
                                                    aria-label={`${isExpanded ? "Collapse" : "Read more about"} ${item.title}`}
                                                >
                                                    {isExpanded ? "−" : "+"}
                                                </button>

                                            </div>

                                        </article>
                                    </ObjectivesReveal>
                                );
                            })}

                        </div>

                        <p className="objectives-card-hint">
                            Select any objective to discover more.
                        </p>

                    </div>

                </section>


                {/* =====================================
                    OUR APPROACH
                ===================================== */}

                <section className="objectives-approach">

                    <div className="objectives-container objectives-approach-grid">

                        <ObjectivesReveal className="objectives-approach-image">

                            <img
                                src={`${A}IMG_20241203_121532.jpg`}
                                alt="Vijaya Odisha community activity"
                            />

                            <div className="objectives-approach-image-label">
                                <span>PEOPLE FIRST</span>
                                <strong>Community always.</strong>
                            </div>

                        </ObjectivesReveal>


                        <ObjectivesReveal className="objectives-approach-content">

                            <span className="objectives-eyebrow">
                                OUR APPROACH
                            </span>

                            <h2>
                                Creating change
                                <br />
                                <em>together.</em>
                            </h2>

                            <p>
                                Our objectives guide the work we undertake
                                with communities. We believe that meaningful
                                change becomes possible when people are given
                                opportunities, support and the confidence
                                to participate.
                            </p>

                            <p>
                                Through education, rehabilitation,
                                empowerment and community development,
                                we aim to encourage stronger and more
                                inclusive communities.
                            </p>

                            <div className="objectives-approach-points">

                                <div>
                                    <span>01</span>
                                    <strong>Education</strong>
                                    <small>Creating access to learning opportunities.</small>
                                </div>

                                <div>
                                    <span>02</span>
                                    <strong>Empowerment</strong>
                                    <small>Encouraging independence and confidence.</small>
                                </div>

                                <div>
                                    <span>03</span>
                                    <strong>Community</strong>
                                    <small>Supporting stronger communities.</small>
                                </div>

                            </div>

                            <a
                                href="/activities.html"
                                className="objectives-approach-link"
                            >
                                Explore our activities <span>→</span>
                            </a>

                        </ObjectivesReveal>

                    </div>

                </section>


                {/* =====================================
                    CALL TO ACTION
                ===================================== */}

                <section className="objectives-cta">

                    <div className="objectives-container objectives-cta-inner">

                        <div>

                            <span className="objectives-eyebrow light">
                                BE PART OF THE CHANGE
                            </span>

                            <h2>
                                Together, we can make
                                <br />
                                <em>a difference.</em>
                            </h2>

                            <p>
                                Your support can help create more
                                opportunities for individuals and
                                communities.
                            </p>

                        </div>

                        <div className="objectives-cta-buttons">

                            <a href="/donate.html" className="objectives-cta-primary">
                                Support Our Work <span>↗</span>
                            </a>

                            <a href="/contact.html" className="objectives-cta-secondary">
                                Contact Us <span>→</span>
                            </a>

                        </div>

                    </div>

                </section>

            </main>

            <ObjectivesFooter />

        </div>
    );
}
