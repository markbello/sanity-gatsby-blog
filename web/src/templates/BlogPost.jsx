/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import GraphQLErrorList from '../components/GraphQLErrorList';
import BlogPost from '../components/blog-post/BlogPost';
import SEO from '../components/SEO';
import Layout from '../containers/Layout';
import { toPlainText } from '../lib/helpers';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      body
    }
  }
`;

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  const { _rawExcerpt: rawExcerpt } = post;

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && <SEO title={post.title || 'Untitled'} description={toPlainText(rawExcerpt)} image={post.mainImage} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
