import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return ( 
    <ul className="flex flex-wrap gap-20 uppercase">
      <li>
        <Link 
          to="/"
          className={`hover:underline ${currentPage === 'AboutMe' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link 
          to="/Projects"
          className={`hover:underline ${currentPage === 'Projects' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link 
          to="/Contact"
          className={`hover:underline ${currentPage === 'Contact' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link 
          to="/Resume"
          className={`hover:underline ${currentPage === 'Resume' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;