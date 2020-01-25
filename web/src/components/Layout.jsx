import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/layout.css';
import styles from './Layout.module.css';

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
}) => (
  <Fragment>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <Footer />
  </Fragment>
);

export default Layout;
