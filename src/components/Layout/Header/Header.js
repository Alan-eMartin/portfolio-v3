import React from "react"
import { Link } from 'gatsby'
import PropTypes from "prop-types";
import './styles.scss';

// Components
import Nav from '../Nav/Nav'

const Header = (props) => {

  // Props
  const {siteTitle, role} = props;

  return (
    <header id="home">
      <Nav /> 
      <div className="header-content container">
        <div className="profile-image">
          <img src={require('../../../images/alan-pp.jpg')} alt={`Image of ${siteTitle}`}/>
          <div className="learn-more-hover">
            <Link to="#about">
              Learn More
            </Link>
          </div>
        </div>
        <div className="header-info">
          <h1>{siteTitle} <span>{role}</span></h1>  
        </div>
      </div>
    </header>
  );
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
