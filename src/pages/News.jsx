
import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";

// GitHub Pages base path
const BASE = import.meta.env.BASE_URL;
const A = `${BASE}assets/images/`;
const page = (path = "") => `${BASE}${path}`;

const stories = [
    {
        id: 1,
        category: "Education",
        title: "Creating opportunities through education",
        excerpt:
            "Education and learning initiatives help children and young people build confidence, skills and opportunities for the future.",
        image: "IMG20250130122215-1024x576.jpg",
        link: "projects.html",
        linkText: "Explore our projects",
        featured: true,
    },
    {
        id: 2,
        category: "Community",
        title: "Working together for stronger communities",
        excerpt:
            "Community initiatives encourage participation, awareness and cooperation among individuals and families.",
        image: "IMG-20231203-WA0048.jpg",
        link: "activities.html",
        linkText: "Discover our activities",
    },
    {
        id: 3,
        category: "Women",
        title: "Supporting women through empowerment",
        excerpt:
            "Skill development, awareness and opportunities can help women participate more actively in community life.",
        image: "IMG-20240321-WA0029.jpg",
        link: "projects.html",
        linkText: "View project locations",
    },
    {
        id: 4,
        category: "Education",
        title: "Learning beyond the classroom",
        excerpt:
            "Learning activities and educational support are important parts of building a more confident future.",
        image: "IMG-20220804-WA0025.jpg",
        link: "objectives.html",
        linkText: "Read our objectives",
    },
    {
        id: 5,
        category: "Community",
        title: "Building connections through participation",
        excerpt:
            "Local participation and collective effort are central to meaningful and sustainable community development.",
        image: "IMG-20240719-WA0053.jpg",
        link: "projects.html",
        linkText: "Explore our work",
    },
    {
        id: 6,
        category: "Events",
        title: "Moments from our programmes",
        excerpt:
            "A look at the people and activities that form part of Vijaya Odisha's continuing journey.",
        image: "IMG_20241203_121532.jpg",
        link: "photo-gallery.html",
        linkText: "Visit the photo gallery",
    },
];

const categories = ["All", "Education", "Community", "Women", "Events"];

/* =========================================
   FOOTER
========================================= */

function NewsFooter() {
    return (
        <footer className="news-footer">
            <div className="news-container news-footer-grid">

                <div className="news-footer-about">
                    <a href={page()}>
                        <img
                            src={`${A}vijay-odisha-logo.jpg`}
                            alt="Vijaya Odisha"
                        />
                    </a>

                    <p>
                        Working towards the welfare, rehabilitation and education
                        of women and children.
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
                    <p>Bhubaneswar, Odisha, India</p>
                    <a href={page("contact.html")}>Get in touch ↗</a>
                </div>

            </div>

            <div className="news-footer-bottom">
                <div className="news-container">
                    <span>© 2026 Vijaya Odisha. All rights reserved.</span>
                    <a href="#news-top">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

/* =========================================
   MAIN NEWS PAGE
========================================= */

export default function News() {
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        document.title = "News & Updates | Vijaya Odisha";
    }, []);

    const filteredStories =
        activeCategory === "All"
            ? stories
            : stories.filter((story) => story.category === activeCategory);

    const featuredStory = stories[0];

    return (
        <div className="news-page" id="news-top">

            {/* SHARED WEBSITE NAVIGATION */}
            <SiteHeader activePage="News" />

            <main>

                {/* HERO */}
                <section className="news-hero">
                    <div className="news-container news-hero-inner">

                        <div className="news-hero-copy">
                            <span className="news-eyebrow">
                                VOICES · STORIES · UPDATES
                            </span>

                            <div className="news-breadcrumb">
                                <a href={page()}>Home</a>
                                <span>/</span>
                                <span>News</span>
                            </div>

                            <h1>
                                Stories of
                                <br />
                                <em>change in motion.</em>
                            </h1>

                            <p>
                                Discover the initiatives, people and ideas that
                                reflect Vijaya Odisha's continuing work with
                                women, children and communities.
                            </p>

                            <a href="#news-stories" className="news-hero-link">
                                Explore stories <span>↓</span>
                            </a>
                        </div>

                        <div className="news-hero-art">

                            <div className="news-hero-image">
                                <img
                                    src={`${A}IMG-20250310-WA0001-1024x461.jpg`}
                                    alt="Vijaya Odisha programme"
                                />
                            </div>

                            <div className="news-hero-side-note">
                                <span>VIJAYA ODISHA</span>
                                <strong>People.</strong>
                                <strong>Purpose.</strong>
                                <strong className="sage">Progress.</strong>
                                <small>Serving communities since 1996</small>
                            </div>

                            <div className="news-hero-index">
                                01 / OUR STORIES
                            </div>

                        </div>
                    </div>
                </section>

                {/* FEATURED STORY */}
                <section className="news-featured-section">
                    <div className="news-container">

                        <div className="news-section-topline">
                            <span className="news-eyebrow">IN FOCUS</span>
                            <span>01 — FEATURED STORY</span>
                        </div>

                        <article className="news-featured">

                            <a
                                href={page(featuredStory.link)}
                                className="news-featured-image"
                                aria-label="Explore education projects"
                            >
                                <img
                                    src={`${A}${featuredStory.image}`}
                                    alt={featuredStory.title}
                                />

                                <span className="news-image-arrow">↗</span>
                            </a>

                            <div className="news-featured-copy">

                                <span className="news-story-category">
                                    {featuredStory.category}
                                </span>

                                <span className="news-featured-label">
                                    FEATURED STORY
                                </span>

                                <h2>{featuredStory.title}</h2>

                                <p>{featuredStory.excerpt}</p>

                                <a
                                    href={page(featuredStory.link)}
                                    className="news-read-link"
                                >
                                    {featuredStory.linkText} <span>↗</span>
                                </a>

                            </div>
                        </article>

                    </div>
                </section>

                {/* STORIES */}
                <section
                    className="news-stories-section"
                    id="news-stories"
                >
                    <div className="news-container">

                        <div className="news-stories-heading">
                            <div>
                                <span className="news-eyebrow">
                                    THE LATEST FROM OUR WORK
                                </span>

                                <h2>
                                    Explore our <em>stories.</em>
                                </h2>
                            </div>

                            <p>
                                Explore different areas of our work and the communities
                                at the heart of our initiatives.
                            </p>
                        </div>

                        {/* CATEGORY FILTERS */}
                        <div className="news-filter-row">

                            <div className="news-filters">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={
                                            activeCategory === category
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() => setActiveCategory(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            <span>{filteredStories.length} stories</span>

                        </div>

                        {/* STORY CARDS */}
                        <div className="news-card-grid">
                            {filteredStories.map((story, index) => (
                                <article
                                    className="news-card"
                                    key={story.id}
                                    style={{
                                        animationDelay: `${index * 70}ms`,
                                    }}
                                >

                                    <a
                                        href={page(story.link)}
                                        className="news-card-image"
                                    >
                                        <img
                                            src={`${A}${story.image}`}
                                            alt={story.title}
                                        />

                                        <span className="news-card-arrow">
                                            ↗
                                        </span>
                                    </a>

                                    <div className="news-card-content">

                                        <span className="news-story-category">
                                            {story.category}
                                        </span>

                                        <h3>{story.title}</h3>

                                        <p>{story.excerpt}</p>

                                        <a
                                            href={page(story.link)}
                                            className="news-card-link"
                                        >
                                            {story.linkText} <span>↗</span>
                                        </a>

                                    </div>
                                </article>
                            ))}
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="news-cta">
                    <div className="news-container news-cta-inner">

                        <div>
                            <span className="news-eyebrow">
                                STAY CONNECTED
                            </span>

                            <h2>
                                Be part of
                                <br />
                                <em>the journey.</em>
                            </h2>
                        </div>

                        <div className="news-cta-copy">

                            <p>
                                Learn more about our initiatives, explore our work
                                or connect with Vijaya Odisha.
                            </p>

                            <div>
                                <a href={page("projects.html")}>
                                    Explore our projects ↗
                                </a>

                                <a href={page("contact.html")}>
                                    Contact us
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <NewsFooter />

        </div>
    );
}
