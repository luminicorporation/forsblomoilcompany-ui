import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/header.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="title">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
