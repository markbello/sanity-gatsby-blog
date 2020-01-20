import { Link } from 'gatsby';
import React from 'react';
import BlogPostPreview from './BlogPostPreview';

import styles from './BlogPostPreviewList.module.css';

const BlogPostPreviewList = ({
  title,
  nodes,
  browseMoreHref,
}) => (
  <div className={styles.root}>
    {title && <h2 className={styles.headline}>{title}</h2>}
    <ul className={styles.grid}>
      {nodes.map((node) => (
        <li key={node.id}>
          <BlogPostPreview {...node} isInList={true} />
        </li>
      ))}
    </ul>
    {browseMoreHref && (
      <div className={styles.browseMoreNav}>
        <Link to={browseMoreHref}>Browse more</Link>
      </div>
    )}
  </div>
);

BlogPostPreviewList.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
};

export default BlogPostPreviewList;
