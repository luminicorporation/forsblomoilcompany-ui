import React, { useState, useRef } from 'react';
import { css } from '@emotion/core';

import { useThrottledResizeEvent } from '../hooks/useResizeEvent';
import { List, Item } from './common/horizontalList';
import { ExternalAnchor } from './common/anchor';
import '../styles/footer.scss';

const fixedStyles = css`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  const footerRef = useRef();
  const [isFixed, setIsFixed] = useState(null);
  const hideFooter = isFixed === null;

  useThrottledResizeEvent(() => {
    if (typeof document !== 'undefined') {
      const viewportHeight = document.documentElement.clientHeight;
      const contentHeight = Array.prototype.reduce.call(
        footerRef.current.parentElement.children,
        (accum, child) => accum + child.clientHeight,
        0
      );
      setIsFixed(viewportHeight > contentHeight);
    }
  });

  return (
    <footer
      ref={footerRef}
      className="footer"
      style={{ visibility: hideFooter ? 'hidden' : 'visible' }}
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
