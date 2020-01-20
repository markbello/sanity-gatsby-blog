import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import clientConfig from '../../client-config';

const Figure = ({
  node: {
    alt,
    asset: { _id: assetId = null },
    caption,
  },
}) => {
  if (!assetId) { return null; }
  const fluidProps = getFluidGatsbyImage(
    assetId,
    { maxWidth: 675 },
    clientConfig.sanity
  );
  return (
    <figure>
      <Img fluid={fluidProps} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Figure;
