import { useState, useEffect } from "react";

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "experience"];
      let currentActive = "about";

      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight - 50
      ) {
        setActiveSection("experience");
        return;
      }

      const threshold = window.innerHeight * 0.4;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            currentActive = section;
          }
        }
      });

      setActiveSection(currentActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};
