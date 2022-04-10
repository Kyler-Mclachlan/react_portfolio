import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import ProjectPage from './Pages/ProjectPage';
import Resume from './Pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'ProjectPage') {
        return <ProjectPage />;
      }
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        <Footer></Footer>
        {renderPage()}
      </div>
    );
  }
  