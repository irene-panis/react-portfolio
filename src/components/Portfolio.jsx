import Header from './Header';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Error from '../pages/Error';
import Footer from './Footer';
import useState from 'react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe/>;
      case 'Portfolio':
        return <Projects/>;
      default:
        return <Error/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <main>{renderPage()}</main>
      <Footer/>
    </>
  );
}