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
    <div className="wrapper flex flex-col gap-10 min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-montserrat">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="flex flex-grow justify-center align-center min-h-full">{renderPage()}</main>
      <Footer />
    </div>
  );
}