import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sanityLink = '[Sanity](https://www.sanity.io)';
  const gatsbyLink = '[Gatsby](https://www.gatsbyjs.org)';

  const techBranding = `© ${currentYear}, Built with ${sanityLink} & ${gatsbyLink}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          <ReactMarkdown source={techBranding} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
