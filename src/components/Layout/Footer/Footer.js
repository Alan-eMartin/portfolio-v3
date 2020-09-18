import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';

const Footer = (props) => {
  
  // Props
  const {siteTitle} = props;

  return (
    <footer>
      <div className="container">
        <Link href="https://github.com/Alan-eMartin/" aria-label='Click to visit Alan' s Github>Designed and Developed by {siteTitle} &#169; 2020</Link>
          
      </div>
    </footer>
  )
};

export default Footer;