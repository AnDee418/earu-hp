import React, { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';

const Navigation = ({ items }) => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='sub-page-nav'>
      <ul className='sub-page-nav-list'>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} onClick={(e) => handleScroll(e, item.href.substring(1))}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="scroll-to-top-icon" />
          <span className="scroll-to-top-text">トップに戻る</span>
        </button>
      )}
    </>
  );
};

export { Navigation, ScrollToTopButton };
