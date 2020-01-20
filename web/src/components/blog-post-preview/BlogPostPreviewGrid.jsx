/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'gatsby';
import React from 'react';
import BlogPostPreview from './BlogPostPreview';

import styles from './BlogPostPreviewGrid.module.css';

const BlogPostPreviewGrid = ({
  title,
  nodes,
  browseMoreHref,
}) => (
  <div className={styles.root}>
    {title && <h2 className={styles.headline}>{title}</h2>}
    <ul className={styles.grid}>
      {nodes
        && nodes.map((node) => (
          <li key={node.id}>
            <BlogPostPreview {...node} />
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

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
};

export default BlogPostPreviewGrid;
