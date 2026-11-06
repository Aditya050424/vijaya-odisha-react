
import { useEffect } from "react";
import SiteHeader from "../components/SiteHeader";

const A = `${import.meta.env.BASE_URL}assets/images/`;

/* =========================================
   REVEAL ANIMATION COMPONENT
========================================= */

function AboutReveal({ children, className = "" }) {
    return (
        <div className={`about-reveal ${className}`}>
            {children}
        </div>
    );
}

/* =========================================
   FOOTER
========================================= */

function AboutFooter() {
    return (
        <footer className="about-footer">
            <div className="about-container about-footer-grid">

                <div className="about-footer-intro">
                    <a href="/" className="about-brand about-footer-brand">
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
                        A front ranking NGO in Odisha working towards the
                        welfare, rehabilitation and education of women and children.
                    </p>

                    <span className="about-footer-note">
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

                    <a href="/contact.html" className="about-footer-link">
                        Get in touch ↗
                    </a>
                </div>

            </div>

            <div className="about-footer-bottom">
                <div className="about-container">
                    <span>© 2026 Vijaya Odisha. All rights reserved.</span>
                    <a href="#about-top">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

/* =========================================
   MAIN ABOUT PAGE
========================================= */

export default function About() {

    useEffect(() => {
        document.title = "About Us | Vijaya Odisha";

        const elements = document.querySelectorAll(".about-reveal");

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

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="about-page" id="about-top">

            {/* SHARED HEADER — SAME AS HOME PAGE */}

            <SiteHeader activePage="About Us" />

            <main>

                {/* =====================================
                    PAGE HERO
                ===================================== */}

                <section className="about-hero">
                    <div className="about-container about-hero-grid">

                        {/* HERO CONTENT */}

                        <div className="about-hero-content">

                            <div className="about-breadcrumb">
                                <a href="/">Home</a>
                                <span>/</span>
                                <span>About Us</span>
                            </div>

                            <span className="about-eyebrow">
                                GET TO KNOW VIJAYA ODISHA
                            </span>

                            <h1 className="about-hero-heading">
                                A journey built on
                                <br />
                                <em className="about-hero-heading-accent">
                                    purpose and people.
                                </em>
                            </h1>

                            <p>
                                Understanding who we are, what we stand for and
                                why we continue working towards a better tomorrow.
                            </p>

                            {/* SAME-PAGE SMOOTH SCROLL LINK */}

                            <a
                                href="#about-introduction"
                                className="about-hero-link"
                                onClick={(event) => {
                                    event.preventDefault();

                                    const introductionSection =
                                        document.getElementById("about-introduction");

                                    if (introductionSection) {
                                        introductionSection.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }
                                }}
                            >
                                Discover our story <span>↓</span>
                            </a>

                            <div className="about-hero-bottom">
                                <span>
                                    OUR STORY · OUR VALUES · OUR COMMITMENT
                                </span>

                                <span>ESTABLISHED 1996</span>
                            </div>

                        </div>

                        {/* HERO IMAGE */}

                        <div className="about-hero-visual">

                            <div className="about-hero-photo about-hero-photo-main">
                                <img
                                    src={`${A}IMG-20231203-WA0049.jpg`}
                                    alt="Vijaya Odisha community development programme"
                                />

                                <div className="about-hero-photo-caption">
                                    <span>
                                        VIJAYA ODISHA · OUR COMMUNITY
                                    </span>

                                    <strong>
                                        Making a difference, together.
                                    </strong>
                                </div>
                            </div>

                            {/* 1996 CARD */}

                            <div className="about-hero-year-card">
                                <strong>1996</strong>

                                <span>
                                    A continuing journey
                                    <br />
                                    of service
                                </span>
                            </div>

                        </div>

                    </div>
                </section>

                {/* =====================================
                    ORGANISATION INTRODUCTION
                ===================================== */}

                <section
                    className="about-introduction"
                    id="about-introduction"
                >
                    <div className="about-container about-intro-grid">

                        {/* INTRODUCTION IMAGE */}

                        <AboutReveal className="about-visual">

                            <div className="about-image-frame">
                                <img
                                    src={`${A}20190811_121222.jpg`}
                                    alt="Vijaya Odisha community activity"
                                />
                            </div>

                            <div className="about-year-card">
                                <strong>1996</strong>
                                <span>
                                    Our journey
                                    <br />
                                    of service
                                </span>
                            </div>

                            <span className="about-image-caption">
                                VIJAYA ODISHA · BHUBANESWAR
                            </span>

                        </AboutReveal>

                        {/* INTRODUCTION CONTENT */}

                        <AboutReveal className="about-intro-content">

                            <span className="about-eyebrow">
                                WHO WE ARE
                            </span>

                            <h2>
                                Working for a
                                <br />
                                <em>better tomorrow.</em>
                            </h2>

                            <p>
                                <strong>VIJAYA</strong> is a front ranking NGO
                                in the state which was formally registered
                                under the Societies Registration Act, 1860
                                on 14th October 1996 bearing Registration
                                No. "20154/118-1996-97".
                            </p>

                            <p>
                                The Registered office of the organization
                                is located at 417, Sahid Nagar, Bhubaneswar.
                                The organization was registered under
                                Foreign Contribution (Registration Act)
                                1976 on 14th July, 2000 and also registered
                                under U/S 80 G (5) & U/S 12 AA of Income
                                Tax Act 1961.
                            </p>

                            {/* ORGANISATION FACTS */}

                            <div className="about-facts">

                                <div>
                                    <strong>1996</strong>
                                    <span>Year established</span>
                                </div>

                                <div>
                                    <strong>Odisha</strong>
                                    <span>Our geographical focus</span>
                                </div>

                                <div>
                                    <strong>417</strong>
                                    <span>Sahid Nagar, Bhubaneswar</span>
                                </div>

                            </div>

                        </AboutReveal>

                    </div>
                </section>

                {/* =====================================
                    VISION AND MISSION
                ===================================== */}

                <section className="about-direction">
                    <div className="about-container">

                        <AboutReveal className="about-direction-heading">

                            <span className="about-eyebrow">
                                OUR DIRECTION
                            </span>

                            <h2>
                                Guided by a shared
                                <br />
                                <em>vision and mission.</em>
                            </h2>

                            <p>
                                Guided by our values, we work towards creating
                                a more inclusive, empowered and sustainable society.
                            </p>

                        </AboutReveal>

                        <div className="about-direction-grid">

                            {/* VISION CARD */}

                            <AboutReveal className="about-direction-card">

                                <div className="about-direction-top">
                                    <span>01 / OUR VISION</span>
                                    <span className="about-direction-symbol">
                                        ◎
                                    </span>
                                </div>

                                <div className="about-direction-icon">
                                    ◉
                                </div>

                                <h3>Our Vision</h3>

                                <p>
                                    <strong>VIJAYA</strong> aspires a just society,
                                    where people irrespective of cast & creed,
                                    rich & poor, powerful & powerless, male &
                                    female live at par with each other following
                                    the values of sustainable development, global
                                    common hood and empathy towards each others.
                                </p>

                                <div className="about-direction-footer">
                                    <span>A JUST SOCIETY</span>
                                    <span>↗</span>
                                </div>

                            </AboutReveal>

                            {/* MISSION CARD */}

                            <AboutReveal className="about-direction-card mission">

                                <div className="about-direction-top">
                                    <span>02 / OUR MISSION</span>
                                    <span className="about-direction-symbol">
                                        ✳
                                    </span>
                                </div>

                                <div className="about-direction-icon">
                                    ✦
                                </div>

                                <h3>Our Mission</h3>

                                <p>
                                    Initiate people oriented development process
                                    in which men and women of poverty groups
                                    (Backward, Tribal and Costal) shall come
                                    together to change their powerlessness
                                    situation and enhance their socio economic
                                    health and educational standard and carry on
                                    the process even after the NGO withdraws.
                                </p>

                                <div className="about-direction-footer">
                                    <span>PEOPLE-CENTRED DEVELOPMENT</span>
                                    <span>↗</span>
                                </div>

                            </AboutReveal>

                        </div>

                    </div>
                </section>

                {/* =====================================
                    OUR AREAS OF IMPACT
                ===================================== */}

                <section className="about-impact">
                    <div className="about-container">

                        <div className="about-impact-heading">

                            <span className="about-eyebrow">
                                WHERE WE FOCUS
                            </span>

                            <h2>
                                Our commitment,
                                <br />
                                <em>in action.</em>
                            </h2>

                            <p>
                                Our work is centred around people and the
                                opportunities that help communities move forward.
                            </p>

                        </div>

                        <div className="about-impact-grid">

                            {/* IMPACT CARD 1 */}

                            <div className="about-impact-card">

                                <span className="about-impact-number">
                                    01
                                </span>

                                <div className="about-impact-icon">
                                    ✳
                                </div>

                                <h3>Women & Children</h3>

                                <p>
                                    Supporting the welfare, education, rehabilitation
                                    and development of women and children.
                                </p>

                                <a href="/objectives.html">
                                    Explore our objectives <span>↗</span>
                                </a>

                            </div>

                            {/* IMPACT CARD 2 */}

                            <div className="about-impact-card">

                                <span className="about-impact-number">
                                    02
                                </span>

                                <div className="about-impact-icon">
                                    ◎
                                </div>

                                <h3>Education & Welfare</h3>

                                <p>
                                    Working towards improved educational opportunities,
                                    social welfare and rehabilitation.
                                </p>

                                <a href="/activities.html">
                                    Explore our activities <span>↗</span>
                                </a>

                            </div>

                            {/* IMPACT CARD 3 */}

                            <div className="about-impact-card">

                                <span className="about-impact-number">
                                    03
                                </span>

                                <div className="about-impact-icon">
                                    ⌘
                                </div>

                                <h3>Community Development</h3>

                                <p>
                                    Encouraging participation and collective action
                                    towards stronger and more inclusive communities.
                                </p>

                                <a href="/projects.html">
                                    Explore our projects <span>↗</span>
                                </a>

                            </div>

                        </div>

                    </div>
                </section>

                {/* =====================================
                    OUR COMMITMENT
                ===================================== */}

                <section className="about-commitment">
                    <div className="about-container about-commitment-grid">

                        <AboutReveal>

                            <span className="about-eyebrow">
                                OUR COMMITMENT
                            </span>

                            <h2>
                                Progress begins
                                <br />
                                <em>with people.</em>
                            </h2>

                            <p>
                                We believe that meaningful development is built
                                through participation, opportunity and collective
                                responsibility. Our work continues to focus on
                                the welfare, rehabilitation and education of
                                women and children.
                            </p>

                            <a
                                href="/objectives.html"
                                className="about-text-link"
                            >
                                Explore our objectives <span>→</span>
                            </a>

                        </AboutReveal>

                        {/* COMMITMENT IMAGE */}

                        <AboutReveal className="about-commitment-image">

                            <img
                                src={`${A}IMG-20231203-WA0049.jpg`}
                                alt="Vijaya Odisha community programme"
                            />

                            <div>
                                <span>
                                    PEOPLE · PURPOSE · PROGRESS
                                </span>

                                <strong>
                                    Building stronger communities.
                                </strong>
                            </div>

                        </AboutReveal>

                    </div>
                </section>

                {/* =====================================
                    CALL TO ACTION
                ===================================== */}

                <section className="about-cta">
                    <div className="about-container about-cta-inner">

                        <div>

                            <span className="about-eyebrow light">
                                BE PART OF OUR JOURNEY
                            </span>

                            <h2>
                                Together, we can make
                                <br />
                                <em>a difference.</em>
                            </h2>

                            <p>
                                Join us in supporting our continued work for
                                women, children and communities.
                            </p>

                        </div>

                        <a
                            href="/donate.html"
                            className="about-cta-button"
                        >
                            Support Vijaya <span>↗</span>
                        </a>

                    </div>
                </section>

            </main>

            {/* FOOTER */}

            <AboutFooter />

        </div>
    );
}
