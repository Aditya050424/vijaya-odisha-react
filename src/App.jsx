
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageRenderer from "./components/PageRenderer";
import { pageSources } from "./pages/pageSources";

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

const routes = [
];

function RoutedPages() {
  return (
    <Routes>

      {/* HOME PAGE */}
      <Route path="/" element={<Home />} />
      <Route path="/index.html" element={<Home />} />

      {/* ABOUT PAGE */}
      <Route path="/about-us.html" element={<About />} />
      <Route path="/about-us" element={<About />} />

      {/* OBJECTIVES PAGE - REACT COMPONENT */}
      <Route path="/objectives.html" element={<Objectives />} />
      <Route path="/objectives" element={<Objectives />} />

      <Route path="/activities.html" element={<Activities />} />
      <Route path="/activities" element={<Activities />} />

      <Route path="/strength.html" element={<Strength />} />
      <Route path="/strength" element={<Strength />} />

      <Route path="/projects.html" element={<Projects />} />
      <Route path="/projects" element={<Projects />} />

      <Route path="/photo-gallery.html" element={<Gallery />} />
      <Route path="/photo-gallery" element={<Gallery />} />

      <Route path="/news.html" element={<News />} />
      <Route path="/news" element={<News />} />

      <Route path="/contact.html" element={<Contact />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/donate.html" element={<Donate />} />
      <Route path="/donate" element={<Donate />} />



      {/* REMAINING HTML PAGES */}
      {routes.map(({ path, file }) => (
        <Route
          key={path}
          path={path}
          element={
            <PageRenderer
              html={pageSources[file]}
              pageKey={file}
            />
          }
        />
      ))}

      {/* FALLBACK */}
      <Route path="*" element={<Home />} />

    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutedPages />
    </BrowserRouter>
  );
}
