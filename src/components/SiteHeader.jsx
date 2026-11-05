
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.BASE_URL;

const navigation = [
    ["Home", BASE_URL],
    ["About Us", `${BASE_URL}about-us.html`],
    ["Objectives", `${BASE_URL}objectives.html`],
    ["Activities", `${BASE_URL}activities.html`],
    ["Strength", `${BASE_URL}strength.html`],
    ["Projects", `${BASE_URL}projects.html`],
    ["Gallery", `${BASE_URL}photo-gallery.html`],
    ["News", `${BASE_URL}news.html`],
    ["Contact", `${BASE_URL}contact.html`],
];

export default function SiteHeader({
    activePage = "Home",
    tagline = "Serving since 1996"
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const donateUrl = `${BASE_URL}donate.html`;
    const logoUrl = `${BASE_URL}assets/images/vijay-odisha-logo.jpg`;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 18);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* TOP INFORMATION BAR */}
            <div className="home-topline">
                <div className="home-shell home-topline-inner">
                    <span>
                        VIJAYA ODISHA <i />
                        {tagline}
                    </span>

                    <div>
                        <a href={`${BASE_URL}news.html`}>Latest News</a>
                        <a href={`${BASE_URL}contact.html`}>Get in touch</a>
                    </div>
                </div>
            </div>

            {/* MAIN NAVIGATION */}
            <header className={`home-header ${scrolled ? "is-scrolled" : ""}`}>
                <div className="home-shell home-header-inner">

                    {/* LOGO */}
                    <a
                        className="home-brand"
                        href={BASE_URL}
                        aria-label="Vijaya Odisha home"
                    >
                        <img
                            src={logoUrl}
                            alt="Vijaya Odisha logo"
                        />
                    </a>

                    {/* DESKTOP NAVIGATION */}
                    <nav
                        className="home-desktop-nav"
                        aria-label="Main navigation"
                    >
                        {navigation.map(([label, href]) => (
                            <a
                                className={activePage === label ? "current" : ""}
                                href={href}
                                key={label}
                            >
                                {label}
                            </a>
                        ))}

                        {/* SUPPORT US BUTTON */}
                        <a
                            className={`home-nav-donate ${activePage === "Donate" ? "donate-active" : ""
                                }`}
                            href={donateUrl}
                        >
                            Support Us <span>↗</span>
                        </a>
                    </nav>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className={`home-menu-toggle ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(value => !value)}
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                    </button>
                </div>

                {/* MOBILE NAVIGATION */}
                <nav
                    className={`home-mobile-nav ${menuOpen ? "open" : ""}`}
                    aria-label="Mobile navigation"
                >
                    {navigation.map(([label, href]) => (
                        <a
                            href={href}
                            key={label}
                            className={activePage === label ? "current" : ""}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}

                    <a
                        href={donateUrl}
                        onClick={() => setMenuOpen(false)}
                    >
                        Support Us ↗
                    </a>
                </nav>
            </header>
        </>
    );
}
