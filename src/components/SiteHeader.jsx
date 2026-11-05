
import { useEffect, useState } from "react";

const navigation = [
    ["Home", "/"],
    ["About Us", "/about-us.html"],
    ["Objectives", "/objectives.html"],
    ["Activities", "/activities.html"],
    ["Strength", "/strength.html"],
    ["Projects", "/projects.html"],
    ["Gallery", "/photo-gallery.html"],
    ["News", "/news.html"],
    ["Contact", "/contact.html"],
];

export default function SiteHeader({
    activePage = "Home",
    tagline = "Serving since 1996"
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                        <a href="/news.html">Latest News</a>
                        <a href="/contact.html">Get in touch</a>
                    </div>
                </div>
            </div>

            {/* MAIN NAVIGATION */}
            <header className={`home-header ${scrolled ? "is-scrolled" : ""}`}>
                <div className="home-shell home-header-inner">

                    {/* LOGO */}
                    <a
                        className="home-brand"
                        href="/"
                        aria-label="Vijaya Odisha home"
                    >
                        <img
                            src="/assets/images/vijay-odisha-logo.jpg"
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
                            href="/donate.html"
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

                    <a href="/donate.html" onClick={() => setMenuOpen(false)}>
                        Support Us ↗
                    </a>
                </nav>
            </header>
        </>
    );
}
