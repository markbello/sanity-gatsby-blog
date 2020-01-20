import { format } from 'date-fns';
import { Link } from 'gatsby';
import React from 'react';
import { cn, getBlogUrl } from '../../lib/helpers';
import PortableText from '../PortableText';

import styles from './BlogPostPreview.module.css';
import { responsiveTitle3 } from '../typography.module.css';

const BlogPostPreview = ({
  _rawExcerpt: rawExcerpt,
  isInList,
  publishedAt,
  slug: { current: currentSlug },
  title,
}) => (
  <Link
    className={isInList ? styles.inList : styles.inGrid}
    to={getBlogUrl(publishedAt, currentSlug)}
  >
    <div className={styles.text}>
      <h3 className={cn(responsiveTitle3, styles.title)}>{title}</h3>
      {rawExcerpt && (
        <div className={styles.excerpt}>
          <PortableText blocks={rawExcerpt} />
        </div>
      )}
      <div className={styles.date}>{format(publishedAt, 'MMMM Do, YYYY')}</div>
    </div>
  </Link>
);

export default BlogPostPreview;
