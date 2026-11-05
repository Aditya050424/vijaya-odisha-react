
import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";

const A = "/assets/images/";

const photos = [
    ["20190811_121222.jpg", "Vijaya Odisha", "Community Activity"],
    ["IMG-20220804-WA0025.jpg", "Education", "Student Activity"],
    ["IMG-20220804-WA0028.jpg", "Celebration", "Teachers Day"],
    ["IMG-20221202-WA0034.jpg", "Community", "Community Programme"],
    ["IMG-20221205-WA0028.jpg", "Vijaya Odisha", "School Campus"],
    ["IMG-20221209-WA0035.jpg", "Education", "School Programme"],
    ["IMG-20221209-WA0045.jpg", "Community", "Community Gathering"],
    ["IMG-20230312-WA0060.jpg", "Students", "Learning Activity"],
    ["IMG-20230312-WA0063.jpg", "Vijaya Odisha", "Community Activity"],
    ["IMG-20230720-WA0065.jpg", "Education", "Students & Teachers"],
    ["IMG-20230815-WA0066.jpg", "Celebration", "Independence Day"],
    ["IMG-20231203-WA0048.jpg", "Community", "Community Programme"],
    ["IMG-20231203-WA0049.jpg", "Awareness", "Awareness Activity"],
    ["IMG-20231203-WA0051.jpg", "Vijaya Odisha", "Programme"],
    ["IMG-20240321-WA0029.jpg", "Women", "Women Empowerment"],
    ["IMG-20240408-WA0022.jpg", "Community", "Development Activity"],
    ["IMG-20240719-WA0004.jpg", "Education", "School Activity"],
    ["IMG-20240719-WA0028.jpg", "Students", "Student Event"],
    ["IMG-20240719-WA0038.jpg", "Celebration", "School Celebration"],
    ["IMG-20240719-WA0042.jpg", "Education", "Students & Teachers"],
    ["IMG-20240719-WA0053.jpg", "Community", "Community Gathering"],
    ["IMG-20240719-WA0055.jpg", "Community", "Community Activity"],
    ["IMG-20240719-WA0059.jpg", "Education", "School Activity"],
    ["IMG-20240719-WA0065.jpg", "Students", "Student Activity"],
    ["IMG-20240719-WA0073.jpg", "Community", "Community Programme"],
    ["IMG-20250123-WA0121.jpg", "Events", "Vijaya Odisha Event"],
    ["IMG-20250310-WA0001-1024x461.jpg", "Programme", "Community Programme"],
    ["IMG20250130122215-1024x576.jpg", "Education", "School Event"],
    ["IMG20250130122235-1024x576.jpg", "Students", "Student Event"],
    ["IMG20250130131122_01.jpg", "Vijaya Odisha", "Community Activity"],
    ["IMG20250130131645-1024x576.jpg", "Community", "Community Programme"],
    ["IMG_20241203_121532.jpg", "Events", "Community Event"],
    ["IMG_20250310_154859.jpg", "Vijaya Odisha", "Programme"],
].map(([file, category, title], index) => ({
    id: index + 1,
    src: `${A}${file}`,
    category,
    title,
}));

const filters = [
    "All",
    "Education",
    "Community",
    "Students",
    "Celebration",
    "Women",
    "Awareness",
    "Events",
];

function GalleryFooter() {
    return (
        <footer className="gallery-footer">
            <div className="gallery-container gallery-footer-grid">
                <div className="gallery-footer-about">
                    <a href="/">
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
                    <p>Bhubaneswar, Odisha, India</p>
                    <a href="/contact.html">Get in touch ↗</a>
                </div>
            </div>

            <div className="gallery-footer-bottom">
                <div className="gallery-container">
                    <span>© 2026 Vijaya Odisha. All rights reserved.</span>
                    <a href="#gallery-top">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const visiblePhotos =
        activeFilter === "All"
            ? photos
            : photos.filter((photo) => photo.category === activeFilter);

    const openPhoto = (photo) => setSelectedPhoto(photo);

    const closePhoto = () => setSelectedPhoto(null);

    const showNext = () => {
        if (!selectedPhoto) return;

        const currentIndex = visiblePhotos.findIndex(
            (photo) => photo.id === selectedPhoto.id
        );

        const nextIndex = (currentIndex + 1) % visiblePhotos.length;
        setSelectedPhoto(visiblePhotos[nextIndex]);
    };

    const showPrevious = () => {
        if (!selectedPhoto) return;

        const currentIndex = visiblePhotos.findIndex(
            (photo) => photo.id === selectedPhoto.id
        );

        const previousIndex =
            (currentIndex - 1 + visiblePhotos.length) % visiblePhotos.length;

        setSelectedPhoto(visiblePhotos[previousIndex]);
    };

    useEffect(() => {
        document.title = "Photo Gallery | Vijaya Odisha";
    }, []);

    useEffect(() => {
        if (!selectedPhoto) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") closePhoto();
            if (event.key === "ArrowRight") showNext();
            if (event.key === "ArrowLeft") showPrevious();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedPhoto, visiblePhotos]);

    return (
        <div className="gallery-page" id="gallery-top">

            {/* Shared website navigation */}
            <SiteHeader activePage="Gallery" />

            <main>
                <section className="gallery-hero">
                    <div className="gallery-container gallery-hero-inner">
                        <div className="gallery-hero-copy">
                            <span className="gallery-eyebrow">
                                OUR STORIES · OUR PEOPLE
                            </span>

                            <div className="gallery-breadcrumb">
                                <a href="/">Home</a>
                                <span>/</span>
                                <span>Gallery</span>
                            </div>

                            <h1>
                                Life in
                                <br />
                                <em>every frame.</em>
                            </h1>

                            <p>
                                A glimpse into the people, programmes and moments
                                that shape Vijaya Odisha's journey with communities.
                            </p>

                            <a
                                href="#gallery-collection"
                                className="gallery-explore"
                            >
                                Explore the collection <span>↓</span>
                            </a>
                        </div>

                        <div className="gallery-hero-visual">
                            <div className="gallery-hero-photo gallery-hero-photo-main">
                                <img
                                    src={`${A}IMG20250130122215-1024x576.jpg`}
                                    alt="Vijaya Odisha education programme"
                                />
                            </div>

                            <div className="gallery-hero-photo gallery-hero-photo-small">
                                <img
                                    src={`${A}IMG-20240321-WA0029.jpg`}
                                    alt="Women empowerment activity"
                                />
                            </div>

                            <div className="gallery-hero-note">
                                <strong>33</strong>
                                <span>Moments from our journey</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="gallery-collection"
                    id="gallery-collection"
                >
                    <div className="gallery-container">
                        <div className="gallery-section-heading">
                            <div>
                                <span className="gallery-eyebrow">
                                    OUR MEMORIES
                                </span>

                                <h2>
                                    Moments that <em>matter.</em>
                                </h2>
                            </div>

                            <p>
                                Explore moments from our work with children, women
                                and communities.
                            </p>
                        </div>

                        <div
                            className="gallery-filter-bar"
                            aria-label="Filter gallery"
                        >
                            <div className="gallery-filters">
                                {filters.map((filter) => (
                                    <button
                                        key={filter}
                                        className={
                                            activeFilter === filter ? "active" : ""
                                        }
                                        onClick={() => setActiveFilter(filter)}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>

                            <span className="gallery-result-count">
                                {visiblePhotos.length} photographs
                            </span>
                        </div>

                        <div className="gallery-photo-grid">
                            {visiblePhotos.map((photo, index) => (
                                <button
                                    className={`gallery-photo-card gallery-photo-card-${index % 6}`}
                                    key={photo.id}
                                    onClick={() => openPhoto(photo)}
                                    aria-label={`View ${photo.title}`}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.title}
                                        loading="lazy"
                                    />

                                    <span className="gallery-photo-overlay">
                                        <span>
                                            <small>{photo.category}</small>
                                            <strong>{photo.title}</strong>
                                        </span>

                                        <span className="gallery-photo-plus">
                                            ↗
                                        </span>
                                    </span>
                                </button>
                            ))}
                        </div>

                        {visiblePhotos.length === 0 && (
                            <p className="gallery-empty">
                                No photographs in this category.
                            </p>
                        )}
                    </div>
                </section>

                <section className="gallery-closing">
                    <div className="gallery-container gallery-closing-inner">
                        <span className="gallery-eyebrow">
                            BE PART OF THE STORY
                        </span>

                        <h2>
                            Every picture tells
                            <br />
                            <em>a story of change.</em>
                        </h2>

                        <p>
                            Discover how you can support our work and help create
                            more meaningful moments.
                        </p>

                        <a href="/contact.html">
                            Connect with Vijaya Odisha ↗
                        </a>
                    </div>
                </section>
            </main>

            <GalleryFooter />

            {selectedPhoto && (
                <div
                    className="gallery-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo viewer"
                    onClick={closePhoto}
                >
                    <button
                        className="gallery-lightbox-close"
                        onClick={closePhoto}
                        aria-label="Close image"
                    >
                        ×
                    </button>

                    <button
                        className="gallery-lightbox-arrow previous"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPrevious();
                        }}
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    <div
                        className="gallery-lightbox-content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedPhoto.src}
                            alt={selectedPhoto.title}
                        />

                        <div>
                            <span>{selectedPhoto.category}</span>
                            <strong>{selectedPhoto.title}</strong>
                        </div>
                    </div>

                    <button
                        className="gallery-lightbox-arrow next"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNext();
                        }}
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}
