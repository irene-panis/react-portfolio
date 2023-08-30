import Header from './Header';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Error from '../pages/Error';
import Footer from './Footer';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import { useState } from 'react';

export default function Portfolio() {

  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <Error />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="flex">{renderPage()}</main>
      <Footer />
    </>
  );
}