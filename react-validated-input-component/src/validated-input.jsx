import React from 'react';

class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleMessage = this.message.bind(this);
    this.handleButton = this.button.bind(this);
  }

  button() {
    if (this.state.value === '' || this.state.value.length < 8) {
      return 'fas fa-times';
    } else {
      return 'fas fa-check';
    }
  }

  message() {
    if (this.state.value === '') {
      return 'A password is required';
    } else if (this.state.value.length < 8) {
      return 'Your password is too short.';
    } else {
      return '';
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor = 'password'>
          <h1> Password: </h1>
          </label>
        <input type="password" value={this.state.value} onChange={this.handleChange} />
        <i className={this.handleButton}></i>

        <p>{this.handleMessage}</p>
      </form>
    );
  }
}

export default Validate;
