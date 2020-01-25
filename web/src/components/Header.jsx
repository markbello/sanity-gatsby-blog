import { Link } from 'gatsby';
import React from 'react';
import Icon from './icon/Icon';
import { cn } from '../lib/helpers';

import styles from './Header.module.css';

const Header = ({
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav} type="button">
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/mark-bello/">LinkedIn</a>
          </li>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
