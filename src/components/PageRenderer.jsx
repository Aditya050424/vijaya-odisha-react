
import { useEffect, useMemo } from "react";
import legacyScript from "../legacy-script.js?raw";

const BASE_URL = import.meta.env.BASE_URL;

// Convert root-relative URLs to GitHub Pages project-relative URLs.
function fixUrl(url) {
  if (
    !url ||
    url.startsWith("#") ||
    url.startsWith("//") ||
    /^(https?:|data:|blob:|mailto:|tel:|javascript:)/i.test(url)
  ) {
    return url;
  }

  if (url.startsWith("/")) {
    return `${BASE_URL}${url.slice(1)}`;
  }

  return url;
}

// Correct URLs inside inline CSS.
function fixCss(css) {
  return css.replace(
    /url\(\s*(['"]?)(\/[^)'"]*)\1\s*\)/gi,
    (match, quote, url) => {
      return `url(${quote}${fixUrl(url)}${quote})`;
    }
  );
}

// Correct local URLs throughout the original HTML.
function fixHtml(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");

  const attributes = [
    "src",
    "href",
    "poster",
    "action",
    "data-src",
    "data-background",
  ];

  doc.querySelectorAll("*").forEach((element) => {
    attributes.forEach((attribute) => {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(
          attribute,
          fixUrl(element.getAttribute(attribute))
        );
      }
    });

    if (element.hasAttribute("srcset")) {
      const srcset = element.getAttribute("srcset");

      element.setAttribute(
        "srcset",
        srcset
          .split(",")
          .map((item) => {
            const parts = item.trim().split(/\s+/);
            parts[0] = fixUrl(parts[0]);
            return parts.join(" ");
          })
          .join(", ")
      );
    }

    if (element.hasAttribute("style")) {
      element.setAttribute(
        "style",
        fixCss(element.getAttribute("style"))
      );
    }
  });

  return doc.body?.innerHTML || "";
}

export default function PageRenderer({ html, pageKey }) {
  const parsed = useMemo(() => {
    const doc = new DOMParser().parseFromString(html, "text/html");

    return {
      title: doc.querySelector("title")?.textContent || "Vijaya Odisha",

      description:
        doc.querySelector('meta[name="description"]')
          ?.getAttribute("content") || "",

      body: fixHtml(doc.body?.innerHTML || ""),

      styles: Array.from(
        doc.head.querySelectorAll("style")
      ).map((node) => fixCss(node.textContent || "")),
    };
  }, [html]);

  useEffect(() => {
    document.title = parsed.title;

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    if (parsed.description) {
      description.content = parsed.description;
    }

    const script = document.createElement("script");

    script.dataset.vijayaLegacy = pageKey;
    script.textContent = legacyScript;

    document.body.appendChild(script);

    document.dispatchEvent(new Event("DOMContentLoaded"));

    return () => {
      script.remove();
    };
  }, [pageKey, parsed]);

  return (
    <div className="vijaya-react-page" data-page={pageKey}>
      {parsed.styles.map((css, index) => (
        <style key={`${pageKey}-style-${index}`}>
          {css}
        </style>
      ))}

      <div
        dangerouslySetInnerHTML={{
          __html: parsed.body,
        }}
      />
    </div>
  );
}
