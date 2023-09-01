function Navigation(props) {
  return ( 
    <ul className="flex gap-20 uppercase">
      <li>
        <a 
          href="#about"
          onClick={() => props.handlePageChange('AboutMe')}
          className={props.currentPage === 'AboutMe' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}
        >
          About Me
        </a>
      </li>
      <li>
        <a 
          href="#projects"
          onClick={() => props.handlePageChange('Projects')}
          className={props.currentPage === 'Projects' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}
        >
          Projects
        </a>
      </li>
      <li>
        <a 
          href="#contact"
          onClick={() => props.handlePageChange('Contact')}
          className={props.currentPage === 'Contact' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}
        >
          Contact
        </a>
      </li>
      <li>
        <a 
          href="#resume"
          onClick={() => props.handlePageChange('Resume')}
          className={props.currentPage === 'Resume' ? 'bg-white text-black py-1 px-2 rounded' : 'bg-none text-white py-1 px-2 rounded'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;