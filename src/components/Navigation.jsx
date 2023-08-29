function Navigation(props) {
  return ( 
    <ul className="nav-links">
      <li>
        <a 
          href="#about"
          onClick={() => props.handlePageChange('AboutMe')}
        >
          About Me
        </a>
      </li>
      <li>
        <a 
          href="#projects"
          onClick={() => props.handlePageChange('Projects')}
        >
          Projects
        </a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
    </ul>
  );
}

export default Navigation;