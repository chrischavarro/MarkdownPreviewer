import React, { Component } from 'react';
import marked from 'marked';

class MarkdownPreview extends Component {
  render() {
    marked.setOptions({
      breaks: true,
      gfm: true,
      sanitize: true
    })

    function createParsedText() {
      return { __html: parsedText };
    }

    const parsedText = marked(this.props.text);
    return (
      <div className="markdown-preview">
          <div dangerouslySetInnerHTML={createParsedText()} />
      </div>
    )
  };
}

export default MarkdownPreview;
