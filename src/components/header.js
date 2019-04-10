import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/header.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="neotech-med title">
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
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
