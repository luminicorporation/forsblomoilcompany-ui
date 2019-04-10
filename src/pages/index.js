import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';
import '../styles/index.scss';
// import { ExternalAnchor } from '../components/common/anchor';

const NoWrap = p => <span style={{ whiteSpace: 'nowrap' }}>{p.children}</span>;

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
    <Content>
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
          <p>
            <strong>SEC NO. 1 — TEST NO. 3</strong>
          </p>
          <p>Research, Test, and Steam Site.</p>
          <p>
            <strong>POSITION, SPACE, NAVIGATION, TIME</strong>
          </p>
          <p>
            We’re engineering new hyper-sensitive quantum particle which can
            determine your location without the use of satellite signals.
          </p>
        </div>
      </article>
    </Content>
  </Layout>
);

export default IndexPage;
