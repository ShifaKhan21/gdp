import React, { useEffect, useRef } from 'react';

// Singleton observer to prevent creating multiple IntersectionObserver instances,
// which causes serious layout thrashing and scroll lag.
let observer = null;

const getObserver = () => {
  if (typeof window === 'undefined') return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          } else {
            entry.target.classList.remove('revealed');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }
  return observer;
};

const ScrollReveal = ({ children, className = '', variant = 'reveal', style = {}, element = 'div' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (el) {
      const obs = getObserver();
      if (obs) obs.observe(el);
    }

    return () => {
      if (el) {
        const obs = getObserver();
        if (obs) obs.unobserve(el);
      }
    };
  }, []);

  const Component = element;

  return (
    <Component ref={elementRef} className={`${variant} ${className}`} style={style}>
      {children}
    </Component>
  );
};

export default ScrollReveal;
