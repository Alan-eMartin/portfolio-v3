import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';

const Nav = () => {

  return (
    <nav className='navigation-menu'>
      <Link className="logo" href="#home">
        <img
          src={require('../../../styles/assets/favicon_io/large-favicon.png')} 
          alt="Alan Martin"
          aria-label="Click here to go to the top of the page."
        />
          
      </Link>
      <ul>
        <li>
          <Link to="#home" className="nav-hover">Home</Link>
        </li>
        <li>
          <Link to="#about" className="nav-hover">About</Link>
        </li>
        <li>
          <Link to="#projects" className="nav-hover">Projects</Link>
        </li>
        <li>
          <Link to="#skills" className="nav-hover">Skills</Link>
        </li>
        <li>
          <Link to="#contact" className="nav-hover">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;