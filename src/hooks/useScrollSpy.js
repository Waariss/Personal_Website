import { useEffect, useState } from 'react';

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: '-40% 0px -50% 0px',
  threshold: [0, 0.25, 0.5, 0.75, 1],
};

const useScrollSpy = (sectionIds = [], options = DEFAULT_OPTIONS) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length || typeof window === 'undefined') {
      return undefined;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    let rafId = null;

    const observer = new IntersectionObserver((entries) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      });
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      observer.disconnect();
    };
  }, [options, sectionIds]);

  return activeId;
};

export default useScrollSpy;
