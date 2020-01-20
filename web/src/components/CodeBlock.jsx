import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

class CodeBlock extends PureComponent {
  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={xonokai}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeBlock.defaultProps = {
  language: null,
};

export default CodeBlock;
