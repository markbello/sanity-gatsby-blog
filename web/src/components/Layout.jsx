import React, { Fragment } from 'react';
import Header from './Header';

import '../styles/layout.css';
import styles from './Layout.module.css';

const Layout = ({
  children, onHideNav, onShowNav, showNav, siteTitle,
}) => (
  <Fragment>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy;
          {' '}
          {new Date().getFullYear()}
, Built with
          {' '}
          <a href="https://www.sanity.io">Sanity</a>
          {' '}
          &amp;

          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Layout;
