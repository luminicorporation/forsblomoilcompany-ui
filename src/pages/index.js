import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { NoWrap } from '../components/common/noWrap';
import '../styles/index.scss';
// import { ExternalAnchor } from '../components/common/anchor';

const IndexPage = () => (
  <Layout
    siteTitle={
      <>
        Forsblom
        <br />
        <NoWrap>Oil Company</NoWrap>
      </>
    }
  >
    <SEO title="Home" keywords={[`theoretical`, `science`, `research`]} />
    <article
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      `}
    >
      <GreaterThanCaret />
      <div className="paragraph">
        <p className="subtitle">
          <strong>SEC NO. 1 — TEST NO. 3</strong>
        </p>
        <p>Research, Test, and Steam Site.</p>
        <p className="subtitle">
          <strong>POSITION, SPACE, NAVIGATION, TIME</strong>
        </p>
        <p>
          We’re engineering new hyper-sensitive quantum particle which can
          determine your location without the use of satellite signals.
        </p>
      </div>
    </article>
  </Layout>
);

export default IndexPage;
