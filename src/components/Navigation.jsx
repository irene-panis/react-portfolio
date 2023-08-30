function Navigation(props) {
  return ( 
    <ul className="flex gap-4">
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
        <a 
          href="#contact"
          onClick={() => props.handlePageChange('Contact')}
        >
          Contact
        </a>
      </li>
      <li>
        <a 
          href="#resume"
          onClick={() => props.handlePageChange('Resume')}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;