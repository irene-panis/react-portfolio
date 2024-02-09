import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;
  console.log(currentPage);

  return ( 
    <ul className="flex flex-wrap gap-20 uppercase">
      <li>
        <Link 
          to="/"
          className={`hover:underline ${currentPage === '/' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="/about"
          className={`hover:underline ${currentPage === '/about' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          About
        </Link>
      </li>
      <li>
        <Link 
          to="/projects"
          className={`hover:underline ${currentPage === '/projects' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link 
          to="/contact"
          className={`hover:underline ${currentPage === '/contact' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link 
          to="/resume"
          className={`hover:underline ${currentPage === '/resume' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;