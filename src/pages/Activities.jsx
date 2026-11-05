
import { useEffect, useMemo, useState } from "react";
import SiteHeader from "../components/SiteHeader";

const A = "/assets/images/";

const activities = [
    {
        number: "01",
        title: "Relief & Rehabilitation",
        category: "Welfare",
        description:
            "Participation in various reliefs, rehabilitation and post-traumatic stress disorder (PTSD) programmes.",
        detail:
            "Supporting people and communities through relief, rehabilitation and programmes focused on recovery and wellbeing.",
    },
    {
        number: "02",
        title: "Mobile Medical Services",
        category: "Healthcare",
        description: "Operation of mobile medical health services.",
        detail:
            "Taking healthcare services closer to communities through mobile medical support.",
    },
    {
        number: "03",
        title: "Workshops & Seminars",
        category: "Awareness",
        description:
            "Arranging issue-based workshops, seminars and awareness programmes.",
        detail:
            "Creating opportunities for learning, discussion and awareness around important community issues.",
    },
    {
        number: "04",
        title: "Training Programmes",
        category: "Education",
        description:
            "Undertaking ISD, induction and sensitization programmes including training of Medical Officers and Para-Medical personnel.",
        detail:
            "Building knowledge and practical capabilities through induction, sensitization and professional training programmes.",
    },
    {
        number: "05",
        title: "Special School",
        category: "Education",
        description: "Managing Special School of Blind, Deaf & Dumb Girls.",
        detail:
            "Supporting educational opportunities for girls with visual and hearing-related disabilities.",
    },
    {
        number: "06",
        title: "SWADHAR Homes",
        category: "Welfare",
        description:
            "Managing SWADHAR Homes for distressed, disadvantaged and deserted widows and women.",
        detail:
            "Providing support through homes for women facing difficult and vulnerable circumstances.",
    },
    {
        number: "07",
        title: "Community Production",
        category: "Community",
        description:
            "Preparing consumable items and undertaking community serving and distribution activities.",
        detail:
            "Encouraging community participation through production, service and distribution activities.",
    },
    {
        number: "08",
        title: "Surveys & Field Studies",
        category: "Community",
        description:
            "Undertaking surveys and field studies to understand community needs.",
        detail:
            "Understanding local needs through field-level observation, surveys and studies.",
    },
    {
        number: "09",
        title: "Health & Nutrition Awareness",
        category: "Healthcare",
        description:
            "Conducting awareness training for HIV/AIDS, nutrition and educational programmes for tribal populations.",
        detail:
            "Promoting awareness about health, nutrition and education among tribal communities.",
    },
    {
        number: "10",
        title: "Catering Services",
        category: "Community",
        description:
            "Undertaking catering services as part of community activities.",
        detail:
            "Carrying out catering-related services as part of the organisation's community activities.",
    },
    {
        number: "11",
        title: "Translation Programmes",
        category: "Education",
        description: "Translating training and counselling modules into Oriya.",
        detail:
            "Making training and counselling material more accessible through translation into Oriya.",
    },
    {
        number: "12",
        title: "Tribal Development",
        category: "Community",
        description:
            "Undertaking nutrition and educational achievement programmes for Chikutia Bhunjia tribal people in Nuapada District.",
        detail:
            "Working on nutrition and educational achievement programmes for the Chikutia Bhunjia tribal community in Nuapada District.",
    },
];

const categories = [
    "All",
    "Welfare",
    "Healthcare",
    "Education",
    "Awareness",
    "Community",
];

function ActivitiesFooter() {
    return (
        <footer className="activities-footer">
            <div className="activities-container activities-footer-grid">
                <div className="activities-footer-about">
                    <a href="/">
                        <img
                            src={`${A}vijay-odisha-logo.jpg`}
                            alt="Vijaya Odisha"
                        />
                    </a>

                    <p>
                        A front ranking NGO in Odisha working towards the welfare,
                        rehabilitation and education of women and children.
                    </p>

                    <span>Working with purpose since 1996.</span>
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
                    <a href="/contact.html">Get in touch ↗</a>
                </div>
            </div>

            <div className="activities-footer-bottom">
                <div className="activities-container">
                    <span>© 2026 Vijaya Odisha. All rights reserved.</span>
                    <a href="#activities-top">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

export default function Activities() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [expandedActivity, setExpandedActivity] = useState(null);

    useEffect(() => {
        document.title = "Activities | Vijaya Odisha";
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll(
            ".act-intro, .act-explorer-heading, .act-toolbar, .act-result-line, .act-card, .act-feature-image, .act-feature-content, .act-closing-inner"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -35px 0px",
            }
        );

        elements.forEach((element) => {
            element.classList.add("act-reveal");

            if (element.classList.contains("act-card")) {
                element.style.transitionDelay = `${(Array.from(element.parentElement.children).indexOf(element) %
                    3) *
                    100
                    }ms`;
            }

            observer.observe(element);
        });

        return () => observer.disconnect();
    }, [activeCategory, search]);

    const filteredActivities = useMemo(() => {
        return activities.filter((activity) => {
            const matchesCategory =
                activeCategory === "All" ||
                activity.category === activeCategory;

            const term = search.trim().toLowerCase();

            const matchesSearch =
                !term ||
                activity.title.toLowerCase().includes(term) ||
                activity.description.toLowerCase().includes(term) ||
                activity.category.toLowerCase().includes(term);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    return (
        <div className="activities-page" id="activities-top">

            {/* SHARED HEADER — SAME AS OBJECTIVES PAGE */}
            <SiteHeader activePage="Activities" />

            <main>
                {/* HERO SECTION */}
                <section className="act-hero">
                    <div className="activities-container act-hero-layout">
                        <div className="act-hero-copy">
                            <span className="act-kicker">
                                OUR WORK <i /> OUR COMMITMENT
                            </span>

                            <div className="act-breadcrumb">
                                <a href="/">Home</a>
                                <span>/</span>
                                <span>Activities</span>
                            </div>

                            <h1>
                                From purpose
                                <br />
                                to <em>possibility.</em>
                            </h1>

                            <p>
                                Every initiative begins with people. Discover how
                                Vijaya Odisha works across healthcare, education,
                                rehabilitation and community development.
                            </p>

                            <div className="act-hero-actions">
                                <a
                                    href="#activity-explorer"
                                    className="act-primary-link"
                                >
                                    Explore our work <span>↘</span>
                                </a>

                                <a
                                    href="/contact.html"
                                    className="act-secondary-link"
                                >
                                    Connect with us
                                </a>
                            </div>

                            <div className="act-hero-meta">
                                <span>BHUBANESWAR, ODISHA</span>
                            </div>
                        </div>

                        <div className="act-hero-visual">
                            <div className="act-hero-image-main">
                                <img
                                    src={`${A}IMG20250130122215-1024x576.jpg`}
                                    alt="Vijaya Odisha community initiative"
                                />
                            </div>

                            <div className="act-hero-image-small">
                                <img
                                    src={`${A}20190811_121222.jpg`}
                                    alt="Community activity"
                                />
                            </div>

                            <span className="act-visual-index">01 — 12</span>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="act-intro">
                    <div className="activities-container act-intro-layout">
                        <div className="act-intro-label">
                            <span className="act-kicker">WHAT WE DO</span>
                            <span className="act-vertical-line" />
                            <span className="act-intro-small">
                                A CONTINUING JOURNEY
                            </span>
                        </div>

                        <div className="act-intro-content">
                            <h2>
                                Work that responds
                                <br />
                                to <em>real needs.</em>
                            </h2>

                            <p>
                                We have a constant track record of notable
                                achievements in various fields and areas. Our work
                                includes welfare, healthcare, education, awareness,
                                training and initiatives that respond to community
                                needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ACTIVITY EXPLORER */}
                <section
                    className="act-explorer"
                    id="activity-explorer"
                >
                    <div className="activities-container">
                        <div className="act-explorer-heading">
                            <div>
                                <span className="act-kicker">
                                    EXPLORE OUR INITIATIVES
                                </span>

                                <h2>
                                    Areas of <em>action.</em>
                                </h2>
                            </div>

                            <p>
                                Browse our work by focus area or search for a
                                particular initiative.
                            </p>
                        </div>

                        <div className="act-toolbar">
                            <div
                                className="act-filters"
                                aria-label="Filter activities"
                            >
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={
                                            activeCategory === category
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() => {
                                            setActiveCategory(category);
                                            setExpandedActivity(null);
                                        }}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            <label className="act-search">
                                <span>⌕</span>

                                <input
                                    type="search"
                                    value={search}
                                    onChange={(event) => {
                                        setSearch(event.target.value);
                                        setExpandedActivity(null);
                                    }}
                                    placeholder="Find an activity..."
                                />
                            </label>
                        </div>

                        <div className="act-result-line">
                            <span>
                                SHOWING{" "}
                                <strong>{filteredActivities.length}</strong> OF 12
                                INITIATIVES
                            </span>

                            <span>SELECT AN INITIATIVE TO LEARN MORE ↗</span>
                        </div>

                        <div className="act-grid">
                            {filteredActivities.map((activity, index) => {
                                const expanded =
                                    expandedActivity === activity.number;

                                return (
                                    <article
                                        key={activity.number}
                                        className={`act-card ${index === 0 &&
                                            activeCategory === "All" &&
                                            !search
                                            ? "act-card-featured"
                                            : ""
                                            } ${expanded ? "is-expanded" : ""}`}
                                    >
                                        <div className="act-card-top">
                                            <span className="act-card-number">
                                                {activity.number}
                                            </span>

                                            <span className="act-card-category">
                                                {activity.category}
                                            </span>
                                        </div>

                                        <div className="act-card-body">
                                            <h3>{activity.title}</h3>
                                            <p>{activity.description}</p>

                                            {expanded && (
                                                <div className="act-card-more">
                                                    {activity.detail}
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            className="act-card-toggle"
                                            onClick={() =>
                                                setExpandedActivity(
                                                    expanded
                                                        ? null
                                                        : activity.number
                                                )
                                            }
                                            aria-expanded={expanded}
                                        >
                                            <span>
                                                {expanded
                                                    ? "Close details"
                                                    : "Discover more"}
                                            </span>

                                            <span className="act-card-arrow">
                                                {expanded ? "−" : "↗"}
                                            </span>
                                        </button>
                                    </article>
                                );
                            })}
                        </div>

                        {filteredActivities.length === 0 && (
                            <div className="act-empty">
                                <h3>No matching activities</h3>

                                <p>
                                    Try another keyword or choose a different
                                    category.
                                </p>

                                <button
                                    onClick={() => {
                                        setSearch("");
                                        setActiveCategory("All");
                                    }}
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* FEATURE SECTION */}
                <section className="act-feature">
                    <div className="act-feature-image">
                        <img
                            src={`${A}IMG_20241203_121532.jpg`}
                            alt="Vijaya Odisha community work"
                            loading="lazy"
                        />
                    </div>

                    <div className="act-feature-content">
                        <span className="act-kicker">THE WAY WE WORK</span>

                        <h2>
                            People at the
                            <br />
                            heart of <em>progress.</em>
                        </h2>

                        <p>
                            Our activities focus on welfare, rehabilitation,
                            education, awareness and community development to
                            create meaningful and sustainable change.
                        </p>

                        <a href="/objectives.html">
                            Discover our objectives <span>↗</span>
                        </a>
                    </div>
                </section>

                {/* CLOSING SECTION */}
                <section className="act-closing">
                    <div className="activities-container act-closing-inner">
                        <div>
                            <span className="act-kicker">
                                BE PART OF THE CHANGE
                            </span>

                            <h2>
                                Progress is a
                                <br />
                                <em>shared effort.</em>
                            </h2>
                        </div>

                        <div className="act-closing-right">
                            <p>
                                Learn more about our initiatives or connect with
                                Vijaya Odisha to understand how you can support
                                our work.
                            </p>

                            <div>
                                <a href="/contact.html">
                                    Start a conversation ↗
                                </a>

                                <a href="/donate.html">
                                    Support our work
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <ActivitiesFooter />
        </div>
    );
}
