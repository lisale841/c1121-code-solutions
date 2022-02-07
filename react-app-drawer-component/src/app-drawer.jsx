import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleGetModal = this.getModal.bind(this);
  }

  handleClick() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  getModal() {
    if (this.state.isOn) {
      return 'modal open';
    } else {
      return 'modal';
    }
  }

  render() {
    return (
      <div className="container">
        <i onClick={this.handleClick}
        className="fas fa-bars"></i>
        <div
        onClick={this.handleClick}
        className={this.getModal()}>
          <div
          className="modal-content">
            <h1
            onClick={this.handleClick}
            >Menu</h1>
            <p
            onClick={this.handleClick}
            >About</p>
            <p onClick={this.handleClick}
            >Get Started</p>
            <p onClick={this.handleClick}
            >Sign In</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
