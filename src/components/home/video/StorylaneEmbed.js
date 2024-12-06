"use client"
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const StorylaneEmbed = () => {
  const [isInView, setIsInView] = useState(false);
  const embedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (embedRef.current) {
      observer.observe(embedRef.current);
    }

    return () => {
      if (embedRef.current) {
        observer.unobserve(embedRef.current);
      }
    };
  }, []);

  return (
    <div ref={embedRef} >
      <Script src="https://js.storylane.io/js/v2/storylane.js" strategy="lazyOnload" />
      {isInView && (
        <div
          className="sl-embed"
          style={{
            position: 'relative',
            paddingBottom: 'calc(50.26% + 25px)',
            width: '100%',
            height: 0,
            transform: 'scale(1)',
          }}
        >
          <iframe
            loading="lazy"
            className="sl-demo"
            src="https://app.storylane.io/demo/6lngrcpkxznx?embed=inline"
            name="sl-embed"
            allow="fullscreen"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: '1px solid rgba(63,95,172,0.35)',
              boxShadow: '0px 0px 18px rgba(26, 19, 72, 0.15)',
              borderRadius: '10px',
              boxSizing: 'border-box',
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default StorylaneEmbed;
