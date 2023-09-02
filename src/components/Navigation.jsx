function Navigation(props) {
  return ( 
    <ul className="flex gap-20 uppercase">
      <li>
        <a 
          href="#about"
          onClick={() => props.handlePageChange('AboutMe')}
          className={`hover:underline ${props.currentPage === 'AboutMe' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          About Me
        </a>
      </li>
      <li>
        <a 
          href="#projects"
          onClick={() => props.handlePageChange('Projects')}
          className={`hover:underline ${props.currentPage === 'Projects' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          Projects
        </a>
      </li>
      <li>
        <a 
          href="#contact"
          onClick={() => props.handlePageChange('Contact')}
          className={`hover:underline ${props.currentPage === 'Contact' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          Contact
        </a>
      </li>
      <li>
        <a 
          href="#resume"
          onClick={() => props.handlePageChange('Resume')}
          className={`hover:underline ${props.currentPage === 'Resume' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}`}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;