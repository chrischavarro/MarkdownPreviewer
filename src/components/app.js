import React, { Component } from 'react';
import TextField from './text_field';
import MarkdownPreview from './markdown_preview'

export default class App extends Component {

  render() {
    return (
      <div>
        <span className="welcome-text">Welcome To Markdown Previewer!</span>
        <TextField />
      </div>
    );
  }
}
