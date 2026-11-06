
import SiteHeader from "../components/SiteHeader";

// GitHub Pages base path
const BASE = import.meta.env.BASE_URL;
const A = `${BASE}assets/images/`;
const logo = `${A}vijay-odisha-logo.jpg`;
const page = (path = "") => `${BASE}${path}`;

export default function Donate() {

    const supportOptions = [
        {
            number: "01",
            title: "Support our initiatives",
            description:
                "Contribute towards work that supports women, children and disadvantaged communities.",
            detail: "FINANCIAL SUPPORT",
            symbol: "↗",
        },
        {
            number: "02",
            title: "Share your skills",
            description:
                "Offer your knowledge, professional experience or time to help create meaningful change.",
            detail: "VOLUNTEERING",
            symbol: "✳",
        },
        {
            number: "03",
            title: "Build a partnership",
            description:
                "Explore opportunities to collaborate with Vijaya Odisha on community-focused initiatives.",
            detail: "COLLABORATION",
            symbol: "↗",
        },
    ];

    return (
        <div className="donate-page" id="top">

            {/* SHARED HEADER */}
            <SiteHeader activePage="Donate" />

            <main>

                {/* HERO */}
                <section className="donate-hero">
                    <div className="donate-hero-inner">

                        <div className="donate-hero-copy">

                            <div className="donate-eyebrow">
                                <span></span>
                                <span className="donate-eyebrow-line"></span>
                                BE PART OF THE JOURNEY
                            </div>

                            <h1>
                                Your support.
                                <br />
                                Their <em>tomorrow.</em>
                            </h1>

                            <p>
                                Every contribution begins with a belief that
                                communities deserve opportunity, dignity and
                                a chance to move forward.
                            </p>

                            <a href="#ways-to-support" className="donate-hero-link">
                                EXPLORE HOW YOU CAN HELP <span>↓</span>
                            </a>

                        </div>

                        <div className="donate-hero-visual">

                            <div className="donate-hero-image">
                                <img
                                    src={`${A}IMG20250130122215-1024x576.jpg`}
                                    alt="Community initiative by Vijaya Odisha"
                                />
                            </div>

                            <div className="donate-image-note">
                                <span>PEOPLE. PURPOSE. PROGRESS.</span>
                                <p>
                                    Meaningful change happens when
                                    we work together.
                                </p>
                            </div>

                            <div className="donate-image-index">
                                VIJAYA ODISHA <span>·</span> SINCE 1996
                            </div>

                        </div>

                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="donate-intro">

                    <div className="donate-section-label">
                        WHY YOUR SUPPORT MATTERS
                    </div>

                    <div className="donate-intro-grid">

                        <h2>
                            A little support
                            <br />
                            can create
                            <br />
                            <em>a lasting difference.</em>
                        </h2>

                        <div className="donate-intro-copy">

                            <p>
                                Vijaya Odisha works towards the welfare and
                                development of communities through social
                                initiatives, education, rehabilitation
                                and empowerment.
                            </p>

                            <p>
                                Your willingness to contribute can help
                                strengthen this journey. Whether through
                                financial support, skills or collaboration,
                                every meaningful effort counts.
                            </p>

                            <a href={page("about-us.html")}>
                                GET TO KNOW VIJAYA <span>↗</span>
                            </a>

                        </div>

                    </div>

                </section>

                {/* WAYS TO SUPPORT */}
                <section className="donate-ways" id="ways-to-support">

                    <div className="donate-ways-heading">

                        <div>
                            <div className="donate-section-label">
                                MAKE A DIFFERENCE
                            </div>

                            <h2>
                                There are many ways
                                <br />
                                to <em>stand together.</em>
                            </h2>
                        </div>

                        <p>
                            Choose how you would like to contribute
                            to a more inclusive and empowered society.
                        </p>

                    </div>

                    <div className="donate-card-grid">

                        {supportOptions.map((option) => (
                            <article className="donate-card" key={option.number}>

                                <div className="donate-card-top">
                                    <span>{option.number}</span>
                                    <span className="donate-card-symbol">
                                        {option.symbol}
                                    </span>
                                </div>

                                <div className="donate-card-content">

                                    <span className="donate-card-detail">
                                        {option.detail}
                                    </span>

                                    <h3>{option.title}</h3>

                                    <p>{option.description}</p>

                                    <a href={page("contact.html")}>
                                        START A CONVERSATION <span>↗</span>
                                    </a>

                                </div>

                            </article>
                        ))}

                    </div>

                </section>

                {/* FEATURE SECTION */}
                <section className="donate-feature">

                    <div className="donate-feature-image">
                        <img
                            src={`${A}IMG_20241203_121532.jpg`}
                            alt="Vijaya Odisha community work"
                        />
                    </div>

                    <div className="donate-feature-content">

                        <span className="donate-feature-label">
                            BEYOND A CONTRIBUTION
                        </span>

                        <h2>
                            Be part of
                            <br />
                            something
                            <br />
                            <em>that matters.</em>
                        </h2>

                        <p>
                            Sustainable change is a shared responsibility.
                            Connect with Vijaya Odisha and discover how
                            your support, experience or partnership can
                            contribute to community development.
                        </p>

                        <a href={page("contact.html")}>
                            TALK TO OUR TEAM <span>↗</span>
                        </a>

                    </div>

                </section>

                {/* DONATION ENQUIRY */}
                <section className="donate-enquiry">

                    <div className="donate-enquiry-inner">

                        <div className="donate-enquiry-copy">
                            <span>LET'S TAKE THE NEXT STEP</span>

                            <h2>
                                Interested in
                                <br />
                                making a contribution?
                            </h2>

                            <p>
                                Contact Vijaya Odisha to discuss contribution
                                options and receive the appropriate donation
                                information directly from the organisation.
                            </p>
                        </div>

                        <div className="donate-enquiry-actions">

                            <a
                                href="mailto:orissavijaya@gmail.com?subject=Donation%20Enquiry"
                                className="donate-email-btn"
                            >
                                Email us <span>↗</span>
                            </a>

                            <a
                                href="tel:06742549176"
                                className="donate-phone-btn"
                            >
                                Call 0674-2549176
                            </a>

                        </div>

                    </div>

                </section>

            </main>

            {/* FOOTER */}
            <footer className="donate-footer">

                <div className="donate-footer-grid">

                    <div className="donate-footer-about">

                        <a href={page()}>
                            <img src={logo} alt="Vijaya Odisha" />
                        </a>

                        <p>
                            Vijaya Odisha works towards the welfare and
                            development of communities through social
                            initiatives, education, rehabilitation
                            and empowerment.
                        </p>

                        <span>Working with purpose since 1996.</span>

                    </div>

                    <div className="donate-footer-column">
                        <h3>Explore</h3>
                        <a href={page("about-us.html")}>About Us</a>
                        <a href={page("objectives.html")}>Objectives</a>
                        <a href={page("activities.html")}>Activities</a>
                        <a href={page("strength.html")}>Strength</a>
                        <a href={page("projects.html")}>Projects</a>
                    </div>

                    <div className="donate-footer-column">
                        <h3>Discover</h3>
                        <a href={page("photo-gallery.html")}>Gallery</a>
                        <a href={page("news.html")}>News</a>
                        <a href={page("contact.html")}>Contact</a>
                        <a href={page("donate.html")}>Support Us</a>
                    </div>

                    <div className="donate-footer-column donate-footer-contact">
                        <h3>Visit Us</h3>

                        <p>
                            Plot No. 507, 3rd Floor,
                            <br />
                            In front of State Bank of India,
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

                <div className="donate-footer-bottom">
                    <p>© 2024 VIJAYA ODISHA. All Rights Reserved.</p>

                    <a
                        href="#top"
                        onClick={() => window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })}
                    >
                        Back to top ↑
                    </a>
                </div>

            </footer>

        </div>
    );
}
