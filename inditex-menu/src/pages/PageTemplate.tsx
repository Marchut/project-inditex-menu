import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PageTemplate.scss';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import { PAGE_STRUCTURE } from '../components/Header/Nav/constants';

const PageTemplate: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const hash = location.hash;

  const currentPage = PAGE_STRUCTURE.find(page => page.href === currentPath);

  useEffect(() => {
    if (!currentPage) {
      navigate(PAGE_STRUCTURE[0].href);
    }
  }, [currentPage, navigate]);

  useEffect(() => {
    const handleScrollToHash = () => {
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const yOffset = -60; // Because of header
          const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
      }
    };

    handleScrollToHash();

    window.addEventListener('hashchange', handleScrollToHash);

    return () => {
      window.removeEventListener('hashchange', handleScrollToHash);
    };
  }, [hash]);

  if (!currentPage) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="pagetemplate">
      <div className="static">
        <Header />
      </div>

      <div className="content">
        <h1 id={currentPath.substring(1)}>{currentPage.name.toUpperCase()}</h1>
        {currentPage.submenu && currentPage.submenu.map((submenuItem) => (
          <React.Fragment key={submenuItem.href}>
            <h2 id={submenuItem.href.split('#')[1]}>{submenuItem.name}</h2>
            <Body />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PageTemplate;