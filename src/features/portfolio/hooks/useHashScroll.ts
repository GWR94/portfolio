import { useEffect } from "react";

export function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const sectionId = hash.startsWith("#") ? hash.slice(1) : hash;
      const element = sectionId ? document.getElementById(sectionId) : null;

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      history.replaceState(null, "", " ");
    }
  }, []);
}
