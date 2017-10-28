import React, { Component } from 'react';
import MarkdownPreview from './markdown_preview';
import marked from 'marked';

class TextField extends Component {
  constructor(props) {
    super(props)

    this.state = { term:
`# Here's how this works!
1. You can create a line break by including two spaces before moving to the next line
Just like this! :D
2. You can create *all sorts* of ~~wild~~ ~~wacky~~ **crazy** formatting.

Feeling aggressive?
--
* HIT
* THEM
* WITH
* SOME
* BULLETS

Go crazy! Just...***dont try inserting html.***

`};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }


  render() {
    return (
      <div className="row app-body">
        <div className="col-md-6">
          <form>
            <textarea
              className="text-area"
              rows='25'
              onChange={this.onInputChange}
              value={this.state.term}
              />
          </form>
        </div>
        <div className="col-md-6">
          <MarkdownPreview text={this.state.term} />
        </div>
      </div>
    )
  };
}

export default TextField;
