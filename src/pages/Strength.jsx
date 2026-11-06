
import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";

// GitHub Pages base path
const BASE = import.meta.env.BASE_URL;
const A = `${BASE}assets/images/`;
const page = (path = "") => `${BASE}${path}`;

const strengths = [
    {
        number: "01",
        title: "Experienced Resource Personnel",
        category: "People",
        icon: "◎",
        description:
            "We have a panel of eminent and experienced Resource personnel belonging to various areas of specialization who are constantly with us in all our training & survey programme.",
        detail:
            "A panel of experienced resource personnel supports training and survey programmes across different areas of specialization.",
    },
    {
        number: "02",
        title: "Permanent Infrastructure",
        category: "Infrastructure",
        icon: "⌂",
        description:
            "We have permanent infrastructure in the form of training Halls, Black & White Board, Over head Projects, TV, VCD etc and required furniture and fixtures.",
        detail:
            "Our infrastructure includes training halls, boards, overhead projectors, TV, VCD equipment, furniture and fixtures.",
    },
    {
        number: "03",
        title: "Transport Facility",
        category: "Mobility",
        icon: "↗",
        description:
            "We have a 10 seated vehicle with us with a permanent driver.",
        detail:
            "A 10-seater vehicle with a permanent driver supports organisational mobility.",
    },
    {
        number: "04",
        title: "Communication Facilities",
        category: "Connectivity",
        icon: "⌁",
        description:
            "We have telephone and internet connection, fax and other accessories.",
        detail:
            "Telephone, internet connection, fax and other accessories support communication.",
    },
    {
        number: "05",
        title: "Experience & Expertise",
        category: "Experience",
        icon: "✳",
        description:
            "We have long experience and expertise in conducting various surveys and training programme, relief and rehabilitation programme.",
        detail:
            "Our experience includes surveys, training programmes, relief and rehabilitation programmes.",
    },
    {
        number: "06",
        title: "Wide Networking",
        category: "Network",
        icon: "◇",
        description:
            "We have wide networking with sisterly organizations all over the state and outside.",
        detail:
            "Our network includes sisterly organisations across Odisha and beyond.",
    },
];

/* =========================================
   FOOTER
========================================= */

function StrengthFooter() {
    return (
        <footer className="strength-footer">
            <div className="strength-container strength-footer-grid">

                <div className="strength-footer-about">
                    <a href={page()}>
                        <img
                            src={`${A}vijay-odisha-logo.jpg`}
                            alt="Vijaya Odisha"
                        />
                    </a>

                    <p>
                        A front ranking NGO in Odisha working towards the
                        welfare, rehabilitation and education of women and
                        children.
                    </p>

                    <span>Working with purpose since 1996.</span>
                </div>

                <div>
                    <h3>Discover</h3>
                    <a href={page("about-us.html")}>About Us</a>
                    <a href={page("objectives.html")}>Objectives</a>
                    <a href={page("activities.html")}>Activities</a>
                    <a href={page("strength.html")}>Strength</a>
                </div>

                <div>
                    <h3>Explore</h3>
                    <a href={page("projects.html")}>Projects</a>
                    <a href={page("photo-gallery.html")}>Gallery</a>
                    <a href={page("news.html")}>News</a>
                    <a href={page("donate.html")}>Donate</a>
                </div>

                <div>
                    <h3>Contact</h3>
                    <p>Bhubaneswar, Odisha</p>
                    <p>Serving communities since 1996</p>
                    <a href={page("contact.html")}>Get in touch ↗</a>
                </div>

            </div>

            <div className="strength-footer-bottom">
                <div className="strength-container">
                    <span>© 2026 Vijaya Odisha. All rights reserved.</span>
                    <a href="#strength-top">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

/* =========================================
   MAIN STRENGTH PAGE
========================================= */

export default function Strength() {
    const [expanded, setExpanded] = useState("01");

    useEffect(() => {
        document.title = "Our Strength | Vijaya Odisha";
    }, []);

    const selectedStrength =
        strengths.find((item) => item.number === expanded) ||
        strengths[0];

    return (
        <div className="strength-page" id="strength-top">

            {/* SHARED HEADER */}
            <SiteHeader activePage="Strength" />

            <main>

                {/* HERO */}
                <section className="strength-hero">
                    <div className="strength-container strength-hero-grid">

                        <div className="strength-hero-copy">
                            <span className="strength-eyebrow">
                                THE FOUNDATION OF OUR WORK
                            </span>

                            <div className="strength-breadcrumb">
                                <a href={page()}>Home</a>
                                <span>/</span>
                                <span>Strength</span>
                            </div>

                            <h1>
                                Stronger
                                <br />
                                <em>together.</em>
                            </h1>

                            <p>
                                Experienced people, dependable resources and a wide
                                network form the foundation that supports the work
                                of Vijaya Odisha.
                            </p>

                            <a
                                href="#strength-resources"
                                className="strength-hero-link"
                            >
                                Discover our strengths <span>↓</span>
                            </a>

                            <div className="strength-hero-foot">
                                <span>PEOPLE · RESOURCES · EXPERIENCE</span>
                                <span>EST. 1996</span>
                            </div>
                        </div>

                        <div className="strength-hero-visual">

                            <div className="strength-hero-photo">
                                <img
                                    src={`${A}20190811_121222.jpg`}
                                    alt="Vijaya Odisha community work"
                                />
                            </div>

                            {/* RESOURCE STRENGTH OVERLAY */}
                            <div className="strength-hero-overlay">
                                <span className="strength-overlay-label">
                                    <i />
                                    OUR RESOURCE STRENGTH
                                </span>

                                <strong>
                                    Built on people.
                                    <br />
                                    Supported by resources.
                                </strong>

                                <span className="strength-overlay-bottom">
                                    PEOPLE · PURPOSE · PROGRESS
                                </span>
                            </div>

                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="strength-intro">
                    <div className="strength-container strength-intro-grid">

                        <div>
                            <span className="strength-eyebrow">
                                OUR STRENGTH
                            </span>

                            <h2>
                                Resources that
                                <br />
                                <em>support our work.</em>
                            </h2>
                        </div>

                        <p>
                            VIJAYA's work is supported by experienced personnel,
                            infrastructure, transportation, communication
                            facilities and a strong network of organizations.
                        </p>

                    </div>
                </section>

                {/* INTERACTIVE STRENGTH EXPLORER */}
                <section
                    className="strength-explorer"
                    id="strength-resources"
                >
                    <div className="strength-container">

                        <div className="strength-explorer-heading">
                            <div>
                                <span className="strength-eyebrow">
                                    THE FOUNDATION OF VIJAYA
                                </span>

                                <h2>
                                    What makes us
                                    <br />
                                    <em>stronger.</em>
                                </h2>
                            </div>

                            <p>
                                Behind every initiative is a foundation of people,
                                experience and resources that makes our work
                                possible. Explore the six elements that support us.
                            </p>
                        </div>

                        <div className="strength-explorer-layout">

                            {/* LEFT NAVIGATION */}
                            <div className="strength-explorer-list">
                                {strengths.map((item) => (
                                    <button
                                        key={item.number}
                                        className={`strength-explorer-item ${expanded === item.number
                                                ? "selected"
                                                : ""
                                            }`}
                                        onClick={() => setExpanded(item.number)}
                                        aria-pressed={expanded === item.number}
                                    >
                                        <span className="strength-explorer-index">
                                            {item.number}
                                        </span>

                                        <span className="strength-explorer-name">
                                            {item.title}
                                            <small>{item.category}</small>
                                        </span>

                                        <span className="strength-explorer-arrow">
                                            ↗
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* RIGHT DYNAMIC PANEL */}
                            <div
                                className="strength-explorer-display"
                                aria-live="polite"
                            >
                                <div
                                    className="strength-explorer-content"
                                    key={selectedStrength.number}
                                >
                                    <div className="strength-display-top">
                                        <span>
                                            VIJAYA ODISHA / OUR STRENGTH
                                        </span>
                                        <span>
                                            {selectedStrength.number} — 06
                                        </span>
                                    </div>

                                    <div className="strength-display-symbol">
                                        {selectedStrength.icon}
                                    </div>

                                    <span className="strength-display-category">
                                        {selectedStrength.category}
                                    </span>

                                    <h3>{selectedStrength.title}</h3>

                                    <p>{selectedStrength.description}</p>

                                    <div className="strength-display-detail">
                                        {selectedStrength.detail}
                                    </div>

                                    <div className="strength-display-bottom">
                                        <span>
                                            PEOPLE · PURPOSE · PROGRESS
                                        </span>
                                        <span>1996 — PRESENT</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SATISFACTION */}
                <section className="strength-satisfaction">
                    <div className="strength-container strength-satisfaction-grid">

                        <div className="strength-satisfaction-side">
                            <span className="strength-eyebrow">
                                OUR SATISFACTION
                            </span>

                            <span className="strength-satisfaction-mark">
                                VO.
                            </span>

                            <span className="strength-satisfaction-caption">
                                A JOURNEY OF CONTINUED WORK
                            </span>
                        </div>

                        <div className="strength-satisfaction-content">
                            <h2>
                                A journey shaped
                                <br />
                                by <em>experience.</em>
                            </h2>

                            <p>
                                On the backdrop of last few years of its operation,
                                VIJAYA has today occupied a unique position in the
                                matrix of state’s health and socio-economic
                                empowerment programmes.
                            </p>

                            <p>
                                From capacity building of communities especially
                                underprivileged, unreached and marginalized ones to
                                consultancy, policy advocacy, reforms and health
                                networking, VIJAYA has emerged out as a winning team.
                            </p>

                            <p>
                                With a vision of social equity, sustainable
                                development goal, common hood and empathy towards
                                each other, VIJAYA has marched ahead in its
                                victorious journey against social discrimination,
                                gender bias, ill health, illiteracy and disability
                                and poverty.
                            </p>

                            <a href={page("activities.html")}>
                                Explore our activities <span>↗</span>
                            </a>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="strength-cta">
                    <div className="strength-container strength-cta-inner">

                        <div>
                            <span className="strength-eyebrow">
                                SUPPORT OUR WORK
                            </span>

                            <h2>
                                Stronger communities
                                <br />
                                begin <em>together.</em>
                            </h2>

                            <p>
                                Be part of the continuing journey of Vijaya Odisha.
                            </p>
                        </div>

                        <div className="strength-cta-actions">
                            <a href={page("donate.html")}>Support Vijaya ↗</a>
                            <a href={page("contact.html")}>Get in touch</a>
                        </div>

                    </div>
                </section>

            </main>

            <StrengthFooter />
        </div>
    );
}
