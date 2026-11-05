
import { useEffect, useState } from "react";

const A = "/assets/images/";

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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* SAME TOP INFORMATION BAR AS CONTACT PAGE */}
      <div className="home-topline">
        <div className="home-shell home-topline-inner">
          <span>
            VIJAYA ODISHA <i />
            Serving since 1996
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

          <a
            className="home-brand"
            href="/"
            aria-label="Vijaya Odisha home"
          >
            <img
              src={`${A}vijay-odisha-logo.jpg`}
              alt="Vijaya Odisha logo"
            />
          </a>

          <nav
            className="home-desktop-nav"
            aria-label="Main navigation"
          >
            {navigation.map(([label, href], index) => (
              <a
                className={index === 0 ? "current" : ""}
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}

            <a className="home-nav-donate" href="/donate.html">
              Support Us <span>↗</span>
            </a>
          </nav>

          <button
            className={`home-menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>

        <nav
          className={`home-mobile-nav ${menuOpen ? "open" : ""}`}
          aria-label="Mobile navigation"
        >
          {navigation.map(([label, href]) => (
            <a
              href={href}
              key={label}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            href="/donate.html"
            onClick={() => setMenuOpen(false)}
          >
            Support Us ↗
          </a>
        </nav>
      </header>
    </>
  );
}

function SectionIntro({
  eyebrow,
  title,
  accent,
  copy,
  align = "",
}) {
  return (
    <div className={`home-section-intro ${align}`}>
      <span className="home-eyebrow">{eyebrow}</span>
      <h2>
        {title} <em>{accent}</em>
      </h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="home-footer">
      <div className="home-shell home-footer-grid">

        <div className="home-footer-about">
          <a className="home-brand home-footer-brand" href="/">
            <img
              src={`${A}vijay-odisha-logo.jpg`}
              alt="Vijaya Odisha logo"
            />
            <span>
              <strong>VIJAYA</strong>
              <small>ODISHA</small>
            </span>
          </a>

          <p>
            A front ranking NGO in Odisha working towards the welfare,
            rehabilitation and education of women and children.
          </p>

          <span className="home-footer-since">
            Working with purpose since 1996.
          </span>
        </div>

        <div>
          <h3>Discover</h3>
          <a href="/about-us.html">About Us</a>
          <a href="/objectives.html">Our Objectives</a>
          <a href="/activities.html">Activities</a>
          <a href="/strength.html">Our Strength</a>
        </div>

        <div>
          <h3>Explore</h3>
          <a href="/projects.html">Projects</a>
          <a href="/photo-gallery.html">Photo Gallery</a>
          <a href="/news.html">News & Updates</a>
          <a href="/donate.html">Support Our Work</a>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Bhubaneswar, Odisha</p>
          <p>Working since 1996</p>
          <a className="home-footer-contact" href="/contact.html">
            Connect with us <span>↗</span>
          </a>
        </div>

      </div>

      <div className="home-footer-bottom">
        <div className="home-shell">
          <span>© 2026 Vijaya Odisha. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".home-reveal");

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(node => node.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    nodes.forEach(node => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page" id="top">

      <Header />

      <main>

        {/* HOME HERO */}
        <section className="home-hero">

          <div className="home-shell home-hero-grid">

            <div className="home-hero-copy">

              <span className="home-eyebrow home-hero-eyebrow">
                <i /> SINCE 1996 <b>·</b> BHUBANESWAR, ODISHA
              </span>

              <h1 className="home-hero-heading">
                Committed to
                <br />
                <em className="home-hero-heading-accent">
                  making a difference.
                </em>
              </h1>

              <p>
                Working towards the welfare, rehabilitation and education
                of women and children — building stronger communities
                through purposeful action.
              </p>

              <div className="home-hero-actions">
                <a
                  className="home-button home-button-primary"
                  href="/about-us.html"
                >
                  Discover Vijaya <span>↗</span>
                </a>

                <a className="home-text-link" href="/activities.html">
                  Explore our work <span>→</span>
                </a>
              </div>

              <div className="home-hero-note">
                <span className="home-note-line" />
                A continued commitment to people and communities.
              </div>

            </div>

            <div className="home-hero-visual">

              <div className="home-hero-image-wrap">
                <img
                  className="home-hero-image"
                  src={`${A}20190811_121222.jpg`}
                  alt="Community members participating in a Vijaya Odisha programme"
                />

                <div className="home-image-caption">
                  <span>VIJAYA ODISHA</span>
                  <strong>People. Purpose. Progress.</strong>
                </div>
              </div>

              {/* LIGHT BLUE 1996 CIRCULAR BADGE */}
              <div className="home-hero-year-bubble">
                <span className="home-bubble-label">
                  ESTABLISHED
                </span>
                <strong>1996</strong>
                <span className="home-bubble-caption">
                  Our journey<br />of service
                </span>
              </div>

            </div>

          </div>

          <div className="home-hero-bottom">
            <div className="home-shell">
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </div>

        </section>

        {/* ABOUT VIJAYA */}
        <section className="home-intro home-section">
          <div className="home-shell">

            <div className="home-intro-top home-reveal">
              <span className="home-eyebrow">ABOUT VIJAYA</span>

              <div>
                <h2>
                  Working for a better<br />
                  <em>tomorrow.</em>
                </h2>
              </div>

              <p>
                Vijaya Odisha is committed to creating opportunities
                and improving the lives of women and children through
                education, rehabilitation and community development.
              </p>
            </div>

            <div className="home-focus-grid">

              <a
                className="home-focus-card home-reveal"
                href="/objectives.html"
              >
                <span className="home-card-index">01 / WOMEN</span>
                <span className="home-focus-symbol">↗</span>
                <div>
                  <h3>Women's Welfare</h3>
                  <p>
                    Supporting women through empowerment, education
                    and rehabilitation programmes.
                  </p>
                  <span className="home-card-link">
                    Explore focus area <b>→</b>
                  </span>
                </div>
              </a>

              <a
                className="home-focus-card home-focus-card-tint home-reveal"
                href="/activities.html"
              >
                <span className="home-card-index">02 / CHILDREN</span>
                <span className="home-focus-symbol">↗</span>
                <div>
                  <h3>Child Development</h3>
                  <p>
                    Working towards education, protection
                    and development of children.
                  </p>
                  <span className="home-card-link">
                    Explore focus area <b>→</b>
                  </span>
                </div>
              </a>

              <a
                className="home-focus-card home-reveal"
                href="/projects.html"
              >
                <span className="home-card-index">03 / COMMUNITY</span>
                <span className="home-focus-symbol">↗</span>
                <div>
                  <h3>Community Development</h3>
                  <p>
                    Building stronger communities through
                    meaningful social initiatives.
                  </p>
                  <span className="home-card-link">
                    Explore focus area <b>→</b>
                  </span>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* OBJECTIVES */}
        <section className="home-objectives home-section">
          <div className="home-shell home-objectives-grid">

            <div className="home-objectives-copy home-reveal">
              <span className="home-eyebrow home-eyebrow-light">
                OUR OBJECTIVES
              </span>

              <h2>
                Creating meaningful<br />
                <em>change.</em>
              </h2>

              <p>
                Our objective is to work towards the welfare,
                rehabilitation and education of women and children
                while supporting communities through sustainable initiatives.
              </p>

              <a
                className="home-button home-button-light"
                href="/objectives.html"
              >
                View our objectives <span>↗</span>
              </a>
            </div>

            <div className="home-objective-list home-reveal">
              {[
                ["01", "Education", "Creating access to learning and opportunities for a better future."],
                ["02", "Rehabilitation", "Supporting welfare and rehabilitation with dignity and care."],
                ["03", "Empowerment", "Encouraging confidence, participation and stronger communities."]
              ].map(item => (
                <div className="home-objective-row" key={item[0]}>
                  <span>{item[0]}</span>
                  <div>
                    <h3>{item[1]}</h3>
                    <p>{item[2]}</p>
                  </div>
                  <b>↗</b>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* JOURNEY */}
        <section className="home-journey home-section">
          <div className="home-shell">

            <div className="home-journey-heading home-reveal">
              <SectionIntro
                eyebrow="OUR JOURNEY"
                title="Years of"
                accent="commitment."
                copy="A continuing commitment towards welfare, education, rehabilitation and community development in Odisha."
              />
            </div>

            <div className="home-stats home-reveal">
              <div><strong>1996</strong><span>Established</span></div>
              <div><strong>25<span>+</span></strong><span>Years of service</span></div>
              <div><strong>03</strong><span>Core focus areas</span></div>
              <div><strong>01</strong><span>Mission — serve better</span></div>
            </div>

          </div>
        </section>

        {/* ACTIVITIES */}
        <section className="home-activities home-section">
          <div className="home-shell">

            <div className="home-activities-heading home-reveal">
              <SectionIntro
                eyebrow="WHAT WE DO"
                title="Turning purpose into"
                accent="action."
                copy="Vijaya works through a range of activities focused on welfare, education, health, rehabilitation and community development."
                align="center"
              />
            </div>

            <div className="home-activity-grid">

              <a
                className="home-activity-card home-reveal"
                href="/activities.html"
              >
                <img
                  src={`${A}IMG-20231203-WA0049.jpg`}
                  alt="Vijaya Odisha community outreach activity"
                />
                <div>
                  <span>01 / WELFARE</span>
                  <h3>Relief & Rehabilitation</h3>
                  <b>Explore activity ↗</b>
                </div>
              </a>

              <a
                className="home-activity-card home-reveal"
                href="/activities.html"
              >
                <img
                  src={`${A}IMG-20240719-WA0028.jpg`}
                  alt="Community health and support programme"
                />
                <div>
                  <span>02 / HEALTH</span>
                  <h3>Mobile Medical Services</h3>
                  <b>Explore activity ↗</b>
                </div>
              </a>

              <a
                className="home-activity-card home-reveal"
                href="/activities.html"
              >
                <img
                  src={`${A}IMG-20240719-WA0053.jpg`}
                  alt="Training and learning programme"
                />
                <div>
                  <span>03 / LEARNING</span>
                  <h3>Training Programmes</h3>
                  <b>Explore activity ↗</b>
                </div>
              </a>

              <a
                className="home-activity-card home-reveal"
                href="/activities.html"
              >
                <img
                  src={`${A}IMG-20230720-WA0065.jpg`}
                  alt="Community development gathering"
                />
                <div>
                  <span>04 / COMMUNITY</span>
                  <h3>Community Development</h3>
                  <b>Explore activity ↗</b>
                </div>
              </a>

            </div>

            <div className="home-centered-link">
              <a
                className="home-button home-button-outline"
                href="/activities.html"
              >
                View all activities <span>↗</span>
              </a>
            </div>

          </div>
        </section>

        {/* FIELD STORY */}
        <section className="home-story home-section">
          <div className="home-shell home-story-grid">

            <div className="home-story-images home-reveal">
              <img
                className="home-story-main"
                src={`${A}IMG-20240321-WA0029.jpg`}
                alt="Women and children at a Vijaya Odisha community programme"
              />

              <img
                className="home-story-small"
                src={`${A}IMG-20250310-WA0001-1024x461.jpg`}
                alt="Vijaya Odisha programme participants"
              />

              <span className="home-story-index">
                FIELD NOTES / 01
              </span>
            </div>

            <div className="home-story-copy home-reveal">
              <span className="home-eyebrow">FROM THE FIELD</span>

              <h2>
                Every community has a story.
                <em> We work to make it stronger.</em>
              </h2>

              <p>
                Our work is rooted in people, participation and the belief
                that meaningful progress begins within communities.
              </p>

              <a className="home-text-link" href="/photo-gallery.html">
                Explore our photo stories <span>→</span>
              </a>
            </div>

          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="home-cta">
          <div className="home-shell home-cta-inner">

            <div>
              <span className="home-eyebrow home-eyebrow-light">
                BE PART OF THE JOURNEY
              </span>

              <h2>
                Together, we can make<br />
                <em>a difference.</em>
              </h2>

              <p>
                Your support can help us continue our work for women,
                children and communities.
              </p>
            </div>

            <a
              className="home-button home-button-light"
              href="/donate.html"
            >
              Support Vijaya <span>↗</span>
            </a>

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}
