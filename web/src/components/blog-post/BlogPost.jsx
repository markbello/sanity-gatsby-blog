import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import JustComments from 'gatsby-plugin-just-comments';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import Container from '../Container';
import CodeBlock from '../CodeBlock';
import InlineCode from '../InlineCode';

import styles from './BlogPost.module.css';

const BlogPost = ({
  body,
  title,
  mainImage,
  publishedAt,
}) => (
  <article className={styles.root}>
    {mainImage && mainImage.asset && (
      <div className={styles.mainImage}>
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .auto('format')
            .url()}
          alt={mainImage.alt}
        />
      </div>
    )}
    <Container>
      <div className={styles.grid}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
          </div>
          {body && (
            <ReactMarkdown
              source={body}
              renderers={{ code: CodeBlock, inlineCode: InlineCode }}
            />
          )}
          <JustComments apiKey="d76b5559-53f5-4f65-bd36-0c48cd423526" />
        </div>
      </div>
    </Container>
  </article>
);

export default BlogPost;
