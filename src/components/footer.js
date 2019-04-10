import React, { useState } from 'react';
import { css } from '@emotion/core';

import { useResizeEvent } from '../hooks/useResizeEvent';
import { List, Item } from './common/horizontalList';
import { ExternalAnchor } from './common/anchor';
import '../styles/footer.scss';

const fixedStyles = css`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  const [isFixed, setIsFixed] = useState(null);
  const hideFooter = isFixed === null;

  useResizeEvent(() => {
    if (typeof document !== 'undefined') {
      setIsFixed(
        document.documentElement.clientHeight > document.body.clientHeight
      );
    }
  });

  return (
    <footer
      className="footer"
      style={{ display: hideFooter ? 'none' : 'block' }}
      css={isFixed === true ? fixedStyles : null}
    >
      <List>
        <Item>
          © {new Date().getFullYear()} Nils Forsblom Research Companies, Saudi
          Arabia
        </Item>
        <Item>
          <ExternalAnchor href="mailto:nils@adtile.me?subject=Inquiries to Forsblom Oil Company">
            research@forsblomoilcompany.me
          </ExternalAnchor>
        </Item>
      </List>
    </footer>
  );
};

export default Footer;
