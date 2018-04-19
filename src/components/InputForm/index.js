import React from "react";

import Preview from "../Preview";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreview: false,
      mirrorKeys: "",
      message: false,
      textArea: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  previewClick = () => {
    this.setState({
      showPreview: !this.state.showPreview
    });
  };

  handleChange(event) {
    this.setState({ 
        mirrorKeys: event.target.value,
        textArea: event.target.value
    });
    return this.state.mirrorKeys;
  };

  handleSubmit(event) {
      event.preventDefault();
      this.setState({
          message: true,
          textArea: '',
          mirrorKeys: ''
      })
  };

  render() {
    return (
      <div>
        <form id="application-input" onSubmit={this.handleSubmit}>
          <label>Apply Here: </label>
          <textarea
            id="application-text"
            rows="8"
            cols="100"
            value={this.state.textArea}
            onChange={this.handleChange}
          />
          <input id="submit" type="submit" value="Submit" />
        </form>
        
        {this.state.message ? <p id="message">Your application was submitted!</p> :
         <p id="message">&nbsp;</p>}

        <button id="preview-toggle" onClick={this.previewClick}>
          Show Preview
        </button>

        {this.state.showPreview ? (
          <Preview keyStrokes={this.state.mirrorKeys} />
        ) : null}
      </div>
    );
  }
}

export default InputForm;
