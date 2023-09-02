import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <div className="wrapper flex flex-col gap-10 min-h-screen min-w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-montserrat">
      <Header/>
      <main className="flex flex-grow justify-center align-center min-h-full"><Outlet/></main>
      <Footer />
    </div>
  );
}

export default App;