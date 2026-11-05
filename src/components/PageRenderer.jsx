import { useEffect, useMemo } from "react";
import legacyScript from "../legacy-script.js?raw";

/**
 * Renders the original page body without rewriting its copy or HTML structure.
 * This content-preserving approach avoids accidental differences during migration.
 */
export default function PageRenderer({ html, pageKey }) {
  const parsed = useMemo(() => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return {
      title: doc.querySelector("title")?.textContent || "Vijaya Odisha",
      description: doc.querySelector('meta[name="description"]')?.getAttribute("content") || "",
      body: doc.body?.innerHTML || "",
      styles: Array.from(doc.head.querySelectorAll("style")).map((node) => node.textContent || ""),
    };
  }, [html]);

  useEffect(() => {
    document.title = parsed.title;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    if (parsed.description) description.content = parsed.description;

    // Initialize the existing interactions after the original page markup is mounted.
    const script = document.createElement("script");
    script.dataset.vijayaLegacy = pageKey;
    script.textContent = legacyScript;
    document.body.appendChild(script);

    // The original script registers DOMContentLoaded handlers. Dispatch after it is registered
    // because React mounts after the browser's initial DOMContentLoaded event.
    document.dispatchEvent(new Event("DOMContentLoaded"));

    return () => {
      script.remove();
    };
  }, [pageKey, parsed]);

  return (
    <div className="vijaya-react-page" data-page={pageKey}>
      {parsed.styles.map((css, index) => (
        <style key={`${pageKey}-style-${index}`}>{css}</style>
      ))}
      <div dangerouslySetInnerHTML={{ __html: parsed.body }} />
    </div>
  );
}
