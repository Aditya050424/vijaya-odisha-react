
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Objectives from "./pages/Objectives";
import Activities from "./pages/Activities";
import Strength from "./pages/Strength";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

function RoutedPages() {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route path="/" element={<Home />} />
      <Route path="/index.html" element={<Home />} />

      {/* ABOUT PAGE */}
      <Route path="/about-us.html" element={<About />} />
      <Route path="/about-us" element={<About />} />

      {/* OBJECTIVES PAGE */}
      <Route path="/objectives.html" element={<Objectives />} />
      <Route path="/objectives" element={<Objectives />} />

      {/* ACTIVITIES PAGE */}
      <Route path="/activities.html" element={<Activities />} />
      <Route path="/activities" element={<Activities />} />

      {/* STRENGTH PAGE */}
      <Route path="/strength.html" element={<Strength />} />
      <Route path="/strength" element={<Strength />} />

      {/* PROJECTS PAGE */}
      <Route path="/projects.html" element={<Projects />} />
      <Route path="/projects" element={<Projects />} />

      {/* GALLERY PAGE */}
      <Route path="/photo-gallery.html" element={<Gallery />} />
      <Route path="/photo-gallery" element={<Gallery />} />

      {/* NEWS PAGE */}
      <Route path="/news.html" element={<News />} />
      <Route path="/news" element={<News />} />

      {/* CONTACT PAGE */}
      <Route path="/contact.html" element={<Contact />} />
      <Route path="/contact" element={<Contact />} />

      {/* DONATE PAGE */}
      <Route path="/donate.html" element={<Donate />} />
      <Route path="/donate" element={<Donate />} />

      {/* FALLBACK */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <RoutedPages />
    </BrowserRouter>
  );
}
