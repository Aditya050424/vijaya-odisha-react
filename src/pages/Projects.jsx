
import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";

// GitHub Pages base path
const BASE = import.meta.env.BASE_URL;
const A = `${BASE}assets/images/`;
const page = (path = "") => `${BASE}${path}`;

const locations = [
    {
        number: "01",
        name: "Bhubaneswar",
        short: "Head Office",
        description:
            "A centre for awareness, training, health, education and community development initiatives.",
        introduction:
            "Events and programmes conducted directly by the Head Office.",
        activities: [
            "Conducting awareness and training programmes.",
            "Undertaking health, education and community development activities.",
            "Conducting workshops, seminars and awareness programmes.",
            "Undertaking surveys and field studies.",
        ],
        subheading: "Guest House Exclusively For Women",
        additional:
            "VIJAYA provides support and facilities for women through its programmes and services.",
        theme: "bhubaneswar",
    },
    {
        number: "02",
        name: "Puri",
        short: "Swadhar Home",
        description:
            "Rehabilitation, empowerment and support for distressed women and disadvantaged people.",
        introduction: "Special activities undertaken at Swadhar Home.",
        activities: [
            "Providing rehabilitation and institutional support to distressed women.",
            "Facilitating marriages and self and wage employment.",
            "Providing vocational training and skill development.",
            "Providing support for education and rehabilitation.",
            "Supporting health care and medical needs.",
        ],
        subheading: "Swadhar Home Activities",
        additional:
            "All abled and capable inmates are currently engaged in different in-house activities like operating Omfed milk distribution booth, cereal making, temple-centric articles making, wheat and dry grinding of spices and dough, idli and dosa making, and paper conversion activities.",
        theme: "puri",
    },
    {
        number: "03",
        name: "Bhadrak",
        short: "Special Residential School",
        description:
            "A Special Residential School for Deaf, Dumb & Blind Girls.",
        introduction: "Special activities and support initiatives.",
        activities: [
            "Enabled nine disadvantaged girls to pursue higher education through college-level admissions.",
            "Helped restore better eyesight to twenty-two blind girls through minor and major operations at Rotary Eye Hospital, Cuttack, Aurobindo Eye Hospital, Pondicherry and Sankara Nethralaya, Chennai. Cornea grafting of four girls at Sankara Nethralaya, Chennai has also been undertaken.",
            "Helped empower hearing-impaired girls through intensive checkups, hearing aids and Sign Language Training.",
            "Imparted vocational training through KVIC, Government of India for self-employment.",
            "Provided sign language training in collaboration with the National Training Centre for the Teachers of Deaf at Janla.",
        ],
        subheading: "Education, Rehabilitation & Empowerment",
        additional:
            "The residential school supports girls through education, healthcare, vocational training and specialised communication support.",
        theme: "bhadrak",
    },
    {
        number: "04",
        name: "Satyabhamapur",
        short: "Women Empowerment Centre",
        description:
            "A community-based centre encouraging women's participation in development, health and empowerment programmes.",
        introduction: "Women Empowerment Centre at Satyabhamapur.",
        activities: [
            "A nodal centre with a local coordinator has been established.",
            "250 women from a cluster of 9 villages have registered with the centre.",
            "Registered members have expressed their readiness and willingness to participate in development, health, empowerment and awareness programmes.",
            "More than 120 women have already been trained in collaboration with KVIC, Government of India.",
        ],
        subheading: "Building Local Participation",
        additional:
            "The centre encourages women to participate actively in development, health, empowerment and awareness initiatives.",
        theme: "satyabhamapur",
    },
];

/* =========================================
   FOOTER
========================================= */

function ProjectsFooter() {
    return (
        <footer className="projects-footer">
            <div className="projects-container projects-footer-grid">

                <div className="projects-footer-about">
                    <a href={page()}>
                        <img
                            src={`${A}vijay-odisha-logo.jpg`}
                            alt="Vijaya Odisha"
                        />
                    </a>

                    <p>
                        VIJAYA is a front ranking NGO in Odisha working towards
                        the welfare, rehabilitation and education of women
                        and children.
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
                    <p>
                        Plot No:- 507 (3rd Floor), in front of State Bank of
                        India, Saheed Nagar, Bhubaneswar, Pin-751007,
                        Dist: Khurdha, Odisha.
                    </p>
                    <a href={page("contact.html")}>Get in touch ↗</a>
                </div>

            </div>

            <div className="projects-footer-bottom">
                <div className="projects-container">
                    <span>© 2026 Vijaya Odisha. All rights reserved.</span>
                    <a href="#projects-top">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

/* =========================================
   PROJECT LOCATION COMPONENT
========================================= */

function ProjectLocation({ location }) {
    return (
        <section
            className={`project-location project-location-${location.theme}`}
            id={`project-location-${location.number}`}
        >
            <div className="projects-container project-location-inner">

                <div className="project-location-aside">
                    <span className="project-location-number">
                        {location.number}
                    </span>

                    <span className="project-location-line" />

                    <span className="project-location-label">
                        PROJECT LOCATION
                    </span>
                </div>

                <div className="project-location-main">

                    <div className="project-location-heading">
                        <div>
                            <span className="project-location-short">
                                {location.short}
                            </span>

                            <h2>{location.name}</h2>
                        </div>

                        <span className="project-location-count">
                            LOCATION / {location.number}
                        </span>
                    </div>

                    <p className="project-location-description">
                        {location.description}
                    </p>

                    <div className="project-location-content">

                        <div className="project-location-activities">
                            <span className="projects-eyebrow">
                                {location.introduction}
                            </span>

                            <ul>
                                {location.activities.map((activity, i) => (
                                    <li key={i}>
                                        <span className="project-activity-index">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>

                                        <span>{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <aside className="project-location-note">
                            <span className="project-note-mark">VO.</span>

                            <span className="projects-eyebrow">
                                {location.number} / {location.name}
                            </span>

                            <h3>{location.subheading}</h3>

                            <p>{location.additional}</p>
                        </aside>

                    </div>
                </div>
            </div>
        </section>
    );
}

/* =========================================
   MAIN PROJECTS PAGE
========================================= */

export default function Projects() {
    const [activeLocation, setActiveLocation] = useState("01");

    useEffect(() => {
        document.title = "Our Projects | Vijaya Odisha";

        const sections = locations
            .map((location) =>
                document.getElementById(
                    `project-location-${location.number}`
                )
            )
            .filter(Boolean);

        if (!("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const number = entry.target.id.split("-").pop();
                        setActiveLocation(number);
                    }
                });
            },
            {
                threshold: 0.35,
                rootMargin: "-15% 0px -40% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const goToLocation = (number) => {
        setActiveLocation(number);

        document
            .getElementById(`project-location-${number}`)
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return (
        <div className="projects-page" id="projects-top">

            {/* SHARED HEADER */}
            <SiteHeader activePage="Projects" />

            <main>

                {/* HERO SECTION */}
                <section className="projects-hero">
                    <div className="projects-container projects-hero-inner">

                        <div className="projects-hero-copy">
                            <span className="projects-eyebrow">
                                OUR WORK · OUR REACH
                            </span>

                            <div className="projects-breadcrumb">
                                <a href={page()}>Home</a>
                                <span>/</span>
                                <span>Projects</span>
                            </div>

                            <h1>
                                Where our work
                                <br />
                                <em>makes a difference.</em>
                            </h1>

                            <p>
                                From community initiatives to rehabilitation,
                                education and women's empowerment, discover the
                                locations where Vijaya Odisha carries out its work.
                            </p>

                            <a
                                href="#project-locations"
                                className="projects-hero-link"
                            >
                                Explore our locations <span>↓</span>
                            </a>
                        </div>

                        {/* MAP AND HEADING */}
                        <div className="projects-hero-map">
                            <div className="projects-map-heading">
                                <span>VIJAYA ODISHA · EST. 1996</span>

                                <h2>
                                    Our work.
                                    <br />
                                    <em>Across communities.</em>
                                </h2>
                            </div>

                            <div className="projects-map-image">
                                <img
                                    src={`${A}projects-odisha-map.png`}
                                    alt="Three-dimensional map of Odisha highlighting Bhadrak, Satyabhamapur, Bhubaneswar and Puri"
                                />
                            </div>
                        </div>

                    </div>
                </section>
                {/* HERO SECTION ENDS HERE */}

                {/* LOCATION NAVIGATION */}
                <section
                    className="projects-location-nav-section"
                    id="project-locations"
                >
                    <div className="projects-container">

                        <div className="projects-location-nav-heading">
                            <span className="projects-eyebrow">
                                EXPLORE BY LOCATION
                            </span>

                            <span>SELECT A LOCATION TO EXPLORE ↓</span>
                        </div>

                        <div className="projects-location-nav">
                            {locations.map((location) => (
                                <button
                                    key={location.number}
                                    className={
                                        activeLocation === location.number
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => goToLocation(location.number)}
                                >
                                    <span>{location.number}</span>
                                    {location.name}
                                    <span className="projects-nav-arrow">↗</span>
                                </button>
                            ))}
                        </div>

                    </div>
                </section>

                {/* FOUR PROJECT LOCATIONS */}
                {locations.map((location) => (
                    <ProjectLocation
                        key={location.number}
                        location={location}
                    />
                ))}

                {/* CLOSING SECTION */}
                <section className="projects-closing">
                    <div className="projects-container projects-closing-inner">

                        <div>
                            <span className="projects-eyebrow">
                                OUR CONTINUING JOURNEY
                            </span>

                            <h2>
                                Meaningful work.
                                <br />
                                <em>Lasting impact.</em>
                            </h2>

                            <p>
                                Every location represents an ongoing commitment
                                to people, opportunity and community development.
                            </p>
                        </div>

                        <div className="projects-closing-actions">
                            <a href={page("activities.html")}>
                                Explore our activities ↗
                            </a>

                            <a href={page("contact.html")}>
                                Connect with us
                            </a>
                        </div>

                    </div>
                </section>

            </main>

            <ProjectsFooter />
        </div>
    );
}
