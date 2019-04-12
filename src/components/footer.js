import React, { useState, useRef } from 'react';
import getDimensions from 'get-dimensions';
import cx from 'classnames';

import { useThrottledResizeEvent } from '../hooks/useResizeEvent';
import { List, Item } from './common/horizontalList';
import { ExternalAnchor } from './common/anchor';
import { NoWrap } from './common/noWrap';

import '../styles/footer.scss';

const Footer = () => {
  const footerRef = useRef();
  const [isFixed, setIsFixed] = useState(null);
  const hideFooter = isFixed === null;

  useThrottledResizeEvent(() => {
    if (typeof document !== 'undefined') {
      const viewportHeight = document.documentElement.clientHeight;
      const contentHeight = Array.prototype.reduce.call(
        footerRef.current.parentElement.children,
        (accum, child) => accum + getDimensions(child).outerHeight,
        0
      );
      setIsFixed(viewportHeight > contentHeight);
    }
  });

  return (
    <footer
      ref={footerRef}
      className={cx('footer', { 'footer--fixed': !!isFixed })}
      style={{ visibility: hideFooter ? 'hidden' : 'visible' }}
    >
      <List>
        <Item>
          © {new Date().getFullYear()} Nils Forsblom Research Companies,{' '}
          <NoWrap>Saudi Arabia</NoWrap>
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
